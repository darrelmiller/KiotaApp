// See https://aka.ms/new-console-template for more information


using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Http.HttpClientLibrary;
using Bing.Models;
using Nyt;
using Nyt.Reviews.Json;
using Nyt.Models;
using Weather;
using static ApiKeyAuthenticationProvider;
using Microsoft.Extensions.Configuration;
using System.Text.Json;

internal class Program
{
    private static IConfigurationRoot Config;

    private static async Task Main(string[] args)
    {
        // Read from JSON file on disk
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
        Config = builder.Build();           


        //  Make function that translates to Sith speak
        var translate = await TranslateToSith("What is this piece?");
        Console.WriteLine(translate);

        //Make function that searches for news articles
        var news = await SearchNews("Klingon");

        // write out the news articles
        foreach (var article in news.Value)
        {
            Console.WriteLine(article.Name);
        }

        // Call a function that gets a movie review
        var movies = await GetMovieReview("Star Trek");

        // Display all the review results
        foreach (var r in movies)
        {
            Console.WriteLine(r.Summary_short);
        }

        // Create a function that gets the weather based on the passed in city
        var weather = await GetWeather("Montreal");
        Console.WriteLine(weather);


    }

    static async Task<string> TranslateToSith(string text)
    {
        var requestAdapter = new HttpClientRequestAdapter(new NullAuthenticationProvider());
        var translateClient = new Translate.TranslateClient(requestAdapter);
        var result = await translateClient.Translate.Sith.GetAsync(r => r.QueryParameters.Text = text);
        using var sr = new StreamReader(result);
        return sr.ReadToEnd();
    }

    // Create Weather function 
    private static async Task<string> GetWeather(string city)
    {
        var apiKey = Config["WEATHER_API_KEY"];
        
        var requestAdapter = new HttpClientRequestAdapter(new ApiKeyAuthenticationProvider("key", apiKey,ApiKeyAuthenticationProvider.KeyLocation.QueryParameter));
        // Create a new instance of the weather client
        var weatherClient = new Weatherclient(requestAdapter);

        // Call the weather client
        var weather = await weatherClient.VisualCrossingWebServices.Rest.Services
                    .Weatherdata.Forecast.GetAsync(r => { 
                        r.QueryParameters.Locations = city;
                        r.QueryParameters.UnitGroup = "metric";
                        r.QueryParameters.AggregateHours = "24";
                        r.QueryParameters.ContentType = "json";
                    });

        using var sr = new StreamReader(weather);
               // Return the weather
        return sr.ReadToEnd();
    }

    // Create movie review function
    private static async Task<List<Movie>> GetMovieReview(string movieName)
    {
        var apiKey = Config["MOVIE_API_KEY"];
        var requestAdapter = new HttpClientRequestAdapter(new ApiKeyAuthenticationProvider("api-key", apiKey, KeyLocation.QueryParameter));
        var reviewClient = new NytMovieClient(requestAdapter);
        var review = await reviewClient.Reviews.Json.GetAsync(rc => rc.QueryParameters.Query = movieName);
        return review.Results;
    }

    // Create SearchNews function
    private static async Task<News> SearchNews(string query)
    {
        var apiKey = Config["BING_API_KEY"];
        var requestAdapter = new HttpClientRequestAdapter(new ApiKeyAuthenticationProvider("Ocp-Apim-Subscription-Key", apiKey, KeyLocation.Header));
        requestAdapter.BaseUrl = "https://api.bing.microsoft.com/v7.0/";
        var client = new Bing.BingNewsClient(requestAdapter);
        var news = await client.News.Search.GetAsync(rc => rc.QueryParameters.Q = query);
        return news;
    }
    
}


public class ApiKeyAuthenticationProvider : IAuthenticationProvider
{
    private readonly KeyLocation location;
    private readonly string keyName;
    private readonly  string keyValue;

    public enum KeyLocation {
        QueryParameter,
        Header
    }
    public ApiKeyAuthenticationProvider(string keyName, string keyValue, KeyLocation location)
    {
        this.keyName = keyName;
        this.keyValue = keyValue;
        this.location = location;
    }
    
    public async Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object> additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        switch (location)
        {
            case KeyLocation.QueryParameter:
                var uriString = request.URI.OriginalString + (request.URI.Query != string.Empty?"&":"?") + $"{keyName}={keyValue}";
                request.URI = new Uri(uriString);
                break;
            case KeyLocation.Header:
                request.Headers.Add(keyName, keyValue);
                break;
            default:
                throw new ArgumentOutOfRangeException(nameof(location), location, null);
        }
    }


}


public class NullAuthenticationProvider : IAuthenticationProvider
{
    public async Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object> additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        // do nothing
    }
}



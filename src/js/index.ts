import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { NullAccessTokenProvider } from './NullAuthenticationProvider';
import { TranslateClient } from './funtranslate/translateClient';
import { BingNewsClient } from './bingNews/bingNewsClient';
import { NytMovieClient } from './nytmoviereviews/nytMovieClient';
import { WeatherClient } from './weather/weatherClient';
import { ApiKeyAuthenticationProvider, ApiKeyLocation } from './ApiKeyAuthenticationProvider';
import { News } from './bingNews/models';
import { JsonResponse } from './nytmoviereviews/reviews/json';
import * as dotenv from 'dotenv';
dotenv.config();

async function translateToSith(text: string): Promise<string | undefined> {
    var requestAdapter = new FetchRequestAdapter(new NullAccessTokenProvider());
    var translateClient = new TranslateClient(requestAdapter);
    var result = await translateClient.translate.sith.get({ queryParameters: { text: text }});
    return Buffer.from(result!).toString();
}

async function searchNews(query: string) : Promise<News | undefined> {
    var requestAdapter = new FetchRequestAdapter(new ApiKeyAuthenticationProvider(process.env.BING_API_KEY!, 'Ocp-Apim-Subscription-Key', ApiKeyLocation.Header));
    requestAdapter.baseUrl = "https://api.bing.microsoft.com/v7.0/";
    var client = new BingNewsClient(requestAdapter);
    var news = await client.news.search.get({ queryParameters: { q: query }});
    return news;
}

async function getMovieReview(movieName: string) : Promise<JsonResponse | undefined> {
    var requestAdapter = new FetchRequestAdapter(new ApiKeyAuthenticationProvider(process.env.MOVIE_API_KEY!, 'api-key', ApiKeyLocation.QueryParameter));
    var client = new NytMovieClient(requestAdapter);
    var reviews = await client.reviews.json.get({ queryParameters: { query: movieName, getQueryParameter: (originalName: string | undefined): string => { return movieName} }});
    return reviews;
}

async function getWeather(city: string) : Promise<string | undefined> {
    var requestAdapter = new FetchRequestAdapter(new ApiKeyAuthenticationProvider(process.env.WEATHER_API_KEY!, 'key', ApiKeyLocation.QueryParameter));
    var client = new WeatherClient(requestAdapter);
    var weather = await client.visualCrossingWebServices.rest.services.weatherdata.forecast.get({ queryParameters: { locations: city, unitGroup: 'metric', aggregateHours: '24', contentType: 'json'}});
    return Buffer.from(weather!).toString();;
}

async function main() {
    //  Make function that translates to Sith speak
    var translate = await translateToSith("What is this piece?");
    console.log(translate);

    //Make function that searches for news articles
    var news = await searchNews("Klingon");

    // write out the news articles
    news!.value?.map((article) => {
        console.log(article!.name);
    });

    // Call a function that gets a movie review
    var reviews = await getMovieReview("Star Trek");

    // Display all the review results
    reviews?.results!.map((review) => {
        console.log(review!.summary_short);
    });
    
    // Create a function that gets the weather based on the passed in city
    var weather = await getWeather("Montreal");
    console.log(weather);
}

main();
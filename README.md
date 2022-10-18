# Kiota Demo App

This simple console app is built to demonstrate how the Kiota API client generator can simplify calling any OpenAPI described API.

The application will compile but is missing ApiKeys for several of the APIs.  The API keys can be acquired from the respective API website and should be set as environment variables.

## Running the applicationa

### dotnet

The console app needs an `appSettings.json` file. To achieve it, copy the `appSettings.sample.json` as `appSettings.json` and fill the values for the 3 APIs we need API keys.

1. Weather API : https://visualcrossing.com/
2. New York Times Movie Rewiews API : https://developer.nytimes.com/docs/movie-reviews-api/1/overview
3. Bing Search API : https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web

Run `dotnet run` and the app will perform the calls to the underlying APIs.

### JavaScript

The console app needs an `.env` file. To achieve it, copy the `.env.sample` as `.env` and fill the values for the 3 APIs we need API keys.

1. Weather API : https://visualcrossing.com/
2. New York Times Movie Rewiews API : https://developer.nytimes.com/docs/movie-reviews-api/1/overview
3. Bing Search API : https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web

Run `npm i` to install all dependencies and `npm start` to perform the calls to the underlying APIs.

## Funtranslation APIs

This API is great to try because for a low volume of calls it does not even need an API key.

Searching for the word `translate` will bring back this API.

```
kiota search translation

Key                                      Title
apisguru::ebay.com:commerce-translation  Translation API
apisguru::funtranslations.com:braile     FunTranslations Braille API
apisguru::funtranslations.com:index      FunTranslations API
apisguru::funtranslations.com:starwars   Starwars Translations API
```

Using they key we can find more information about this API

```
kiota search apisguru::funtranslations.com:starwars

Key: apisguru::funtranslations.com:starwars
Title: Starwars Translations API
Description: Funtranslations Starwars API gives access to the full set of starwars language translations available at funtranslations.com so that you can integrate them in your workflow or an app. [Click here to get details and subscribe](http://funtranslations.com/api/starwars) .

  You can also subscribe to individual translators. Here are the details.

  Ever wonder how to talk like Yoda? Well, use our API and let your APP/webpage speak like Yoda too.[Click here to subscribe](http://funtranslations.com/api/yoda)

  Sith Translator API. [Click here to subscribe](http://funtranslations.com/api/sith)

  Cheunh Translator API. [Click here to subscribe](http://funtranslations.com/api/cheunh)

  Huttese Translator API. [Click here to subscribe](http://funtranslations.com/api/huttese)

  Mandalorian Translator API. [Click here to subscribe](http://funtranslations.com/api/mandalorian)

  Gungan Translator API. [Click here to subscribe](http://funtranslations.com/api/gungan)

Service: http://funtranslations.com/
OpenAPI: https://funtranslations.com/yaml/funtranslations.starwars.yaml

Hint: use kiota download to download the OpenAPI description.
Example: kiota download apisguru::funtranslations.com:starwars -o <output path>

Hint: use kiota show to display a tree of paths present in the OpenAPI description.
Example: kiota show -k apisguru::funtranslations.com:starwars
```

From the response we can see that we discover more about the API using the `show` command.

```
kiota show -k apisguru::funtranslations.com:starwars

/
 └─translate
    ├─yoda
    ├─sith
    ├─cheunh
    ├─gungan
    ├─mandalorian
    └─huttese

Hint: use the --include-path and --exclude-path options with glob patterns to filter the paths displayed.
Example: kiota show -d https://funtranslations.com/yaml/funtranslations.starwars.yaml --include-path **/foo

Hint: use kiota generate to generate a client for the OpenAPI description.
Example: kiota generate -l <language> -o <output path> -d https://funtranslations.com/yaml/funtranslations.starwars.yaml
```

With this information we can generate our Api client to have the class name `TranslateClient` in the namespace `Translate`.

```
kiota generate -l csharp -o funtranslate -d https://funtranslations.com/yaml/funtranslations.starwars.yaml -c TranslateClient -n Translate
kiota generate -l typescript -o funtranslate -d https://funtranslations.com/yaml/funtranslations.starwars.yaml -c TranslateClient -n Translate
```

## Bing News Search

```
kiota search News
```

```
kiota search apisguru::microsoft.com:cognitiveservices-NewsSearch
```

```
kiota generate -l csharp -o bingNews -d https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/cognitiveservices/data-plane/NewsSearch/stable/v1.0/NewsSearch.json -c BingNewsClient -n Bing
kiota generate -l typescript -o bingNews -d https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/cognitiveservices/data-plane/NewsSearch/stable/v1.0/NewsSearch.json -c BingNewsClient -n Bing
```

## New York Times Movie Reviews

```
kiota search reviews
```

```
kiota search apisguru::nytimes.com:movie_reviews
```

```
kiota generate -l csharp -o nytmoviereviews -d https://raw.githubusercontent.com/nytimes/public_api_specs/master/movie_reviews/movie_reviews_v2.json -c NytMovieClient -n Nyt
kiota generate -l typescript -o weather -d https://www.visualcrossing.com/weather/specs/visualcrossing-weather-api-openapi.json -c Weatherclient -n Weather
```

## Visual Crossing Weather Service

```
kiota search weather
```

```
kiota search apisguru::visualcrossing.com:weather
```

```
kiota generate -l csharp -o weather -d https://www.visualcrossing.com/weather/specs/visualcrossing-weather-api-openapi.json -c Weatherclient -n Weather
kiota generate -l typescript -o weather -d https://www.visualcrossing.com/weather/specs/visualcrossing-weather-api-openapi.json -c Weatherclient -n Weather
```

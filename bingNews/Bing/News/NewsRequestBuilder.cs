using Bing.Models;
using Bing.News.Search;
using Bing.News.Trendingtopics;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
namespace Bing.News {
    /// <summary>Builds and executes requests for operations under \news</summary>
    public class NewsRequestBuilder {
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>The search property</summary>
        public SearchRequestBuilder Search { get =>
            new SearchRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The trendingtopics property</summary>
        public TrendingtopicsRequestBuilder Trendingtopics { get =>
            new TrendingtopicsRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Url template to use to build the URL for the current request builder</summary>
        private string UrlTemplate { get; set; }
        /// <summary>
        /// Instantiates a new NewsRequestBuilder and sets the default values.
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public NewsRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) {
            _ = pathParameters ?? throw new ArgumentNullException(nameof(pathParameters));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/news{?cc*,category*,count*,headlineCount*,mkt*,offset*,originalImg*,safeSearch*,setLang*,textDecorations*,textFormat*}";
            var urlTplParams = new Dictionary<string, object>(pathParameters);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// Instantiates a new NewsRequestBuilder and sets the default values.
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public NewsRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) {
            if(string.IsNullOrEmpty(rawUrl)) throw new ArgumentNullException(nameof(rawUrl));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/news{?cc*,category*,count*,headlineCount*,mkt*,offset*,originalImg*,safeSearch*,setLang*,textDecorations*,textFormat*}";
            var urlTplParams = new Dictionary<string, object>();
            urlTplParams.Add("request-raw-url", rawUrl);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// The News Category API lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
        /// <param name="requestConfiguration">Configuration for the request such as headers, query parameters, and middleware options.</param>
        /// </summary>
        public RequestInformation CreateGetRequestInformation(Action<NewsRequestBuilderGetRequestConfiguration> requestConfiguration = default) {
            var requestInfo = new RequestInformation {
                HttpMethod = Method.GET,
                UrlTemplate = UrlTemplate,
                PathParameters = PathParameters,
            };
            requestInfo.Headers.Add("Accept", "application/json");
            if (requestConfiguration != null) {
                var requestConfig = new NewsRequestBuilderGetRequestConfiguration();
                requestConfiguration.Invoke(requestConfig);
                requestInfo.AddQueryParameters(requestConfig.QueryParameters);
                requestInfo.AddRequestOptions(requestConfig.Options);
                requestInfo.AddHeaders(requestConfig.Headers);
            }
            return requestInfo;
        }
        /// <summary>
        /// The News Category API lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
        /// <param name="cancellationToken">Cancellation token to use when cancelling requests</param>
        /// <param name="requestConfiguration">Configuration for the request such as headers, query parameters, and middleware options.</param>
        /// <param name="responseHandler">Response handler to use in place of the default response handling provided by the core service</param>
        /// </summary>
        public async Task<Bing.Models.News> GetAsync(Action<NewsRequestBuilderGetRequestConfiguration> requestConfiguration = default, IResponseHandler responseHandler = default, CancellationToken cancellationToken = default) {
            var requestInfo = CreateGetRequestInformation(requestConfiguration);
            return await RequestAdapter.SendAsync<Bing.Models.News>(requestInfo, Bing.Models.News.CreateFromDiscriminatorValue, responseHandler, default, cancellationToken);
        }
        /// <summary>The News Category API lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).</summary>
        public class NewsRequestBuilderGetQueryParameters {
            /// <summary>The category of articles to return. For example, Sports articles or Entertainment articles. For a list of possible categories, see [News Categories by Market](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#categories-by-market). Use this parameter only with News Category API. If you do not specify this parameter, the response includes both: Headline articles typically published in the last 24 hours from any category and articles from each parent category (up to four articles). If the article is a headline, the article&apos;s headline field is set to true. By default, the response includes up to 12 headline articles. To specify the number of headline articles to return, set the [headlineCount](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#headlineCount) query parameter.</summary>
            public string Category { get; set; }
            /// <summary>A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.</summary>
            public string Cc { get; set; }
            /// <summary>The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. If you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter, Bing ignores this parameter.</summary>
            public int? Count { get; set; }
            /// <summary>The number of headline articles to return in the response. The default is 12. Specify this parameter only if you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter.</summary>
            public int? HeadlineCount { get; set; }
            /// <summary>The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form &lt;language code&gt;-&lt;country code&gt;. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.</summary>
            public string Mkt { get; set; }
            /// <summary>The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. If you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter, Bing ignores this parameter.</summary>
            public int? Offset { get; set; }
            /// <summary>A Boolean value that determines whether the image&apos;s contentUrl contains a URL that points to a thumbnail of the original article&apos;s image or the image itself. If the article includes an image, and this parameter is set to true, the image&apos;s contentUrl property contains a URL that you may use to download the original image from the publisher&apos;s website. Otherwise, if this parameter is false, the image&apos;s contentUrl and thumbnailUrl URLs both point to the same thumbnail image. Use this parameter only with the News Search API or News Category API. Trending Topics API ignore this parameter.</summary>
            public bool? OriginalImg { get; set; }
            /// <summary>Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing&apos;s adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.</summary>
            public string SafeSearch { get; set; }
            /// <summary>The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that&apos;s used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.</summary>
            public string SetLang { get; set; }
            /// <summary>A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).</summary>
            public bool? TextDecorations { get; set; }
            /// <summary>The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use &lt;b&gt; tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as &lt;, &gt;, and &amp;, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, &lt; is escaped to &amp;lt;).</summary>
            public string TextFormat { get; set; }
        }
        /// <summary>Configuration for the request such as headers, query parameters, and middleware options.</summary>
        public class NewsRequestBuilderGetRequestConfiguration {
            /// <summary>Request headers</summary>
            public IDictionary<string, string> Headers { get; set; }
            /// <summary>Request options</summary>
            public IList<IRequestOption> Options { get; set; }
            /// <summary>Request query parameters</summary>
            public NewsRequestBuilderGetQueryParameters QueryParameters { get; set; } = new NewsRequestBuilderGetQueryParameters();
            /// <summary>
            /// Instantiates a new newsRequestBuilderGetRequestConfiguration and sets the default values.
            /// </summary>
            public NewsRequestBuilderGetRequestConfiguration() {
                Options = new List<IRequestOption>();
                Headers = new Dictionary<string, string>();
            }
        }
    }
}

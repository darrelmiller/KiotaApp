using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
namespace Nyt.Reviews.Json {
    /// <summary>Builds and executes requests for operations under \reviews\{resource-type}.json</summary>
    public class JsonRequestBuilder {
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>Url template to use to build the URL for the current request builder</summary>
        private string UrlTemplate { get; set; }
        /// <summary>
        /// Instantiates a new JsonRequestBuilder and sets the default values.
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public JsonRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) {
            _ = pathParameters ?? throw new ArgumentNullException(nameof(pathParameters));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/reviews/search.json{?query*,critics%2Dpick*,reviewer*,publication%2Ddate*,opening%2Ddate*,offset*,order*}";
            var urlTplParams = new Dictionary<string, object>(pathParameters);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// Instantiates a new JsonRequestBuilder and sets the default values.
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public JsonRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) {
            if(string.IsNullOrEmpty(rawUrl)) throw new ArgumentNullException(nameof(rawUrl));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/reviews/search.json{?query*,critics%2Dpick*,reviewer*,publication%2Ddate*,opening%2Ddate*,offset*,order*}";
            var urlTplParams = new Dictionary<string, object>();
            urlTplParams.Add("request-raw-url", rawUrl);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        public RequestInformation CreateGetRequestInformation(Action<JsonRequestBuilderGetRequestConfiguration> requestConfiguration = default) {
            var requestInfo = new RequestInformation {
                HttpMethod = Method.GET,
                UrlTemplate = UrlTemplate,
                PathParameters = PathParameters,
            };
            requestInfo.Headers.Add("Accept", "application/json");
            if (requestConfiguration != null) {
                var requestConfig = new JsonRequestBuilderGetRequestConfiguration();
                requestConfiguration.Invoke(requestConfig);
                requestInfo.AddQueryParameters(requestConfig.QueryParameters);
                requestInfo.AddRequestOptions(requestConfig.Options);
                requestInfo.AddHeaders(requestConfig.Headers);
            }
            return requestInfo;
        }
        public async Task<JsonResponse> GetAsync(Action<JsonRequestBuilderGetRequestConfiguration> requestConfiguration = default, IResponseHandler responseHandler = default, CancellationToken cancellationToken = default) {
            var requestInfo = CreateGetRequestInformation(requestConfiguration);
            return await RequestAdapter.SendAsync<JsonResponse>(requestInfo, JsonResponse.CreateFromDiscriminatorValue, responseHandler, default, cancellationToken);
        }

        public class JsonRequestBuilderGetQueryParameters {
            /// <summary>Set this parameter to Y to limit the results to NYT Critics&apos; Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)</summary>
            [QueryParameter("critics%2Dpick")]
            public string CriticsPick { get; set; }
            /// <summary>Positive integer, multiple of 20</summary>
            public int? Offset { get; set; }
            /// <summary>Single date: YYYY-MM-DDStart and end date: YYYY-MM-DD;YYYY-MM-DDThe opening-date is the date the movie&apos;s opening date in the New York region.</summary>
            [QueryParameter("opening%2Ddate")]
            public string OpeningDate { get; set; }
            /// <summary>Sets the sort order of the results.Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.If you do not specify a sort order, the results will be ordered by publication-date.</summary>
            public string Order { get; set; }
            /// <summary>Single date: YYYY-MM-DDStart and end date: YYYY-MM-DD;YYYY-MM-DDThe publication-date is the date the review was first published in The Times.</summary>
            [QueryParameter("publication%2Ddate")]
            public string PublicationDate { get; set; }
            /// <summary>Search keywords; matches movie title and indexed termsTo limit your search to exact matches only, surround your search string with single quotation marks (e.g., query=&apos;28+days+later&apos;). Otherwise, responses will include partial matches (&quot;head words&quot;) as well as exact matches (e.g., president will match president, presidents and presidential).    If you specify multiple terms without quotation marks, they will be combined in an OR search.    If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics&apos; Picks request.</summary>
            public string Query { get; set; }
            /// <summary>Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.</summary>
            public string Reviewer { get; set; }
        }
        /// <summary>Configuration for the request such as headers, query parameters, and middleware options.</summary>
        public class JsonRequestBuilderGetRequestConfiguration {
            /// <summary>Request headers</summary>
            public IDictionary<string, string> Headers { get; set; }
            /// <summary>Request options</summary>
            public IList<IRequestOption> Options { get; set; }
            /// <summary>Request query parameters</summary>
            public JsonRequestBuilderGetQueryParameters QueryParameters { get; set; } = new JsonRequestBuilderGetQueryParameters();
            /// <summary>
            /// Instantiates a new jsonRequestBuilderGetRequestConfiguration and sets the default values.
            /// </summary>
            public JsonRequestBuilderGetRequestConfiguration() {
                Options = new List<IRequestOption>();
                Headers = new Dictionary<string, string>();
            }
        }
    }
}

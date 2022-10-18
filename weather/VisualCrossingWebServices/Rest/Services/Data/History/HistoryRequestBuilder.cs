using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
namespace Weather.VisualCrossingWebServices.Rest.Services.Weatherdata.History {
    /// <summary>Builds and executes requests for operations under \VisualCrossingWebServices\rest\services\weatherdata\history</summary>
    public class HistoryRequestBuilder {
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>Url template to use to build the URL for the current request builder</summary>
        private string UrlTemplate { get; set; }
        /// <summary>
        /// Instantiates a new HistoryRequestBuilder and sets the default values.
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public HistoryRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) {
            _ = pathParameters ?? throw new ArgumentNullException(nameof(pathParameters));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/VisualCrossingWebServices/rest/services/weatherdata/history{?maxDistance*,shortColumnNames*,endDateTime*,aggregateHours*,collectStationContributions*,startDateTime*,maxStations*,allowAsynch*,locations*,includeNormals*,contentType*,unitGroup*,key*}";
            var urlTplParams = new Dictionary<string, object>(pathParameters);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// Instantiates a new HistoryRequestBuilder and sets the default values.
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        /// </summary>
        public HistoryRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) {
            if(string.IsNullOrEmpty(rawUrl)) throw new ArgumentNullException(nameof(rawUrl));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/VisualCrossingWebServices/rest/services/weatherdata/history{?maxDistance*,shortColumnNames*,endDateTime*,aggregateHours*,collectStationContributions*,startDateTime*,maxStations*,allowAsynch*,locations*,includeNormals*,contentType*,unitGroup*,key*}";
            var urlTplParams = new Dictionary<string, object>();
            urlTplParams.Add("request-raw-url", rawUrl);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// The weather history data is suitable for retrieving hourly or daily historical weather records.
        /// <param name="requestConfiguration">Configuration for the request such as headers, query parameters, and middleware options.</param>
        /// </summary>
        public RequestInformation CreateGetRequestInformation(Action<HistoryRequestBuilderGetRequestConfiguration> requestConfiguration = default) {
            var requestInfo = new RequestInformation {
                HttpMethod = Method.GET,
                UrlTemplate = UrlTemplate,
                PathParameters = PathParameters,
            };
            if (requestConfiguration != null) {
                var requestConfig = new HistoryRequestBuilderGetRequestConfiguration();
                requestConfiguration.Invoke(requestConfig);
                requestInfo.AddQueryParameters(requestConfig.QueryParameters);
                requestInfo.AddRequestOptions(requestConfig.Options);
                requestInfo.AddHeaders(requestConfig.Headers);
            }
            return requestInfo;
        }
        /// <summary>
        /// The weather history data is suitable for retrieving hourly or daily historical weather records.
        /// <param name="cancellationToken">Cancellation token to use when cancelling requests</param>
        /// <param name="requestConfiguration">Configuration for the request such as headers, query parameters, and middleware options.</param>
        /// <param name="responseHandler">Response handler to use in place of the default response handling provided by the core service</param>
        /// </summary>
        public async Task<Stream> GetAsync(Action<HistoryRequestBuilderGetRequestConfiguration> requestConfiguration = default, IResponseHandler responseHandler = default, CancellationToken cancellationToken = default) {
            var requestInfo = CreateGetRequestInformation(requestConfiguration);
            return await RequestAdapter.SendPrimitiveAsync<Stream>(requestInfo, responseHandler, default, cancellationToken);
        }
        /// <summary>The weather history data is suitable for retrieving hourly or daily historical weather records.</summary>
        public class HistoryRequestBuilderGetQueryParameters {
            public string AggregateHours { get; set; }
            public bool? AllowAsynch { get; set; }
            public bool? CollectStationContributions { get; set; }
            public string ContentType { get; set; }
            public string EndDateTime { get; set; }
            public bool? IncludeNormals { get; set; }
            public string Key { get; set; }
            public string Locations { get; set; }
            public string MaxDistance { get; set; }
            public string MaxStations { get; set; }
            public bool? ShortColumnNames { get; set; }
            public string StartDateTime { get; set; }
            public string UnitGroup { get; set; }
        }
        /// <summary>Configuration for the request such as headers, query parameters, and middleware options.</summary>
        public class HistoryRequestBuilderGetRequestConfiguration {
            /// <summary>Request headers</summary>
            public IDictionary<string, string> Headers { get; set; }
            /// <summary>Request options</summary>
            public IList<IRequestOption> Options { get; set; }
            /// <summary>Request query parameters</summary>
            public HistoryRequestBuilderGetQueryParameters QueryParameters { get; set; } = new HistoryRequestBuilderGetQueryParameters();
            /// <summary>
            /// Instantiates a new historyRequestBuilderGetRequestConfiguration and sets the default values.
            /// </summary>
            public HistoryRequestBuilderGetRequestConfiguration() {
                Options = new List<IRequestOption>();
                Headers = new Dictionary<string, string>();
            }
        }
    }
}

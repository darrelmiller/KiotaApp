import {TrendingTopics} from '../../models/';
import {createTrendingTopicsFromDiscriminatorValue} from '../../models/createTrendingTopicsFromDiscriminatorValue';
import {TrendingtopicsRequestBuilderGetRequestConfiguration} from './trendingtopicsRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /news/trendingtopics */
export class TrendingtopicsRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new TrendingtopicsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/news/trendingtopics{?cc*,count*,mkt*,offset*,safeSearch*,setLang*,since*,sortBy*,textDecorations*,textFormat*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The News Trending Topics API lets you search on Bing and get back a list of trending news topics that are currently trending on Bing. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TrendingtopicsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The News Trending Topics API lets you search on Bing and get back a list of trending news topics that are currently trending on Bing. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TrendingTopics
     */
    public get(requestConfiguration?: TrendingtopicsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TrendingTopics | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TrendingTopics>(requestInfo, createTrendingTopicsFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}

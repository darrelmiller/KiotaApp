import {ForecastRequestBuilder} from './forecast/forecastRequestBuilder';
import {HistoryRequestBuilder} from './history/historyRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /VisualCrossingWebServices/rest/services/weatherdata */
export class WeatherdataRequestBuilder {
    /** The forecast property */
    public get forecast(): ForecastRequestBuilder {
        return new ForecastRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The history property */
    public get history(): HistoryRequestBuilder {
        return new HistoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new WeatherdataRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/VisualCrossingWebServices/rest/services/weatherdata";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}

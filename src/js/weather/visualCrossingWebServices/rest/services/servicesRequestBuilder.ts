import {WithLocationItemRequestBuilder} from './timeline/item/withLocationItemRequestBuilder';
import {TimelineRequestBuilder} from './timeline/timelineRequestBuilder';
import {WeatherdataRequestBuilder} from './weatherdata/weatherdataRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /VisualCrossingWebServices/rest/services */
export class ServicesRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The timeline property */
    public get timeline(): TimelineRequestBuilder {
        return new TimelineRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The weatherdata property */
    public get weatherdata(): WeatherdataRequestBuilder {
        return new WeatherdataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ServicesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/VisualCrossingWebServices/rest/services";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the Weather.VisualCrossingWebServices.rest.services.timeline.item collection
     * @param id Unique identifier of the item
     * @returns a WithLocationItemRequestBuilder
     */
    public timelineById(id: string) : WithLocationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["location"] = id
        return new WithLocationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}

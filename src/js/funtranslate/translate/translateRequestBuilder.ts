import {CheunhRequestBuilder} from './cheunh/cheunhRequestBuilder';
import {GunganRequestBuilder} from './gungan/gunganRequestBuilder';
import {HutteseRequestBuilder} from './huttese/hutteseRequestBuilder';
import {MandalorianRequestBuilder} from './mandalorian/mandalorianRequestBuilder';
import {SithRequestBuilder} from './sith/sithRequestBuilder';
import {YodaRequestBuilder} from './yoda/yodaRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /translate */
export class TranslateRequestBuilder {
    /** The cheunh property */
    public get cheunh(): CheunhRequestBuilder {
        return new CheunhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The gungan property */
    public get gungan(): GunganRequestBuilder {
        return new GunganRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The huttese property */
    public get huttese(): HutteseRequestBuilder {
        return new HutteseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mandalorian property */
    public get mandalorian(): MandalorianRequestBuilder {
        return new MandalorianRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The sith property */
    public get sith(): SithRequestBuilder {
        return new SithRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The yoda property */
    public get yoda(): YodaRequestBuilder {
        return new YodaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TranslateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/translate";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}

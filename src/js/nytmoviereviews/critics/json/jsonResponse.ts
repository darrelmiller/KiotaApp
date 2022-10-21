import {Critic} from '../../models/';
import {createCriticFromDiscriminatorValue} from '../../models/createCriticFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class JsonResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The copyright property */
    private _copyright?: string | undefined;
    /** The num_results property */
    private _num_results?: number | undefined;
    /** The results property */
    private _results?: Critic[] | undefined;
    /** The status property */
    private _status?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new jsonResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the copyright property value. The copyright property
     * @returns a string
     */
    public get copyright() {
        return this._copyright;
    };
    /**
     * Sets the copyright property value. The copyright property
     * @param value Value to set for the copyright property.
     */
    public set copyright(value: string | undefined) {
        this._copyright = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "copyright": n => { this.copyright = n.getStringValue(); },
            "num_results": n => { this.num_results = n.getNumberValue(); },
            "results": n => { this.results = n.getCollectionOfObjectValues<Critic>(createCriticFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the num_results property value. The num_results property
     * @returns a integer
     */
    public get num_results() {
        return this._num_results;
    };
    /**
     * Sets the num_results property value. The num_results property
     * @param value Value to set for the num_results property.
     */
    public set num_results(value: number | undefined) {
        this._num_results = value;
    };
    /**
     * Gets the results property value. The results property
     * @returns a Critic
     */
    public get results() {
        return this._results;
    };
    /**
     * Sets the results property value. The results property
     * @param value Value to set for the results property.
     */
    public set results(value: Critic[] | undefined) {
        this._results = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("copyright", this.copyright);
        writer.writeNumberValue("num_results", this.num_results);
        writer.writeCollectionOfObjectValues<Critic>("results", this.results);
        writer.writeStringValue("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}

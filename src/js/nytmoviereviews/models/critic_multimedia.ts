import {createCritic_multimedia_resourceFromDiscriminatorValue} from './createCritic_multimedia_resourceFromDiscriminatorValue';
import {Critic_multimedia_resource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Critic_multimedia implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The resource property */
    private _resource?: Critic_multimedia_resource | undefined;
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
     * Instantiates a new Critic_multimedia and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "resource": n => { this.resource = n.getObjectValue<Critic_multimedia_resource>(createCritic_multimedia_resourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the resource property value. The resource property
     * @returns a Critic_multimedia_resource
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. The resource property
     * @param value Value to set for the resource property.
     */
    public set resource(value: Critic_multimedia_resource | undefined) {
        this._resource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Critic_multimedia_resource>("resource", this.resource);
        writer.writeAdditionalData(this.additionalData);
    };
}

import {ResponseBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines the identity of a resource. */
export class Identifiable extends ResponseBase implements Parsable {
    /** A String identifier. */
    private _id?: string | undefined;
    /**
     * Instantiates a new Identifiable and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "id": n => { this.id = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. A String identifier.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. A String identifier.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}

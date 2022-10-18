import {createError_escapedFromDiscriminatorValue} from './createError_escapedFromDiscriminatorValue';
import {Error_escaped, Response} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The top-level response that represents a failed request. */
export class ErrorResponse extends Response implements Parsable {
    /** A list of errors that describe the reasons why the request failed. */
    private _errors?: Error_escaped[] | undefined;
    /**
     * Instantiates a new ErrorResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the errors property value. A list of errors that describe the reasons why the request failed.
     * @returns a Error_escaped
     */
    public get errors() {
        return this._errors;
    };
    /**
     * Sets the errors property value. A list of errors that describe the reasons why the request failed.
     * @param value Value to set for the errors property.
     */
    public set errors(value: Error_escaped[] | undefined) {
        this._errors = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "errors": n => { this.errors = n.getCollectionOfObjectValues<Error_escaped>(createError_escapedFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Error_escaped>("errors", this.errors);
    };
}

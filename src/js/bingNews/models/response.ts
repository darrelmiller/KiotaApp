import {Identifiable} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
export class Response extends Identifiable implements Parsable {
    /** The URL To Bing's search result for this item. */
    private _webSearchUrl?: string | undefined;
    /**
     * Instantiates a new Response and sets the default values.
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
            "webSearchUrl": n => { this.webSearchUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
    /**
     * Gets the webSearchUrl property value. The URL To Bing's search result for this item.
     * @returns a string
     */
    public get webSearchUrl() {
        return this._webSearchUrl;
    };
    /**
     * Sets the webSearchUrl property value. The URL To Bing's search result for this item.
     * @param value Value to set for the webSearchUrl property.
     */
    public set webSearchUrl(value: string | undefined) {
        this._webSearchUrl = value;
    };
}

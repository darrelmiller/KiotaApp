import {CreativeWork} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Article extends CreativeWork implements Parsable {
    /** The number of words in the text of the Article. */
    private _wordCount?: number | undefined;
    /**
     * Instantiates a new Article and sets the default values.
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
            "wordCount": n => { this.wordCount = n.getNumberValue(); },
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
     * Gets the wordCount property value. The number of words in the text of the Article.
     * @returns a integer
     */
    public get wordCount() {
        return this._wordCount;
    };
    /**
     * Sets the wordCount property value. The number of words in the text of the Article.
     * @param value Value to set for the wordCount property.
     */
    public set wordCount(value: number | undefined) {
        this._wordCount = value;
    };
}

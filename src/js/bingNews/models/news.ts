import {createNewsArticleFromDiscriminatorValue} from './createNewsArticleFromDiscriminatorValue';
import {NewsArticle, SearchResultsAnswer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a news answer. */
export class News extends SearchResultsAnswer implements Parsable {
    /** Location of local news */
    private _location?: string | undefined;
    /** An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty. */
    private _value?: NewsArticle[] | undefined;
    /**
     * Instantiates a new News and sets the default values.
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
            "location": n => { this.location = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<NewsArticle>(createNewsArticleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the location property value. Location of local news
     * @returns a string
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Location of local news
     * @param value Value to set for the location property.
     */
    public set location(value: string | undefined) {
        this._location = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<NewsArticle>("value", this.value);
    };
    /**
     * Gets the value property value. An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.
     * @returns a NewsArticle
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.
     * @param value Value to set for the value property.
     */
    public set value(value: NewsArticle[] | undefined) {
        this._value = value;
    };
}

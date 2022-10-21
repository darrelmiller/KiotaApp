import {createQueryFromDiscriminatorValue} from './createQueryFromDiscriminatorValue';
import {Query, Thing} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NewsTopic extends Thing implements Parsable {
    /** A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true. */
    private _isBreakingNews?: boolean | undefined;
    /** The URL to the Bing News search results for the search query term */
    private _newsSearchUrl?: string | undefined;
    /** Defines a search query. */
    private _query?: Query | undefined;
    /**
     * Instantiates a new NewsTopic and sets the default values.
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
            "isBreakingNews": n => { this.isBreakingNews = n.getBooleanValue(); },
            "newsSearchUrl": n => { this.newsSearchUrl = n.getStringValue(); },
            "query": n => { this.query = n.getObjectValue<Query>(createQueryFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isBreakingNews property value. A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true.
     * @returns a boolean
     */
    public get isBreakingNews() {
        return this._isBreakingNews;
    };
    /**
     * Sets the isBreakingNews property value. A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true.
     * @param value Value to set for the isBreakingNews property.
     */
    public set isBreakingNews(value: boolean | undefined) {
        this._isBreakingNews = value;
    };
    /**
     * Gets the newsSearchUrl property value. The URL to the Bing News search results for the search query term
     * @returns a string
     */
    public get newsSearchUrl() {
        return this._newsSearchUrl;
    };
    /**
     * Sets the newsSearchUrl property value. The URL to the Bing News search results for the search query term
     * @param value Value to set for the newsSearchUrl property.
     */
    public set newsSearchUrl(value: string | undefined) {
        this._newsSearchUrl = value;
    };
    /**
     * Gets the query property value. Defines a search query.
     * @returns a Query
     */
    public get query() {
        return this._query;
    };
    /**
     * Sets the query property value. Defines a search query.
     * @param value Value to set for the query property.
     */
    public set query(value: Query | undefined) {
        this._query = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Query>("query", this.query);
    };
}

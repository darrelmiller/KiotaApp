import {Answer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines a search result answer. */
export class SearchResultsAnswer extends Answer implements Parsable {
    /** The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results. */
    private _totalEstimatedMatches?: number | undefined;
    /**
     * Instantiates a new SearchResultsAnswer and sets the default values.
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
            "totalEstimatedMatches": n => { this.totalEstimatedMatches = n.getNumberValue(); },
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
     * Gets the totalEstimatedMatches property value. The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
     * @returns a int64
     */
    public get totalEstimatedMatches() {
        return this._totalEstimatedMatches;
    };
    /**
     * Sets the totalEstimatedMatches property value. The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
     * @param value Value to set for the totalEstimatedMatches property.
     */
    public set totalEstimatedMatches(value: number | undefined) {
        this._totalEstimatedMatches = value;
    };
}

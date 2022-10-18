import {createQueryFromDiscriminatorValue} from './createQueryFromDiscriminatorValue';
import {Query, Response} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Defines an answer. */
export class Answer extends Response implements Parsable {
    /** The followUpQueries property */
    private _followUpQueries?: Query[] | undefined;
    /**
     * Instantiates a new Answer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the followUpQueries property value. The followUpQueries property
     * @returns a Query
     */
    public get followUpQueries() {
        return this._followUpQueries;
    };
    /**
     * Sets the followUpQueries property value. The followUpQueries property
     * @param value Value to set for the followUpQueries property.
     */
    public set followUpQueries(value: Query[] | undefined) {
        this._followUpQueries = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "followUpQueries": n => { this.followUpQueries = n.getCollectionOfObjectValues<Query>(createQueryFromDiscriminatorValue); },
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
}

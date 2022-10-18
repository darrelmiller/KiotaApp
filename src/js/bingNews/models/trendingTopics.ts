import {createNewsTopicFromDiscriminatorValue} from './createNewsTopicFromDiscriminatorValue';
import {Answer, NewsTopic} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TrendingTopics extends Answer implements Parsable {
    /** A list of trending news topics on Bing */
    private _value?: NewsTopic[] | undefined;
    /**
     * Instantiates a new TrendingTopics and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<NewsTopic>(createNewsTopicFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<NewsTopic>("value", this.value);
    };
    /**
     * Gets the value property value. A list of trending news topics on Bing
     * @returns a NewsTopic
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. A list of trending news topics on Bing
     * @param value Value to set for the value property.
     */
    public set value(value: NewsTopic[] | undefined) {
        this._value = value;
    };
}

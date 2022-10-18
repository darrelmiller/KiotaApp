import {TrendingTopics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrendingTopicsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TrendingTopics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TrendingTopics();
}

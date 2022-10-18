import {NewsTopic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewsTopicFromDiscriminatorValue(parseNode: ParseNode | undefined) : NewsTopic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NewsTopic();
}

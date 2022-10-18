import {News} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewsFromDiscriminatorValue(parseNode: ParseNode | undefined) : News {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new News();
}

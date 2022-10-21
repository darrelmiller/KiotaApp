import {Query} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Query {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Query();
}

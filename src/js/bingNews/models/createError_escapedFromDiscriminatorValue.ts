import {Error_escaped} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createError_escapedFromDiscriminatorValue(parseNode: ParseNode | undefined) : Error_escaped {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Error_escaped();
}

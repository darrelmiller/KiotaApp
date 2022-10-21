import {ImageObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageObject();
}

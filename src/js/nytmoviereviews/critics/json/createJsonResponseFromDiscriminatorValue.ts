import {JsonResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJsonResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : JsonResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new JsonResponse();
}

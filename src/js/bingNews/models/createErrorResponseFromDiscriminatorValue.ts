import {ErrorResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErrorResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ErrorResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ErrorResponse();
}

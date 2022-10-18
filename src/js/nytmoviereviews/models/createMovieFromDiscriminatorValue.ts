import {Movie} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovieFromDiscriminatorValue(parseNode: ParseNode | undefined) : Movie {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Movie();
}

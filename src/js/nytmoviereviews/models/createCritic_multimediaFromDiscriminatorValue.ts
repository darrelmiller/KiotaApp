import {Critic_multimedia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCritic_multimediaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Critic_multimedia {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Critic_multimedia();
}

import { AuthenticationProvider, RequestInformation } from "@microsoft/kiota-abstractions";

export class NullAccessTokenProvider implements AuthenticationProvider {
    public authenticateRequest = async (request: RequestInformation, additionalAuthenticationContext?: Record<string, unknown>): Promise<void> => {
        // Do nothing
    };
}
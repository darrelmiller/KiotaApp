import { AllowedHostsValidator, AuthenticationProvider, RequestInformation, validateProtocol } from "@microsoft/kiota-abstractions";

/** Authenticate a request by using an API Key */
export class ApiKeyAuthenticationProvider implements AuthenticationProvider {
  private readonly validator: AllowedHostsValidator;
  /**
   * @constructor Creates an instance of ApiKeyAuthenticationProvider
   * @param apiKey The API Key to use for authentication
   * @param parameterName The name of the parameter to use for authentication
   * @param location The location of the parameter to use for authentication
   * @param validHosts The hosts that are allowed to use this authentication provider
   */
  public constructor(
    private readonly apiKey: string,
    private readonly parameterName: string,
    private readonly location: ApiKeyLocation,
    validHosts?: Set<string>
  ) {
    if (apiKey === undefined || apiKey === "") {
      throw new Error("apiKey cannot be null or empty");
    }
    if (parameterName === undefined || parameterName === "") {
      throw new Error("parameterName cannot be null or empty");
    }
    this.validator = new AllowedHostsValidator(validHosts);
  }
  public authenticateRequest(
    request: RequestInformation,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    additionalAuthenticationContext?: Record<string, unknown> | undefined
  ): Promise<void> {
    const url = request.URL;
    if (!url || !this.validator.isUrlHostValid(url)) {
      return Promise.resolve();
    }
    switch (this.location) {
      case ApiKeyLocation.QueryParameter:
        request.URL +=
          (url.indexOf("?") === -1 ? "?" : "&") +
          this.parameterName +
          "=" +
          this.apiKey;
        break;
      case ApiKeyLocation.Header:
        request.headers[this.parameterName] = this.apiKey;
        break;
      default:
        throw new Error("Unsupported ApiKeyLocation");
    }
    return Promise.resolve();
  }
}
/** The location for the API key */
export enum ApiKeyLocation {
  /** The API key is in the query parameters */
  QueryParameter,
  /** The API key is in the headers */
  Header,
}
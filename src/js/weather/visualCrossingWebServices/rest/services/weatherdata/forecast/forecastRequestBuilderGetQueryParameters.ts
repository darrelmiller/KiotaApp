
/** Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level. */
export class ForecastRequestBuilderGetQueryParameters {
    public aggregateHours?: string | undefined;
    public allowAsynch?: boolean | undefined;
    public contentType?: string | undefined;
    public key?: string | undefined;
    public locations?: string | undefined;
    public sendAsDatasource?: boolean | undefined;
    public shortColumnNames?: boolean | undefined;
    public unitGroup?: string | undefined;
}

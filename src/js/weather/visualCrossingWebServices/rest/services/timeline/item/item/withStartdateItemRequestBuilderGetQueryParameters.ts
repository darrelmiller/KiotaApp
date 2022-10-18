
/** Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions. */
export class WithStartdateItemRequestBuilderGetQueryParameters {
    /** data format of the output either json or CSV */
    public contentType?: string | undefined;
    /** data to include in the output (required for CSV format - days,hours,alerts,current,events ) */
    public include?: string | undefined;
    public key?: string | undefined;
    /** Language to use for weather descriptions */
    public lang?: string | undefined;
    public unitGroup?: string | undefined;
}


/** The weather history data is suitable for retrieving hourly or daily historical weather records. */
export class HistoryRequestBuilderGetQueryParameters {
    public aggregateHours?: string | undefined;
    public allowAsynch?: boolean | undefined;
    public collectStationContributions?: boolean | undefined;
    public contentType?: string | undefined;
    public endDateTime?: string | undefined;
    public includeNormals?: boolean | undefined;
    public key?: string | undefined;
    public locations?: string | undefined;
    public maxDistance?: string | undefined;
    public maxStations?: string | undefined;
    public shortColumnNames?: boolean | undefined;
    public startDateTime?: string | undefined;
    public unitGroup?: string | undefined;
}

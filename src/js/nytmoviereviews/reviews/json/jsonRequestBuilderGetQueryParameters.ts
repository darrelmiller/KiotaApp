
export class JsonRequestBuilderGetQueryParameters {
    /** Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.) */
    public criticsPick?: string | undefined;
    /** Positive integer, multiple of 20 */
    public offset?: number | undefined;
    /** Single date: YYYY-MM-DDStart and end date: YYYY-MM-DD;YYYY-MM-DDThe opening-date is the date the movie's opening date in the New York region. */
    public openingDate?: string | undefined;
    /** Sets the sort order of the results.Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.If you do not specify a sort order, the results will be ordered by publication-date. */
    public order?: string | undefined;
    /** Single date: YYYY-MM-DDStart and end date: YYYY-MM-DD;YYYY-MM-DDThe publication-date is the date the review was first published in The Times. */
    public publicationDate?: string | undefined;
    /** Search keywords; matches movie title and indexed termsTo limit your search to exact matches only, surround your search string with single quotation marks (e.g., query='28+days+later'). Otherwise, responses will include partial matches ("head words") as well as exact matches (e.g., president will match president, presidents and presidential).    If you specify multiple terms without quotation marks, they will be combined in an OR search.    If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics' Picks request. */
    public query?: string | undefined;
    /** Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis. */
    public reviewer?: string | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "criticsPick": return "critics%2Dpick";
            case "openingDate": return "opening%2Ddate";
            case "publicationDate": return "publication%2Ddate";
            default: return originalName;
        }
    };
}

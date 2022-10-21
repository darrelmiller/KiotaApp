using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Nyt.Models {
    public class Movie : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The byline property</summary>
        public string Byline { get; set; }
        /// <summary>The critics_pick property</summary>
        public int? Critics_pick { get; set; }
        /// <summary>The date_updated property</summary>
        public string Date_updated { get; set; }
        /// <summary>The display_title property</summary>
        public string Display_title { get; set; }
        /// <summary>The headline property</summary>
        public string Headline { get; set; }
        /// <summary>The link property</summary>
        public Movie_link Link { get; set; }
        /// <summary>The mpaa_rating property</summary>
        public string Mpaa_rating { get; set; }
        /// <summary>The multimedia property</summary>
        public Movie_multimedia Multimedia { get; set; }
        /// <summary>The opening_date property</summary>
        public string Opening_date { get; set; }
        /// <summary>The publication_date property</summary>
        public string Publication_date { get; set; }
        /// <summary>The summary_short property</summary>
        public string Summary_short { get; set; }
        /// <summary>
        /// Instantiates a new Movie and sets the default values.
        /// </summary>
        public Movie() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static Movie CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Movie();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"byline", n => { Byline = n.GetStringValue(); } },
                {"critics_pick", n => { Critics_pick = n.GetIntValue(); } },
                {"date_updated", n => { Date_updated = n.GetStringValue(); } },
                {"display_title", n => { Display_title = n.GetStringValue(); } },
                {"headline", n => { Headline = n.GetStringValue(); } },
                {"link", n => { Link = n.GetObjectValue<Movie_link>(Movie_link.CreateFromDiscriminatorValue); } },
                {"mpaa_rating", n => { Mpaa_rating = n.GetStringValue(); } },
                {"multimedia", n => { Multimedia = n.GetObjectValue<Movie_multimedia>(Movie_multimedia.CreateFromDiscriminatorValue); } },
                {"opening_date", n => { Opening_date = n.GetStringValue(); } },
                {"publication_date", n => { Publication_date = n.GetStringValue(); } },
                {"summary_short", n => { Summary_short = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("byline", Byline);
            writer.WriteIntValue("critics_pick", Critics_pick);
            writer.WriteStringValue("date_updated", Date_updated);
            writer.WriteStringValue("display_title", Display_title);
            writer.WriteStringValue("headline", Headline);
            writer.WriteObjectValue<Movie_link>("link", Link);
            writer.WriteStringValue("mpaa_rating", Mpaa_rating);
            writer.WriteObjectValue<Movie_multimedia>("multimedia", Multimedia);
            writer.WriteStringValue("opening_date", Opening_date);
            writer.WriteStringValue("publication_date", Publication_date);
            writer.WriteStringValue("summary_short", Summary_short);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

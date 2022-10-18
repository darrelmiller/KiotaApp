using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Nyt.Models {
    public class Critic : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The bio property</summary>
        public string Bio { get; set; }
        /// <summary>The display_name property</summary>
        public string Display_name { get; set; }
        /// <summary>The multimedia property</summary>
        public Critic_multimedia Multimedia { get; set; }
        /// <summary>The seo_name property</summary>
        public string Seo_name { get; set; }
        /// <summary>The sort_name property</summary>
        public string Sort_name { get; set; }
        /// <summary>The status property</summary>
        public string Status { get; set; }
        /// <summary>
        /// Instantiates a new Critic and sets the default values.
        /// </summary>
        public Critic() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static Critic CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Critic();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"bio", n => { Bio = n.GetStringValue(); } },
                {"display_name", n => { Display_name = n.GetStringValue(); } },
                {"multimedia", n => { Multimedia = n.GetObjectValue<Critic_multimedia>(Critic_multimedia.CreateFromDiscriminatorValue); } },
                {"seo_name", n => { Seo_name = n.GetStringValue(); } },
                {"sort_name", n => { Sort_name = n.GetStringValue(); } },
                {"status", n => { Status = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("bio", Bio);
            writer.WriteStringValue("display_name", Display_name);
            writer.WriteObjectValue<Critic_multimedia>("multimedia", Multimedia);
            writer.WriteStringValue("seo_name", Seo_name);
            writer.WriteStringValue("sort_name", Sort_name);
            writer.WriteStringValue("status", Status);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}

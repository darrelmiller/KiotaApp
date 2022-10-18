using Bing.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>The most generic kind of creative work, including books, movies, photographs, software programs, etc.</summary>
    public class CreativeWork : Thing, IParsable {
        /// <summary>The date on which the CreativeWork was published.</summary>
        public string DatePublished { get; private set; }
        /// <summary>The source of the creative work.</summary>
        public List<Thing> Provider { get; private set; }
        /// <summary>The URL to a thumbnail of the item.</summary>
        public string ThumbnailUrl { get; private set; }
        /// <summary>Defines a video object that is relevant to the query.</summary>
        public VideoObject Video { get; set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new CreativeWork CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            var mappingValue = parseNode.GetChildNode("_type")?.GetStringValue();
            return mappingValue switch {
                "Article" => new Article(),
                "ImageObject" => new ImageObject(),
                "MediaObject" => new MediaObject(),
                "NewsArticle" => new NewsArticle(),
                "VideoObject" => new VideoObject(),
                _ => new CreativeWork(),
            };
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"datePublished", n => { DatePublished = n.GetStringValue(); } },
                {"provider", n => { Provider = n.GetCollectionOfObjectValues<Thing>(Thing.CreateFromDiscriminatorValue)?.ToList(); } },
                {"thumbnailUrl", n => { ThumbnailUrl = n.GetStringValue(); } },
                {"video", n => { Video = n.GetObjectValue<VideoObject>(VideoObject.CreateFromDiscriminatorValue); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
            writer.WriteObjectValue<VideoObject>("video", Video);
        }
    }
}

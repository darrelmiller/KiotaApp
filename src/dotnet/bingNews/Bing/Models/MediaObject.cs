using Bing.Models;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a media object.</summary>
    public class MediaObject : CreativeWork, IParsable {
        /// <summary>Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).</summary>
        public string ContentUrl { get; private set; }
        /// <summary>The height of the source media object, in pixels.</summary>
        public int? Height { get; private set; }
        /// <summary>The width of the source media object, in pixels.</summary>
        public int? Width { get; private set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new MediaObject CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            var mappingValue = parseNode.GetChildNode("_type")?.GetStringValue();
            return mappingValue switch {
                "ImageObject" => new ImageObject(),
                "VideoObject" => new VideoObject(),
                _ => new MediaObject(),
            };
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"contentUrl", n => { ContentUrl = n.GetStringValue(); } },
                {"height", n => { Height = n.GetIntValue(); } },
                {"width", n => { Width = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
        }
    }
}

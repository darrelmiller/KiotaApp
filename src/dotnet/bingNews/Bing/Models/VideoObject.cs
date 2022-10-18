using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace Bing.Models {
    /// <summary>Defines a video object that is relevant to the query.</summary>
    public class VideoObject : MediaObject, IParsable {
        /// <summary>The allowHttpsEmbed property</summary>
        public bool? AllowHttpsEmbed { get; private set; }
        /// <summary>The allowMobileEmbed property</summary>
        public bool? AllowMobileEmbed { get; private set; }
        /// <summary>The embedHtml property</summary>
        public string EmbedHtml { get; private set; }
        /// <summary>The isSuperfresh property</summary>
        public bool? IsSuperfresh { get; private set; }
        /// <summary>The motionThumbnailId property</summary>
        public string MotionThumbnailId { get; private set; }
        /// <summary>The motionThumbnailUrl property</summary>
        public string MotionThumbnailUrl { get; private set; }
        /// <summary>Defines an image</summary>
        public ImageObject Thumbnail { get; set; }
        /// <summary>The videoId property</summary>
        public string VideoId { get; private set; }
        /// <summary>The viewCount property</summary>
        public int? ViewCount { get; private set; }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static new VideoObject CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new VideoObject();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public new IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>>(base.GetFieldDeserializers()) {
                {"allowHttpsEmbed", n => { AllowHttpsEmbed = n.GetBoolValue(); } },
                {"allowMobileEmbed", n => { AllowMobileEmbed = n.GetBoolValue(); } },
                {"embedHtml", n => { EmbedHtml = n.GetStringValue(); } },
                {"isSuperfresh", n => { IsSuperfresh = n.GetBoolValue(); } },
                {"motionThumbnailId", n => { MotionThumbnailId = n.GetStringValue(); } },
                {"motionThumbnailUrl", n => { MotionThumbnailUrl = n.GetStringValue(); } },
                {"thumbnail", n => { Thumbnail = n.GetObjectValue<ImageObject>(ImageObject.CreateFromDiscriminatorValue); } },
                {"videoId", n => { VideoId = n.GetStringValue(); } },
                {"viewCount", n => { ViewCount = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public new void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            base.Serialize(writer);
            writer.WriteObjectValue<ImageObject>("thumbnail", Thumbnail);
        }
    }
}

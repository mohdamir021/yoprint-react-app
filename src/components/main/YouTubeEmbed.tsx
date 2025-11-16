import React from "react";
import { AspectRatio, Box } from "@chakra-ui/react";

interface YouTubeEmbedProps {
  videoUrl?: string
  title?: string;
   borderRadius?: string;  // Optional border radius e.g. "md", "lg", "20px"
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoUrl,
  title = "YouTube video player",
  borderRadius = "md"
}) => {
  return (
     <Box overflow="hidden" borderRadius={borderRadius} w="100%">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`${videoUrl}?autoplay=0`}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 0 }}
        />
      </AspectRatio>
    </Box>
  );
};

export default YouTubeEmbed;

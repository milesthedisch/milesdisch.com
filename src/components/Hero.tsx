import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({
  title,
  subheading,
}: {
  title: string;
  subheading: string;
}) => (
  <>
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  </>
);

Hero.defaultProps = {
  title: "Miles Disch",
  subheading: "hello 💻",
};

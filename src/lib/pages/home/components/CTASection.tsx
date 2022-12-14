import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => (
  <Box textAlign="center">
    <Link
      _hover={undefined}
      href="https://github.com/sozonome/vite-react-chakra-starter"
    >
      <Button leftIcon={<AiFillGithub />} size="sm">
        Open in Github
      </Button>
    </Link>
    <Flex marginY={4} justifyContent="center" gridGap={2}>
      <Link
        aria-label="Deploy to Vercel"
        isExternal
        href="pinhome-consumer-app:///app/mortgage-promo-detail%3Fguid=8801ca40-4dfd-4fb1-b135-3326abbfbed4%26applyForTakeOver%3Dtrue"
      >
        <Image src="https://vercel.com/button" alt="Vercel deploy button" />
      </Link>
      <Link
        aria-label="Deploy to Netlify"
        isExternal
        href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/vite-react-chakra-starter"
      >
        <Image
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="Netlify deploy button"
        />
      </Link>
    </Flex>
  </Box>
);

export default CTASection;

import { Grid } from "@chakra-ui/react";

import CTASection from "./components/CTASection";
import HelperText from "./components/HelperText";
import SomeText from "./components/SomeText";

const Home = () => {
  return (
    <Grid gap={4} maxWidth={400} marginX="auto">
      <SomeText />
      <CTASection />
      <HelperText />
    </Grid>
  );
};

export default Home;

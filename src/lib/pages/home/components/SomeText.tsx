import { Grid, Heading, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="2xl" fontWeight="extrabold">
        Link Tester
      </Heading>
      <Text fontSize="sm">Insert link and test the link here.</Text>
    </Grid>
  );
};

export default SomeText;

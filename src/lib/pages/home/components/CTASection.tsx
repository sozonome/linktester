import { Box, Button, FormControl, Grid, Input, Link } from "@chakra-ui/react";
import * as React from "react";
import { useLocation } from "react-router-dom";

const CTASection = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const [linkInput, setLinkInput] = React.useState<string>(
    (searchParams.get("link") as string) ?? ""
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLinkInput(e.target.value);

  return (
    <Grid textAlign="center" gap={2}>
      <FormControl>
        <Input
          onChange={handleChangeInput}
          value={linkInput}
          placeholder="insert / paste your link / app link here"
          width={{ base: "full", sm: 400 }}
        />
      </FormControl>

      <Box>
        <Button
          as={linkInput.length ? Link : undefined}
          aria-label="Test Link"
          href={linkInput}
          colorScheme="green"
          isDisabled={linkInput.length === 0}
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Link
        </Button>
      </Box>
    </Grid>
  );
};

export default CTASection;

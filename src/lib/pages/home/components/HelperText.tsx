import { Text, Tooltip } from "@chakra-ui/react";

const label =
  "Testing app url is not straightforward, usually it's clickable through SMS. But building SMS service just for testing purposes is a bit overkill. So this project utilize <a> tag to be used for testing app url.";

const HelperText = () => {
  return (
    <Tooltip label={label}>
      <Text fontSize="xs" color="gray" textAlign="center">
        This is helpful to test deep link or app link or app scheme url which
        cannot be copy pasted to other app to be clicked / tested. Make sure the
        app is already installed if testing deep link / app url and being opened
        in the background (still figuring out why, hit me up if you know).
      </Text>
    </Tooltip>
  );
};

export default HelperText;

import { Box, Center, Flex } from '@chakra-ui/react';
import { QrReader } from 'react-qr-reader';
import './App.css';
import { useState } from 'react';

function ViewFinder() {
  return (
    <Flex
      className="animated-container"
      direction="column"
      w="100%"
      h="100%"
      opacity="1"
      justifyContent="space-between"
      position="absolute"
      zIndex="999"
      padding="5em"
    >
      <Flex justifyContent="space-between">
        <Box
          w="50px"
          h="50px"
          borderLeft="10px solid lime"
          borderTop="10px solid lime"
        />
        <Box
          w="50px"
          h="50px"
          borderRight="10px solid lime"
          borderTop="10px solid lime"
        />
      </Flex>
      <Flex justifyContent="space-between">
        <Box
          w="50px"
          h="50px"
          borderLeft="10px solid lime"
          borderBottom="10px solid lime"
        />
        <Box
          w="50px"
          h="50px"
          borderRight="10px solid lime"
          borderBottom="10px solid lime"
        />
      </Flex>
    </Flex>
  );
}

function WebCam(props) {
  const onResult = (result) => {
    if (result?.text) {
      props.setQrCode(result?.text);
    }
  };

  return (
    <Flex
      w="fit-content"
      direction="row"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
    >
      <Center>
        <Box position="relative">
          <ViewFinder />
          <QrReader
            constraints={{
              facingMode: 'environment',
              aspectRatio: 1,
            }}
            onResult={onResult}
            containerStyle={{
              zIndex: 0,
              width: '550px',
            }}
            scanDelay={1000}
          />
        </Box>
      </Center>
    </Flex>
  );
}

function App() {
  const [qrCode, setQrCode] = useState('');
  return (
    <Flex h="100vh" direction="column">
      <Center fontSize="3rem" margin="auto">
        <h1>QR Code Scanner</h1>
      </Center>
      <WebCam setQrCode={setQrCode} />
      <Box margin="auto">{`seu QR Code: ${qrCode}`}</Box>
    </Flex>
  );
}

export default App;

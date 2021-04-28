import { Header } from "../components/Header";
import Head from 'next/head';
import { Flex, Heading, Box, Text, Wrap, WrapItem, Image } from "@chakra-ui/react";

export default function NorthAmerica() {
    return (
        <>
            <Head>
                <title>América do Norte | WorldTrip</title>
            </Head>
            <Header continentPage={true}/>
            <Flex backgroundImage="url('/continents/northamericacontinent.png')" bgSize={["contain", "cover"]} height={["130", "500"]} flexDir="column" align={["center", "end"]} justify={["center", "flex-end"]}>
                <Heading position="relative" color='#F5F8FA' fontSize={["28", "48px"]} fontWeight="600" mb={["0", "35px"]} ml={["0", "140"]}>América do Norte</Heading>
            </Flex>
            <Flex justify="space-between" flexDir={["column", "row"]} pb={["0", "2rem"]} pt={["1rem", "4rem"]} px={["1.5rem", "7rem"]}>
                <Box flex="50%">
                    <Text fontWeight="400" color="#47585B" fontSize={["14px", "24px"]} textAlign="justify">
                    A América do Norte está localizada no extremo norte das Américas e
                    é composta por apenas três países: Estados Unidos, Canadá e México,
                    além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca,
                    com representação no parlamento) e Bermudas (dependência britânica).
                    </Text>
                </Box>
                <Flex py={["10px", "0"]} justify={["space-between", "space-evenly"]} alignItems={["left", "center"]} flex="50%">
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">3</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>países</Text>
                    </Flex>
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">2</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>línguas</Text>
                    </Flex>
                    <Flex flexDir="column" align={["left", "center"]}>
                        <Heading color="#FFBA08" fontSize={["24", "48"]} fontWeight="600">27</Heading>
                        <Text color="#47585B" fontSize={["18", "24"]} fontWeight={["400", "600"]}>cidades +100</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box px={["2rem", "7rem"]}>
                <Heading py={["1rem", "2rem"]}>Cidades +100</Heading>
                <Wrap spacing={"35px"}>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/newyork.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        New york
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        USA
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/usa.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/toronto.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Toronto
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        Canada
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/canada.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/losangeles.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Los Angeles
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        USA
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/usa.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/lasvegas.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Las Vegas
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        USA
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/usa.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem width={["100%", "auto"]}>
                        <Box w="256px" mx="auto">
                            <Image src="/citys/cancun.png" />
                            <Flex 
                                justify="space-between"
                                align="center"
                                px="5"
                                py="8"
                                borderRadius="1"
                                borderX="1px"
                                borderBottom="1px"
                                borderColor="rgb(255 186 8 / 50%)"
                            >
                                <Box>
                                    <Heading
                                        fontFamily="Barlow"
                                        fontSize="1.25rem" 
                                        fontWeight="600" 
                                        color="#47585B"
                                    >
                                        Cancún
                                    </Heading>
                                    <Text
                                        fontFamily="Barlow"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        color="#999999"
                                    >
                                        México
                                    </Text>
                                </Box>
                                <Box>
                                    <Image src="/flags/mexico.svg" width="30px" height="30px"/>
                                </Box>
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    );
};
import Head from 'next/head';
import {
  Container,
  Heading,
  Link,
  Text,
  Code,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container
      maxW="container.xl"
      minH="100vh"
      d="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="0 0.5rem"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        p="5rem 0"
        flex="1"
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" size="2xl" mb="2">
          Welcome to{' '}
          <Link color="teal.500" href="https://nextjs.org">
            Next.js!
          </Link>
        </Heading>

        <Text fontSize="xl" mt="2">
          Get started by editing <Code>pages/index.js</Code>
        </Text>

        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          maxW="800px"
          mt="10"
        >
          <Box
            as="a"
            href="https://nextjs.org/docs"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['100%', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Documentation &rarr;
            </Heading>
            <Text fontSize="lg">
              Find in-depth information about Next.js features and API.
            </Text>
          </Box>

          <Box
            as="a"
            href="https://nextjs.org/learn"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['100%', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Learn &rarr;
            </Heading>
            <Text fontSize="lg">
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </Box>

          <Box
            as="a"
            href="https://github.com/vercel/next.js/tree/master/examples"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['100%', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Examples &rarr;
            </Heading>
            <Text fontSize="lg">
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </Box>

          <Box
            as="a"
            href="https://vercel.com/new?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
            p="6"
            m="4"
            borderWidth="1px"
            rounded="lg"
            flexBasis={['100%', '45%']}
          >
            <Heading as="h3" size="lg" mb="2">
              Deploy &rarr;
            </Heading>
            <Text fontSize="lg">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        as="footer"
        w="100%"
        h="100px"
        borderTop="1px solid #eaeaea"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          d="flex"
          justifyContent="center"
          alignItems="center"
          href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" ml="0.5rem" />
        </Link>
      </Box>
    </Container>
  );
}

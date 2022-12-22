import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Stack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { IconMenu } from '@tabler/icons';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { routes } from '../../../routes';

function DesktopSidebarContents({}: PropsWithChildren) {
  const { t } = useTranslation();
  return (
    <Container maxW='full' p={0} backgroundColor='black'>
      <Stack
        maxW={['full', 'container.xl']}
        justify='space-between'
        alignItems='center'
        p={[0, 4]}
        ml='auto'
        mr='auto'
        direction={['column', 'row']}
      >
        <VStack as={RouterLink} to='/' justify='center' mr={12}>
          <Image src='/logo.png' alt='BlockQuests logo' boxSize='32px' />
          <Heading fontSize='sm' fontWeight='black' color='white'>
            BlockQuests
          </Heading>
        </VStack>
        <Stack align='center' justify='center' spacing={[4, 8]} direction={['column', 'row']}>
          <Link
            as={RouterLink}
            to={routes.explore}
            fontWeight='bold'
            color='white'
            textDecoration='none !important'
            textTransform='capitalize'
          >
            {t('explore')}
          </Link>
          <Link
            as={RouterLink}
            to={routes.createCampaign}
            fontWeight='bold'
            color='white'
            textDecoration='none !important'
            textTransform='capitalize'
          >
            {t('create_campaign')}
          </Link>
        </Stack>
        <Spacer />
        <Button colorScheme='brand' variant='solid' textTransform='capitalize'>
          {t('connect_wallet')}
        </Button>
      </Stack>
    </Container>
  );
}

function MobileSidebar({}: PropsWithChildren) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW='full' p={0}>
        <HStack justify='space-between' alignItems='center' p={[0, 4]}>
          <VStack as={RouterLink} to='/' justify='center' mr={12}>
            <Image src='/logo.png' alt='BlockQuests logo' boxSize='32px' />
            <Heading fontSize='sm' fontWeight='black' color='white'>
              BlockQuests
            </Heading>
          </VStack>
          <IconButton aria-label='Open menu' icon={<IconMenu />} onClick={onOpen} />
          <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='full'>
            <DrawerOverlay />
            <DrawerContent bg='gray.50'>
              <DrawerCloseButton />
              <DrawerHeader p={0}>
                <DesktopSidebarContents />
              </DrawerHeader>

              <DrawerBody>{/* <DesktopSidebarContents /> */}</DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </>
  );
}

function Sidebar() {
  return (
    <>
      <Flex display={{ base: 'flex', md: 'none' }}>
        <MobileSidebar />
      </Flex>

      <Flex display={{ base: 'none', md: 'flex' }}>
        <DesktopSidebarContents />
      </Flex>
    </>
  );
}

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <Container as='header' maxW='full' p={0} backgroundColor='black'>
      <Sidebar />
    </Container>
  );
}

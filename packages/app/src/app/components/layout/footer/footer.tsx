import {
  Button,
  Circle,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Spacer,
  Stack,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IconBrandGithub, IconBrandTelegram, IconBrandTwitter, IconMail } from '@tabler/icons';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
  title?: string;
};

const FooterLink = ({ icon, href, label, title }: FooterLinkProps) => {
  const { t } = useTranslation();
  return (
    <Link display='inline-block' href={href} aria-label={label} isExternal>
      <HStack width={['unset', 32]}>
        <Circle size='24px' bg='blackAlpha.400'>
          <Icon as={icon} color='white' />
        </Circle>
        <Heading fontSize='sm' display={['none', 'flex']} color='white' textTransform='capitalize'>
          {t((title ?? '') as any)}
        </Heading>
      </HStack>
    </Link>
  );
};

const links = [
  {
    icon: IconBrandTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/blockquests_com',
    title: 'twitter',
  },
  {
    icon: IconBrandTelegram,
    label: 'Telegram',
    href: 'https://t.me/blockquests',
    title: 'telegram',
  },
  {
    icon: IconBrandGithub,
    label: 'GitHub',
    href: 'https://github.com/blockquests',
    title: 'source_code',
  },
  {
    icon: IconMail,
    label: 'Email',
    href: 'mailto:support@blockquests.com',
    title: 'email_us',
  },
];

export function Footer(props: StackProps) {
  const { t } = useTranslation();
  return (
    <Container as='footer' maxW='full' p={0} backgroundColor='gray.900'>
      <Stack maxW='full' p={4} ml='auto' mr='auto' direction={['column', 'row']}>
        <VStack align='flex-start'>
          <Heading fontSize='2xl' color='white'>
            {t('dont_miss_any_rewards')}
          </Heading>
          <VStack spacing={8} align='flex-start'>
            <Text color='white'>{t('subscribe_for_notifications')}</Text>
            <Button colorScheme='brand'>{t('join_now')}</Button>
          </VStack>
        </VStack>
        <Spacer />

        <HStack spacing={[0, 12]} align='flex-start'>
          <VStack spacing={8} align='flex-start' display={['none', 'flex']}>
            <Heading fontSize='md' textTransform='capitalize' color='brand.200'>
              {t('about_us')}
            </Heading>
            <VStack spacing={4} align='flex-start'>
              <Heading fontSize='sm'>
                <Link as={RouterLink} to={'#'} color='white' textTransform='capitalize'>
                  {t('team')}
                </Link>
              </Heading>
              <Heading fontSize='sm'>
                <Link as={RouterLink} to={'#'} color='white' textTransform='capitalize'>
                  {t('vision')}
                </Link>
              </Heading>
              <Heading fontSize='sm'>
                <Link as={RouterLink} to={'#'} color='white' textTransform='capitalize'>
                  {t('partners')}
                </Link>
              </Heading>
            </VStack>
          </VStack>

          <VStack spacing={8} align='flex-start'>
            <Heading fontSize='md' display={['none', 'flex']} textTransform='capitalize' color='brand.200'>
              {t('connect_us')}
            </Heading>
            <Stack flexDirection={['row', 'column']} spacing={[0, 4]} align={['flex-start']}>
              {links.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </Stack>
          </VStack>
        </HStack>
      </Stack>

      <Stack h={16} maxW={['full', 'container.xl']} p={4} ml='auto' mr='auto' justify='center'>
        <Heading fontSize='sm' color='white'>
          © BlockQuests | 2022
        </Heading>
      </Stack>
    </Container>
  );
}

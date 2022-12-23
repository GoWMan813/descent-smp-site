import { Navbar, Text } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Spacer, Switch, useTheme } from '@nextui-org/react';
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';
import { useRouter } from 'next/router';

type NavLink = {
  name: string;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Story',
    href: '/story',
  },
  {
    name: 'Players',
    href: '/players',
  },
  {
    name: 'Content Creators',
    href: '/content-creators',
  },
  {
    name: 'Rules',
    href: '/rules',
  },
];

function SMPNavbar() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const router = useRouter();

  return (
    <Navbar isCompact isBordered variant='floating'>
      <Navbar.Brand>
        <Image src='bloodMoon256.png' alt='Blood Moon' width={32} height={32} />
        <Spacer x={0.25} />
        <Text b color='inherit' hideIn='xs'>
          DescentSMP
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn='xs' variant='highlight-rounded'>
        {NavLinks.map((link) => (
          <Navbar.Link
            {...(router.pathname === link.href ? { isActive: true } : {})}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            iconOff={
              <SunIcon
                filled
                size={undefined}
                height={undefined}
                width={undefined}
                label={undefined}
              />
            }
            iconOn={
              <MoonIcon
                filled
                size={undefined}
                height={undefined}
                width={undefined}
                label={undefined}
              />
            }
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default SMPNavbar;

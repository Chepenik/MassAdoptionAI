import React from 'react';
import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    mantineProvider: () => <MantineProvider />,
  });
  const theme = useMantineTheme();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <Group position="center" my={30}>
        <Switch
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          size="lg"
          onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
          offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
        />
      </Group>
    </ColorSchemeProvider>
  );
}

export default SwitchToggle;
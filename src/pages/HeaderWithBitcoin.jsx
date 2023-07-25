import React, { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { ReactComponent as BitcoinLogo } from './bitcoin.svg';

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.orange[7],
    borderBottom: 0,
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  burger: {
    color: theme.white,
    
    '@media (min-width: 48em)': {
      display: 'none'
    }
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media (max-width: 48em)': {
      display: 'none'
    }
  },

  mainLinks: {
    marginRight: -theme.spacing.sm
  },

  mainLink: {
    color: theme.white,
    padding: `${rem(7)} ${theme.spacing.sm}`,
    borderColor: theme.colors.orange[6],
    
    '&:hover': {
      opacity: 1,
      borderColor: theme.white
    }
  },
  
  mainLinkActive: {
    color: theme.white,
    borderColor: theme.white
  }
  
}));

const HeaderWithBitcoin = ({ mainLinks, userLinks }) => {

  const [opened, toggle] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor 
      href={item.link} 
      key={item.label} 
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor 
      href={item.link} 
      key={item.label} 
      onClick={(event) => event.preventDefault()} 
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={10} className={classes.header}>
      <Container className={classes.inner}>
      
        {/* <BitcoinLogo /> */}
        
        <div className={classes.links}>
          <Group position="right">{secondaryItems}</Group>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group> 
        </div>

        <Burger 
          opened={opened} 
          onClick={toggle} 
          className={classes.burger} 
          size="sm" 
          color="#fff" 
        />

      </Container>
    </Header>
  );
};

export default HeaderWithBitcoin;
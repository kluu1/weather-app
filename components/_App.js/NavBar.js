import { Menu, Container, Icon } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item>
          <Icon name="sun outline" size="large" />
          WEATHER APP
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;

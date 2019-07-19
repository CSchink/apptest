import { Menu, Icon } from 'antd';
import { BrowserRouter as Link } from "react-router-dom";
const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item>
        <Link to="/sottlab" className="nav-link">Sott Lab</Link>
        </Menu.Item>
        <Menu.Item >
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
            <Link to="/dashboards" className="nav-link">Dashboards</Link>
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
        <Link to="/input" className="nav-link">Input</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
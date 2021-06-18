import { Avatar } from 'antd';
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';


const UserAvatar = () => {
  const imgUrl = "https://images.pexels.com/photos/7907687/pexels-photo-7907687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  const menu = (
    <Menu style={{marginTop: "16px"}}>
      <Menu.Item >
        <span>Sign out</span> 
        <LogoutOutlined style={{margin: "0 0.4rem"}} />
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="d-flex">
      <span style={{fontWeight : "500"}}>Rishu Patel</span>
      <Avatar size={36} src={imgUrl} style={{margin: "0 0.4rem"}} />
      <Dropdown overlay={menu} >
        <CaretDownOutlined style={{cursor : "pointer"}} />
      </Dropdown>
      
    </div>
  )
}

export default UserAvatar
  
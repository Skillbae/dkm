import React from 'react'
import ProductGrid from '../../components/product/ProductGrid';
import PriceFilter from './components/PriceFilter';
import ColorFilter from './components/ColorFilter';
import CategoryFilter from './components/CategoryFilter';

import {
  Breadcrumb,
  Menu, 
  Dropdown, 
  Button, 
  Pagination
  
} from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Shop = () => {
  const categories = ["new arrivals","men", "women", "kids"]
  const brandOptions = ["All","HnM", "Pull & Bear", "Uniqlo"]

  const paginationHandler = (pagenumber, pageSize) => {
    console.log(`Changes to ${pagenumber}, totalSize ${pageSize}`);
  }

  

  return (
    <>
    <main className="shop">
      
      <aside className="shop-fitlers-wrapper">
        <Breadcrumb separator=">" className="shop-breadcrumb d-flex" >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            Shop
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Page 1 of 1
          </Breadcrumb.Item>
        </Breadcrumb>
        <CategoryFilter title={"Shop by categories"} arr={categories}/>
        <PriceFilter/>
        <ColorFilter/>
        <CategoryFilter title={"brands"} arr={brandOptions}/>
      </aside>
      <section className="shop-product-grid-wrapper">
        <div className="product-grid-header d-flex">
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button style={{borderRadius : 4}} >Featured  <DownOutlined/></Button>
          </Dropdown>
          <div className="flex-spacer"/>
          <div className="result-dets">
            <span> Showing 1-10 of 200 Result</span>
          </div>
        </div>

        <ProductGrid/>
      </section>
      
    </main>
    <div className="shop-pagination d-flex-end">
      <Pagination 
        size="small" 
        total={200} 
        defaultPageSize={10}
        showSizeChanger={false}
        onChange={paginationHandler}/>
    </div>
    </>

  )
}

export default Shop









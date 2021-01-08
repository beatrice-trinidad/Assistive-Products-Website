import React from 'react';

import { data } from '../assets/productsJS.js'
import "./works.css";

import Product from '../components/productPreview';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


import { Grid, Row, Col } from 'react-flexbox-grid';


const CollectionsList = () => {
  return (
    <Grid fluid>
           <Row id="collections__row">
            <Col xs={12} md={4} lg={4}>
                  <a href="/" id="vintagedress" className="wrapper presentation__center presentation__verticalcenter">
                    <h1 className="content">Vintage Dress Collection</h1>
                  </a>
              </Col>
            <Col xs={12} md={4} lg={4}>
                  <a href="/" id="nineteenforty" className="wrapper presentation__center presentation__verticalcenter">
                    <h1 className="content">1940s Inspired Collection</h1>
                  </a>
              </Col>
            <Col xs={12} md={4} lg={4}>
                  <a href="/" id="jerusalem" className="wrapper presentation__center presentation__verticalcenter">
                    <h1 className="content">Jerusalem</h1>
                  </a>
              </Col>
           
            
            
            
        </Row>
      </Grid>
  )
}



const ProductsList = () => {
  return (
    <Grid fluid>
           <Row id="products__row">
        { 
          data.map( (singleProduct) => {
           return (
                <Product product={singleProduct}/>
           )
          })
        }
        </Row>
      </Grid>
  )
}


function WorkPage() {
  return (
  <div>
      <NavBar />
      <main id="main">
          <h1 id="page__title">My Works</h1>
          <h2 id="paintings__title">Collections</h2>
          <CollectionsList />
          <h2 id="paintings__title">Paintings</h2>
          <ProductsList />
        </main>
      <Footer />    
  </div>

  
  )
  }
  
  export default WorkPage;

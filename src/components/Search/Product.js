import React from "react";
import * as ROUTES from './../constants/routes';
import {Link} from 'react-router-dom'
const Product = (props) => {
    return (
      <>
  <div className="linkList">
    <Link to = {`${ROUTES.SINGLE_ITEM}/${props.id}`} className="link"> {props.model}</Link>
  </div>
      </>
    );
  };
  
  export default Product;
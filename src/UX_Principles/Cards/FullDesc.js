import $ from 'jquery'
import { findDOMNode } from "react-dom";
import image from "./image_for_card.svg";
import React, { Component } from "react";

class FullDesc extends React.Component {
    constructor() {
    super();
    }
   handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();

    $(el).ready(function(){
      $('.slider').slick({
          adaptiveHeight: true,
          centerMode: true,
          variableWidth: true,
          speed: 500,     
          infinite: true,
          seTransform: true,
          focusOnSelect: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          
        });
  })

  
    };
   render() {
    return (
   <div ref='toggle'></div>
    );
    }
   }
   export default FullDesc;
import Card from "../Card/Card"

import React from 'react'
import "./FeaturedProduct.scss"

const FeaturedProduct = ({type}) => {

 
    const data =[
        {
            id : 1,
            img : "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2872644/pexels-photo-2872644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            title: "Long Sleeve Graphic T-Shirt",
            isNew : true,
            oldPrice :19 ,
            price: 12,
        },
        {
            id : 2,
            img : "https://images.pexels.com/photos/2873979/pexels-photo-2873979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            title: "Long Sleeve Graphic T-Shirt",
            isNew : true,
            oldPrice :19 ,
            price: 12,
        },
        {
            id : 3,
            img : "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            title: "Long Sleeve Graphic T-Shirt",
            isNew : true,
            oldPrice :19 ,
            price: 12,
        },
        {
            id : 4,
            img : "https://images.pexels.com/photos/912788/pexels-photo-912788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            title: "Long Sleeve Graphic T-Shirt",
            isNew : true,
            oldPrice :19 ,
            price: 12,
        },
    ]

  return (
       <div className="featuredProducts">
        <div className="top">
            <h1>{type} products </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa recusandae sint voluptates amet fugit suscipit cupiditate
                 placeat quidem vitae provident?
            </p>
        </div>
        <div className="bottom">
           {
            data?.map(item => (
                <Card item={item} key={item.id} />
            ))
           }
        </div>
       </div>
  )
}

export default FeaturedProduct
import { useState, useEffect, memo } from "react";
import Card from "./Card";

import './CardList.css'

function CardList({items, cart, setCart}) {
  const itemsCard = items.map((item) => <Card key={item._id} item={item} setCart={setCart} cart = {cart}/>)
  
  return (
    <div className="CardList">
      <div className="CardList-heading">
        {items[0] ? items[0].category : "Category"}
      </div>
      <div className="CardList-body">{itemsCard}</div>
      <div className="menu-body">
        <h1>Menu</h1>
          <h3>Starters</h3>
          <ul className="starter-list">
            <li>Paneer Tikka</li>
            <li>Aloo Samosa</li>
            <li>Pakoras</li>
            <li>Papdi Chaat</li>
            <li>Vada</li>
            <li>Uttapam</li>
            <li>Bonda</li>
            <li>Pesarattu</li>
          </ul> 
          <h3>North Indian Main</h3>
          <ul className="starter-list">
            <li>Paneer Tikka Masala</li>
            <li>Chana Masala</li>
            <li>Malai Kofta</li>
            <li>Palak Paneer</li>
            <li>Gobi Masala</li>
            <li>Pulao</li>
            <li>Butter Roti</li>
            <li>Butter Naan</li>
            <li>North Meals</li>
          </ul> 
          <h3>South Indian Main</h3>
          <ul className="starter-list">
            <li>Masala Dosa</li>
            <li>Idly Vade</li>
            <li>Bisi Bele Bath</li>
            <li>Rice Bath-Pulao/Tomato</li>
            <li>Plain Dose</li>
            <li>Open Dose</li>
            <li>Anna Saaru</li>
            <li>South Meals</li>
          </ul>
          <h3>Desserts</h3>
          <ul className="starter-list">
            <li>Gulab Jamoon</li>
            <li>Rasgulla</li>
            <li>Kheer</li>
            <li>Jelabi</li>
            <li>Payasa</li>
            <li>Mysore Pak</li>
            <li>Coconut Ladoo</li>
            <li>Ice Cream-Vanilla,Strawberry,Chocolate</li>
          </ul>
      </div>
    </div>
  )
}

function CardLists({setCart, cart}) {
  const [allItems, setAllItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );

  // useEffect(() => {
  //   async function getItems() {
  //     const resData = await(await fetch("http://localhost:3001/api/item/get")).json()
      
      
  //     if (resData) {
  //       console.log(resData.message)
  //     } else {
  //       resData.items = resData.items.map((item) => {
  //         item.quantity = 0;
  //         return item;
  //       })
  //       const grouped = Object.values(resData.items.reduce((acc, item) => {
  //         acc[item.category] = [...(acc[item.category] || []), item];
  //         return acc;
  //       }, {}))
  //       setAllItems(grouped)
  //       localStorage.setItem("items", JSON.stringify(grouped))
  //     } 
  //   }

  //   // Only fetch items from database, if user is visiting for the first time
  //   // if (!localStorage.getItem("items")) {
  //   //   console.log("Items loaded from the database")
  //     getItems()
  //   // }
  // }, [])

  useEffect(() => {
    async function getItems() {
      const cachedItems = JSON.parse(localStorage.getItem("items"));
  
      const resData = await (await fetch("http://localhost:3001/api/item/get")).json();
      
      if (resData.error) {
        console.error(resData.error);
        return;
      }
  
      const newItems = resData.items.map((item) => {
        item.quantity = 0;
        return item;
      });
  
      // Check if new items have been added
      const itemsChanged = !cachedItems || JSON.stringify(newItems) !== JSON.stringify(cachedItems);
  
      if (itemsChanged) {
        const grouped = Object.values(
          newItems.reduce((acc, item) => {
            acc[item.category] = [...(acc[item.category] || []), item];
            return acc;
          }, {})
        );
  
        setAllItems(grouped);
        localStorage.setItem("items", JSON.stringify(grouped));
  
        // Notify the user that new items have been added
        console.log("New items have been added.");
      } else {
        // Items are the same as before, no need to update
        console.log("Items are up to date.");
      }
    }
  
    // Always fetch items from the database
    getItems();
  }, []);
  


  

  const itemsCardList = allItems.map(
    (items) => {
      console.log(items)
      return(<CardList key={items[0]._id} items={items} setCart={setCart} cart={cart}/>)
    }
  ) 

  console.log("CardLists rendered!")
  return(
    <div>
      { itemsCardList }
    </div>
  )
}

export default memo(CardLists);
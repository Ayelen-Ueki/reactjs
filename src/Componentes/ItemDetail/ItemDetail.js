import ItemCount from "../ItemCount/ItemCount";
import React, { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import ItemCard from "../ItemCard/ItemCard";

const ItemDetail = ({ onAddCart }) => {
  const [items, onAdd, onDeduct] = useContext(ItemsContext);
  return (
    <div>
      {items.map((item) => {
        return <ItemCard data={item} key={item.id} />;
      })}
      <ItemCount onAdd={onAdd} onDeduct={onDeduct} onAddCart={onAddCart} />
    </div>
  );
};

export default ItemDetail;

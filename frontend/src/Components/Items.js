import Item from "./Item";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FoodLoader from "./../images/foodLoading.gif";

const Items = ({ orders }) => {
  const [itemLst, setItems] = useState([]);
  const [currentPos, setPos] = useState(0);

  const fetchMoreData = () => {
    console.log("infetchMore");
    console.log(currentPos);
    setTimeout(() => {
      setItems(itemLst.concat(getNewData()));
    }, 1500);
    return true;
  };

  const getNewData = () => {
    var tempLst = [];
    for (var i = currentPos; i < currentPos + 10; i++) {
      tempLst[i] = orders[i];
    }
    return tempLst;
  };
  const fetchRecords = () => {
    var tempLst = [];
    for (var i = currentPos; i < currentPos + 10; i++) {
      tempLst[i] = orders[i];
    }
    setPos(currentPos + 10);
    setItems(tempLst);
  };
  useEffect(fetchRecords, []);
  return (
    <InfiniteScroll
      dataLength={itemLst.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<img alt="Loading..." src={FoodLoader}></img>}
    >
      {itemLst.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </InfiniteScroll>
  );
};
export default Items;

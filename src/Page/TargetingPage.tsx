import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveTargetingList,
} from "../Reduxfile/targeting";

import { RootState } from "../store";

const TargetingPage: React.FC = () => {


  const targetingListdata: Targeting[] = useSelector((state: RootState) => state.targeting);
  const dispatch = useDispatch();


  const initFetch = useCallback(() => {
   dispatch(retrieveTargetingList())
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

console.log("==============", targetingListdata);


  return (
    <div className="list row">
     <p>ddddd</p>
    </div>
  );
};

export default TargetingPage;

interface Targeting {
  id: number;
  title: string;
  description: string;
}

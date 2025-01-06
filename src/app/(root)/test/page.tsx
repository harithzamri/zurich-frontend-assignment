"use client";
import { fetchData } from "@/lib/apiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect } from "react";

const MyComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the async thunk action (fetchData)
    dispatch(fetchData("https://reqres.in/api/users"));
  }, [dispatch]);

  const dataState = useAppSelector((state) => state.api);

  console.log(dataState);

  return <div>My Component</div>;
};

export default MyComponent;

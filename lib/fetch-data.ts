import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CombinedContract,
  CreateNewContract,
  UserContract,
  Contract,
} from "@/lib/contract";

export default function Fetchdata(data: string) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const getdata = async () => {
      axios.get(data).then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
    };
    getdata();
  }, [data]);
  if (!post) return null;
  return post;
}

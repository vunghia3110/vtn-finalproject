import React from "react";
// import { Table } from "@mui/material";
import ProductItem from "../../products/components/ProductItem"

const UsersTable = () => {
  return <div>
    This is Table of Users
    <ProductItem data={
            {
              id: "2008",
              sku: "ss-1252",
              price: "34.0000",
              arrivalDate: "1579910400",
              name: "360 Degree Tripod Head Panoramic Clamp Aluminum Adapter change",
              vendor: "hello@saltlight.solutions",
              amount: "238",
              category: "",
          }
        } onCheckBox = {() => {}} />
    </div>
}

export default UsersTable
import React from "react";
import SideBar from "../../layout/components/Sidebar";
import TemporaryDrawer from "../../layout/components/Sidebar";
import Sidebar from "../../layout/components/Sidebar";
import Header from "../../layout/components/Header";
import UsersTable from "./UsersTable";
import SideBarModel from "../../layout/components/SideBarModel"
import MenuAppBar from "../../layout/components/MenuAppBar";
import MiniDrawer from "../../layout/components/MiniDrawer";
import LayoutForm from "../../layout/components/LayoutForm"

const UsersBody = () => {
  return <div 
  style={{}}>
    {/* <Header /> */}
    {/* <MenuAppBar /> */}
    {/* <Sidebar /> */}
    {/* <MiniDrawer /> */}
    <LayoutForm>
      <UsersTable />
    </LayoutForm>
    {/* <SideBarModel /> */}
    
  </div>
}

export default UsersBody
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarMenu from "./Sidebar";

const Layout = () => {
    return (
        <>
            <div className="bg-light">
                <ProSidebarProvider>
                    <SidebarMenu/>
                </ProSidebarProvider>
            </div>
        </>
    );
};

export default Layout;
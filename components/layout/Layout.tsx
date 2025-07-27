import Header from "./Header";
import Footer2 from "./Footer";
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer2 />
    </>
  );
};

export default Layout;

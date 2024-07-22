import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;

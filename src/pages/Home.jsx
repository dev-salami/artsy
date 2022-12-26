import Header from "../components/Header";
import Featured from "../components/Featured";
import Nletter from "../components/Nletter";
import Footer from "../components/Footer";
import UpComing from "../components/upComing";
import Axios from "axios";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Featured />
      <UpComing />
      <Nletter />
      <Footer />
    </>
  );
}
export default Home;

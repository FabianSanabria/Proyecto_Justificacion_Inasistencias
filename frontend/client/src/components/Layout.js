import Navbar from "components/Navbar";
import { Helmet } from "react-helmet";

const Layout = ({title,content,children}) => (
    <>
        <div className="container">
        <Helmet>
        <title>  {title} </title>
        <meta name="description" content={content}/>
        </Helmet>
        <Navbar  />
        <div className=""> {children} </div>
        </div>
    </>
)

export default Layout;
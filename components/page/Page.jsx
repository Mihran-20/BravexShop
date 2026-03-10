import { useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes.jsx";

const Page = () => {
    const token = localStorage.getItem("token");
    const routing = useRoutes(token ? privateRoutes : publicRoutes);

    return <div>{routing}</div>;
};

export default Page;

import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes.jsx";

const RoutesList = ({ routes }) => {
    const { pathname } = useLocation();

    return (
        <div className="w-full h-[60px] flex justify-center items-center bg-white shadow-sm">
            <ul className="flex gap-6 p-2">
                {routes.map((route) =>
                    route.name ? (
                        <li key={route.path}>
                            <Link
                                to={route.path}
                                className={`relative px-2 py-1 font-medium text-black transition-all duration-300
                                    ${pathname === route.path ? "after:scale-x-100 text-black font-semibold" : "after:scale-x-0"}
                                    after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px]
                                    after:bg-black after:transition-transform after:duration-300 after:origin-left
                                    hover:after:scale-x-100`}
                            >
                                {route.name}
                            </Link>
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    );
};

const Menu = () => {
    const token = localStorage.getItem("token");
    return <nav><RoutesList routes={token ? privateRoutes : publicRoutes} /></nav>;
};

export default Menu;

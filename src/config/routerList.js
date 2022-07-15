import Loadable from "react-loadable";
import Loading from "@/components/Loading";
const Dashboard = Loadable({
  loader: () => import(/*webpackChunkName:'Dashboard'*/ "@/views/dashboard"),
  loading: Loading,
});

const routerList = [
  {
    path: "/dashboard",
    component: Dashboard,
    roles: ["admin", "editor", "guest"],
  },
];

export default routerList;

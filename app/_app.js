import { Router } from "next/router";
const handleRouteChange = (url) => {
  console.log("Route changed to:", url);
  // You can perform additional actions here if needed
};
Router.events.on("routeChangeComplete", handleRouteChange);
Router.events.on("beforeHistoryChange", () => {
  Router.router?.replace(Router.router.asPath, undefined, { shallow: true });
});

Router.router?.beforePopState(() => {
  Router.router?.replace(Router.router.asPath, undefined, { shallow: true });
  return true;
});

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

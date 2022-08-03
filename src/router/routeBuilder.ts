import { Layout, LayoutProps } from "components";
import { About, Cluster, Home, MediaKit, Privacy, Support, Terms } from "pages";
import { RouteProps } from "react-router-dom";
import { Routes } from "./routes";

// Route Builder Item Props
export interface RouteBuilderItem extends RouteProps {
  Layout?: React.FC<LayoutProps>; // If you wish to add a layout to the page
  Element: React.FC;
  props: LayoutProps;
}

/**
 * ROUTE BUILDER
 *
 * ===============================================
 *
 * This is a list of all our application routes.
 *
 * A single item on this list contains the necessary Route props needed by React Router to do it's job.
 *
 * If you wish to add a new route to the application,
 * just fulfill all the necessary props needed by the RouteBuilder item. Ciao!
 *
 */
export const RouteBuilder: RouteBuilderItem[] = [
  {
    path: Routes.home,
    Element: Home,
    Layout: Layout,
    props: { type: "light", active: "home" },
  },
  {
    path: Routes.support,
    Element: Support,
    Layout: Layout,
    props: { type: "dark", active: "support" },
  },
  {
    path: Routes.mediaKit,
    Element: MediaKit,
    Layout: Layout,
    props: { type: "dark", active: "media-kit" },
  },
  {
    path: Routes.about,
    Element: About,
    Layout: Layout,
    props: { type: "dark", active: "about" },
  },
  {
    path: Routes.privacy,
    Element: Privacy,
    Layout: Layout,
    props: { type: "dark", active: "" },
  },
  {
    path: Routes.terms,
    Element: Terms,
    Layout: Layout,
    props: { type: "dark", active: "" },
  },
  {
    path: Routes.cluster,
    Element: Cluster,
    Layout: Layout,
    props: { type: "dark", active: "" },
  },
];

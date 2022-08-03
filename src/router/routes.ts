/**
 * ROUTES
 *
 * ===============================================
 *
 * This object depicts the component url structure.
 * It contains a key-value pair of components and their respective URLs
 *
 */

export const Routes = {
  home: "/",
  about: "/about",
  support: "/support",
  mediaKit: "/media-kit",
  terms: "/terms-of-service",
  privacy: "/privacy",
  cluster: "/cluster/:id",
  clusterID: (id) => `/cluster/${id}`,
};

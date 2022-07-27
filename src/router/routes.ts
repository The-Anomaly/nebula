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
  resource: "/resources",
  terms: "/terms-of-service",
  privacy: "/privacy",
  wallet: "/wallet/:id",
  walletID: (id) => `/wallet/${id}`,
};

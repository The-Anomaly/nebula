import React from "react";
import { Helmet } from "react-helmet";

export const MyHelmet = () => {
  return (
    <Helmet>
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://nebulawallet.io/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Nebula" />
      <meta
        property="og:description"
        content="Nebula is the best place to store, receive and send NFTs on the Ethereum and Solana blockchains"
      />
      <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@WalletNebula" />
      <meta name="twitter:creator" content="@WalletNebula" />
      <meta property="twitter:domain" content="nebulawallet.io" />
      <meta property="twitter:url" content="https://nebulawallet.io/" />
      <meta name="twitter:title" content="Nebula" />
      <meta
        name="twitter:description"
        content="Nebula is the best place to store, receive and send NFTs on the Ethereum and Solana blockchains"
      />
      <meta name="twitter:image" content="%PUBLIC_URL%/logo192.png" />

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
    </Helmet>
  );
};

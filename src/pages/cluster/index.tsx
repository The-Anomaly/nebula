import * as React from "react";
import { ClusterProps, ClusterUI, Preloader } from "components";
import { clusterURL, getRequest } from "api";
import { useParams } from "react-router-dom";
import { nft1, nft2, nft3, nft4, nft5, nft6 } from "assets";

const Cluster = () => {
  const params = useParams();
  const [loading, setLoading] = React.useState(false);
  const [clusterInfo, setClusterInfo] = React.useState<ClusterProps>({
    gallery: [],
    name: "",
    creator: "",
    thumbnail: "",
    description: "",
    estimatedValue: 0,
    chains: [],
    collectibles: {
      eth: 0,
      sol: 0,
    },
  });

  React.useEffect(() => {
    setLoading(true);
    getRequest(clusterURL(params.id))
      .then((response) => {
        console.log(response);
        const data = response.data.data;

        const gallery: string[] = data.nfts.map((item) =>
          /ipfs:\/\//.test(item.imageUrl)
            ? item.imageUrl
                .toString()
                .replace("ipfs://", "https://ipfs.io/ipfs/")
            : item.imageUrl
        );

        const chainsIDs: string[] = data.nfts.map((item) => item.chain.chainID);
        const ethChains =
          chainsIDs.filter((item) => item === "eth").length / chainsIDs.length;
        const solChains =
          chainsIDs.filter((item) => item === "sol").length / chainsIDs.length;

        const cluster = {
          gallery: gallery,
          name: data.name,
          creator: data.nebAddress,
          thumbnail: data.imageUrl,
          description: data.description,
          estimatedValue: data.estValue,
          chains: [...new Set(chainsIDs)],
          collectibles: {
            eth: Math.round(ethChains * 100),
            sol: Math.round(solChains * 100),
          },
        };

        setClusterInfo(cluster);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <ClusterUI {...clusterInfo} />
      )}
    </>
  );
};

export { Cluster };

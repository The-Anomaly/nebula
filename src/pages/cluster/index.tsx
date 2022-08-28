import * as React from "react";
import { ClusterUI, Preloader } from "components";
import { clusterURL, getRequest } from "api";
import { useParams } from "react-router-dom";

const Cluster = () => {
  const params = useParams();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getRequest(clusterURL(params.id))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  return <>{loading ? <Preloader loading={loading} /> : <ClusterUI />}</>;
};

export { Cluster };

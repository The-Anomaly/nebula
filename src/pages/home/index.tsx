import * as React from "react";
import { HomeUI, Preloader, Toast } from "components";
import { postRequest, waitListURL } from "api";

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [toast, setToast] = React.useState({
    type: false,
    title: "",
    text: "",
    show: false,
  });

  const submitWaitlist = (email) => {
    setLoading(true);
    postRequest(waitListURL(), { email })
      .then((response) => {
        if (response.status === 200) {
          setToast({
            title: "Great!",
            text: "You've been added to the waitlist",
            type: response.data.success,
            show: true,
          });
          setReset(!reset);
          setTimeout(() => {
            setToast({
              type: false,
              title: "",
              text: "",
              show: false,
            });
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error)
        setToast({
          title: "Sorry",
          text: error.response.data.error,
          type: error.response.data.success,
          show: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Toast {...toast} onHide={() => setToast({ ...toast, show: false })} />
      <Preloader loading={loading} />
      <HomeUI submitWaitlist={submitWaitlist} reset={reset} />
    </>
  );
};

export { Home };

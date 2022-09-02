import * as React from "react";
import { HomeUI, Preloader, Toast } from "components";
import { postRequest, waitListURL } from "api";

const Home = () => {
  const [loading, setLoading] = React.useState({ show: false, white: true });
  const [reset, setReset] = React.useState(false);
  const [toast, setToast] = React.useState({
    type: false,
    title: "",
    text: "",
    show: false,
  });

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return submitWaitlist(mail);
    }
    setToast({
      title: "Sorry",
      text: "You have entered an invalid email address!",
      type: false,
      show: true,
    });
    return false;
  };

  const submitWaitlist = (email) => {
    setLoading({ show: true, white: false });
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
        } else {
          setToast({
            title: "Sorry",
            text: "Failed to add to waitlist. Please try again later",
            type: false,
            show: true,
          });
        }
      })
      .catch((error) => {
        setToast({
          title: "Sorry",
          text: error?.response?.data?.error ?? error.message,
          type: false,
          show: true,
        });
      })
      .finally(() => {
        setLoading({ show: false, white: false });
      });
  };

  return (
    <>
      <Toast {...toast} onHide={() => setToast({ ...toast, show: false })} />
      <Preloader loading={loading.show} white={loading.white} />
      <HomeUI submitWaitlist={validateEmail} reset={reset} />
    </>
  );
};

export { Home };

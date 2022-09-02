import * as React from "react";
import { HomeUI } from "components";
import { postRequest, waitListURL } from "api";

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [toast, setToast] = React.useState({
    type: false,
    text: "",
    show: false,
  });

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return submitWaitlist(mail);
    }
    setSuccess(false);
    setToast({
      text: "You have entered an invalid email address!",
      type: false,
      show: true,
    });
    return false;
  };

  const submitWaitlist = (email) => {
    setLoading(true);
    postRequest(waitListURL(), { email })
      .then((response) => {
        if (response.status === 200) {
          setSuccess(true);
          setReset(!reset);
          setToast({
            text: "You've been added to the waitlist",
            type: response.data.success,
            show: true,
          });
          setTimeout(() => {
            setSuccess(false);
            setToast({
              text: "",
              type: false,
              show: false,
            });
          }, 10000);
        } else {
          setSuccess(true);
          setToast({
            text: "Failed to add to waitlist. Please try again later",
            type: false,
            show: true,
          });
        }
      })
      .catch((error) => {
        setToast({
          text: error?.response?.data?.error ?? error.message,
          type: false,
          show: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <HomeUI
        submitWaitlist={validateEmail}
        reset={reset}
        toast={{ ...toast, onHide: () => setToast({ ...toast, show: false }) }}
        success={success}
        loading={loading}
      />
    </>
  );
};

export { Home };

import { useDispatch, useSelector } from "react-redux";

import { Alert } from "@mui/material";
import React from "react";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(uiActions.showNotification({ open: false }));
  };
  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;

import React from "react";
import {
  GlobalCanvas,
  SmoothScrollbar,
  useTracker,
} from "@14islands/r3f-scroll-rig";

export const SmoothScrollBarWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalCanvas style={{ zIndex: -1, width: "100%" }}></GlobalCanvas>
      <SmoothScrollbar damping={20} thumbMinSize={20}>
        {(bind) => <React.Fragment>{children}</React.Fragment>}
      </SmoothScrollbar>
    </React.Fragment>
  );
};

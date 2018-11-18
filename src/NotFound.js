import React from "react";
import { Trans } from "@lingui/macro";

const NotFound = () => (
  <div style={{ padding: "20px 50px" }}>
    <header>
      <p>
        <Trans>404: not found</Trans>
      </p>
    </header>
  </div>
);

export default NotFound;

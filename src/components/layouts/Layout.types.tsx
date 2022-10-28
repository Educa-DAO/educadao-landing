import React from "react";

export type PrimaryLayoutProps = React.ComponentPropsWithoutRef<"div"> & {
  justify?: "items-center" | "items-start";
};

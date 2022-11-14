import React from "react";
import { Link, Banner } from "./styles";

const MerchBanner = ({ src, href }) => (
  <Link href={href} target="_blank">
    <Banner src={src} />
  </Link>
);

export default MerchBanner;

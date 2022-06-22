import React from "react";
import { useRouter } from "next/router";

function Shipping() {
  const router = useRouter();
  router.push("/login");
  return <div>shipping</div>;
}

export default Shipping;

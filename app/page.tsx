"use client";

import { useEffect } from "react";
import { sample_node_library_test } from "sample-node-library";

export default function Home() {
  useEffect(() => {
    sample_node_library_test();
  }, []);

  return <div>Welcome to Pantheon Platform</div>;
}

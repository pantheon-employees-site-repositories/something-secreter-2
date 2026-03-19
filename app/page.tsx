import { sample_node_library_test } from "sample-node-library";

export default function Home() {
  const message = sample_node_library_test();

  return (
    <div>
      <div>Welcome to Something Secreter 2</div>
      <div>{message}</div>
    </div>
  );
}

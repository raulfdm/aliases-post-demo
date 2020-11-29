import Head from "next/head";
import { Button } from "components/Button";

export default function Home() {
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <h1>NextJS aliases</h1>
      <Button>Hello - World</Button>
    </div>
  );
}

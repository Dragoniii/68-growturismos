import { Fragment } from "react/jsx-runtime";
import { DefaultLayout } from "../config/layout/DefaultLayout";

export function Home() {
  return (
    <Fragment>
      <DefaultLayout>
        <h1>Home</h1>
      </DefaultLayout>
    </Fragment>
  );
}

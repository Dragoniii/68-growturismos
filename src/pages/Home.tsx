import { Fragment } from "react/jsx-runtime";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { MainHome } from "../components/functional/MainHome";


export function Home() {
  return (
    <Fragment>
      <DefaultLayout>
      <MainHome/>
      </DefaultLayout>
    </Fragment>
  );
}

import { Fragment } from "react/jsx-runtime";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { MainPlanos } from "../components/functional/MainPlanos";

export function Planos() {
  return (
    <Fragment>
      <DefaultLayout>
        <MainPlanos />
      </DefaultLayout>
    </Fragment>
  );
}

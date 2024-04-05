import { Fragment } from "react/jsx-runtime";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { MainServicos } from "../components/functional/MainServicos";

export function Servicos() {
  return (
    <Fragment>
      <DefaultLayout>
      <MainServicos/>
      </DefaultLayout>
    </Fragment>
  );
}

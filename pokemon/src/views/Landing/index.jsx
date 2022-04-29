import { Fragment } from "react";
import ItemWelcomeContainer from "../../components/Items/ItemWelcomeContainer";
import ItemFollowUsContainer from "../../components/Items/ItemFollowUsContainer";
import ItemBenefitsContainer from "../../components/Items/ItemBenefitsContainer";

export default function Landing() {
  return (
    <Fragment>
      <ItemWelcomeContainer />
      <ItemFollowUsContainer />
      <ItemBenefitsContainer />
    </Fragment>
  );
}

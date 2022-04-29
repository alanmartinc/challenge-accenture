import { Fragment } from 'react'
import CardWelcomeContainer from '../../components/Cards/CardWelcomeContainer'
import CardFollowUsContainer from '../../components/Cards/CardFollowUsContainer'
import CardBenefitsContainer from '../../components/Cards/CardBenefitsContainer'

export default function Landing() {
  return (
    <Fragment>
      <CardWelcomeContainer />
      <CardFollowUsContainer />
      <CardBenefitsContainer />
    </Fragment>
  )
}

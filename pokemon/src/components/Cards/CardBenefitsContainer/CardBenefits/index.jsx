import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function ItemBenefits () {
  const [t] = useTranslation('landing')

  return (
        <Fragment>
            <div className="benefits">
                <h3>{t('card-benefits.title')} <span className="blue-highlight">;)</span></h3>
            </div>
        </Fragment>
  )
}

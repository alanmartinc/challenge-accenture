import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function ItemFollowUs() {
	const [t] = useTranslation('landing');

	return (
		<Fragment>
			<div className='follow-us-container'>
				<div className='follow-us-image'>
					<h1>
						<span className='follow-us-green'>{t('card-follow-us.title')}</span>{' '}
						<span className='follow-us-blue'>Woloxers</span>
					</h1>

					<div className='follow-us-logo'>
						<img src='assets/twitter.png' alt='twitter' />
						<p>@Wolox</p>
					</div>

					<button className='button-secondary'>
						{t('card-follow-us.button')}
					</button>
				</div>

				<div className='follow-us-background'>
					<h2>
						{t('card-follow-us.subtitle-initial')}{' '}
						<span className='follow-us-blue'>
							{t('card-follow-us.span-primary')}
						</span>{' '}
						<span className='follow-us-green'>
							{t('card-follow-us.span-secondary')}
						</span>{' '}
						{t('card-follow-us.subtitle-end')}
					</h2>
				</div>
			</div>
		</Fragment>
	);
}

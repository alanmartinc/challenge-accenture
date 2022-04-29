import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function ItemFollowUs() {
	const [t] = useTranslation('landing');

	return (
		<Fragment>
			<div className='follow-us'>
				<div className='background-image'>
					<h1>
						<span className='green-highlight'>{t('card-follow-us.title')}</span>{' '}
						<span className='blue-highlight'>Woloxers</span>
					</h1>

					<div>
						<img src='assets/twitter.png' alt='twitter' />
						<p>@Wolox</p>
					</div>

					<button className='button-secondary'>
						{t('card-follow-us.button')}
					</button>
				</div>

				<div className='background-gray'>
					<h2>
						{t('card-follow-us.subtitle-initial')}{' '}
						<span className='blue-highlight'>
							{t('card-follow-us.span-primary')}
						</span>{' '}
						<span className='green-highlight'>
							{t('card-follow-us.span-secondary')}
						</span>{' '}
						{t('card-follow-us.subtitle-end')}
					</h2>
				</div>
			</div>
		</Fragment>
	);
}

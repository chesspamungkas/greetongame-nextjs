import React, { ReactElement, useState } from 'react'
import Image from 'next/image';
import pcIcon from '../../assets/icons/pc.svg'
import browserIcon from '../../assets/icons/browser.svg'
import { Game } from '@/types'
import { BROWSER, PC } from './constants'
import GameDetails from '@/components/GameDetails';

interface Props {
	content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
	const [isOpen, setIsOpen] = useState(false);

	const { id, title, thumbnail, short_description, genre, platform } = content
	const icons = platform.split(',').map(p => {
		let icon = null
		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Image key={`${id}-browser`} src={browserIcon} alt='browser icon' className='game-card__img-icon' />
				)
				break
			case PC:
				icon = (
					<Image key={`${id}-pc`} src={pcIcon} alt='pc icon' className='game-card__img-icon' />
				)
				break
			default:
				break
		}
		return icon
	})

	return (
		<div className="game-card group">
			<a className='game-card__link-styled cursor-pointer' onClick={() => setIsOpen(true)}>
				<div className='relative w-full object-contain'>
					<img src={thumbnail} alt={`${title}-logo`} className='object-contain rounded-t-3xl' />
				</div>
				<div className='game-card__content'>
					<h2 className='game-card__content-title'>{title}</h2>
					<p className='game-card__description'>{short_description}</p>
					<p className='game-card__genre'>{genre}</p>
					{icons}	
				</div>
			</a>

			<GameDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} game={content} />
		</div>
	)
}

export default GameCard
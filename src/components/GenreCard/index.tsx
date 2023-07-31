import React, { ReactElement, useState } from 'react'
import { Genre } from '@/types'
import GenreDetails from '@/components/GenreDetails';

interface Props {
	content: Genre
}

const GenreCard = ({ content }: Props): ReactElement => {
	const [isOpen, setIsOpen] = useState(false);

	const { id, title, description } = content

	return (
		<div className="game-card group">
			<a className='game-card__link-styled cursor-pointer' onClick={() => setIsOpen(true)}>
				<div className='game-card__content'>
					<h2 className='game-card__content-title'>{title}</h2>
					<p className='game-card__description'>{description}</p>
					<p className='developer-card__id rounded-full bg-secondary-orange'>{id}</p>
				</div>
			</a>

			<GenreDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} genre={content} />
		</div>
	)
}

export default GenreCard
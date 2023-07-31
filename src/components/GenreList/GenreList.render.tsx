import React, { ReactElement } from 'react'
import { Genre } from '@/types'
import GenreCard from '@/components/GenreCard'

interface Props {
	err?: string
	genres: Genre[]
}

const GenreList = ({ genres }: Props): ReactElement => {
	if (!genres?.length) {
		return (
			<div className='home__error-container'>
				<h2 className='text-black text-xl font-bold'>No games available</h2>
			</div>
		)
	}
	return (	
		<section>
			<div className='home__games-wrapper'>
				{genres.map((genre) =>
					(
						<GenreCard key={genre.id} content={genre} />	
					)
				)}
			</div>
		</section>
		
	)
}

export default GenreList
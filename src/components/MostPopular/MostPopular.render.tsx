import React, { ReactElement } from 'react'
import { Game } from '@/types'
import GameCard from '@/components/GameCard'

interface Props {
	err?: string
	games: Game[]
}

const MostPopular = ({ err, games }: Props): ReactElement => {
	if (err) {
		return (
			<div className='home__error-container'>
				<h2 className='text-black text-xl font-bold'>Unable to fetch games</h2>
			</div>
		)
	}
	if (!games?.length) {
		return (
			<div className='home__error-container'>
				<h2 className='text-black text-xl font-bold'>No games available</h2>
			</div>
		)
	}
	return (
		<section>
			<div className='home__text-container'>
				<h1 className='text-4xl font-extrabold'>Most Popular</h1>
				<p className='text-xl'>The top 10 games based on user ratings (will be updated everyday)</p>
			</div>
			<div className='home__games-wrapper'>
				{games.slice(0,10).map(game => (
					<GameCard key={game.id} content={game} />
				))}
			</div>
		</section>
	)
}

export default MostPopular
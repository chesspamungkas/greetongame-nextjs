import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from 'react'
import { Game } from '@/types'
import GameCard from '@/components/GameCard'

interface Props {
	err?: string
	games: Game[]
}

const GameList = ({ err, games }: Props): ReactElement => {
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
			<div className='home__games-wrapper pb-12'>
				{games.map((game) =>
					(
						<GameCard key={game.id} content={game} />	
					)
				)}
			</div>
		</section>
		
	)
}

export default GameList
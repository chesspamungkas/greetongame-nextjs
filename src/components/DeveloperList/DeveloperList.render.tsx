import React, { ReactElement } from 'react'
import { Developer } from '@/types'
import DeveloperCard from '@/components/DeveloperCard'

interface Props {
	err?: string
	developers: Developer[]
}

const DeveloperList = ({developers }: Props): ReactElement => {
	if (!developers?.length) {
		return (
			<div className='home__error-container'>
				<h2 className='text-black text-xl font-bold'>No games available</h2>
			</div>
		)
	}
	return (
		<section>
			<div className='home__games-wrapper'>
				{developers.map((developer) =>
					(
						<DeveloperCard key={developer.id} content={developer} />	
					)
				)}
			</div>
		</section>
		
	)
}

export default DeveloperList
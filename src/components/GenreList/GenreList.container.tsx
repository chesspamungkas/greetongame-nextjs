import React, { ReactElement } from 'react'
import GenreListRender from './GenreList.render'
import _genre from "./genre.json"
import { Genre } from '@/types'

const GenreListContainer = (): ReactElement => {
	const genres = _genre as Genre[];

	return (
		<main>
            <div className='padding-x padding-y max-width'>
				<div className='relative home__text-container'>
					<h1>Game genres</h1>
				</div>

				<GenreListRender genres={genres} />
			</div>
		</main>
	)
}

export default GenreListContainer
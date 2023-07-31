import React, { ReactElement } from 'react'
import DeveloperListRender from './DeveloperList.render'
import _developer from "./developer.json"
import { Developer } from '@/types'

const DeveloperListContainer = (): ReactElement => {
	const developers = _developer as Developer[];

	return (
		<main>
            <div className='padding-x padding-y max-width'>
				<div className='relative home__text-container'>
					<h1>Game developers</h1>
				</div>

				<DeveloperListRender developers={developers} />
			</div>
		</main>
	)
}

export default DeveloperListContainer
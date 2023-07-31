import React, { ChangeEvent, ReactElement, useState } from 'react'
import { PLATFORMS, GENRESTAGS, SORT_BY } from './constants'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => {
	return (
		<form className='searchbar' onChange={onChange}>
			<div className='searchbar__item'>
				<div className='search-game'>
					<div className='relative w-full'>
						<input name="search" type="text" className="search-game__input" placeholder="Search Games" />
					</div>
				</div>
			</div>
			<div className='w-full md:mr-4 '>
				<div className='relative w-full z-10'>
					<select name="platform" id="platform-select" className='custom-filter__btn'>
						<option value="">All Platforms</option>
						{PLATFORMS.map(platform => (
							<option key={platform.value} value={platform.value}>
								{platform.display}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='w-full md:mr-4'>
				<div className='relative w-full z-10'>
					<select name="category" id="category-select" className='custom-filter__btn'>
						<option value="">All Genres/Tags</option>
						{GENRESTAGS.map(category => (
							<option key={category.value} value={category.value}>
								{category.display}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='w-full md:mr-4'>
				<div className='relative w-full z-10'>
					<select name="sortBy" id="sortBy-select" className='custom-filter__btn'>
						<option value="">Sort By</option>
						{SORT_BY.map(sortBy => (
							<option key={sortBy.value} value={sortBy.value}>
								{sortBy.display}
							</option>
						))}
					</select>
				</div>
			</div>
		</form>
	)
}

export default GameFilter

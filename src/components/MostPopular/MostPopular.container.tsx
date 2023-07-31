import React, { ReactElement, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import MostPopularRender from './MostPopular.render'
import { Filter } from '@/types'

const MostPopularContainer = (): ReactElement => {
	const [filter] = useState<Filter>({
		search: '',
		platform: '',
		category: '',
		sortBy: 'relevance',
		filter: false
	})

	const { games, error } = useFetch(filter)

	return (
		<MostPopularRender err={error} games={games} />
	)
}
export default MostPopularContainer
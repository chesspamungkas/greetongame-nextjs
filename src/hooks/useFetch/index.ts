import { useState, useEffect } from 'react'
import axios from 'axios'
import { Game } from '@/types'
import { API_HOST, API_KEY } from './constants'
import { Filter } from '@/types'

type Response = {
	games: Game[]
	error: string
}

const useFetch = (params: Filter): Response => {
	const [games, setGames] = useState(<Game[]>([]))
	const [err, setErr] = useState<string>('')
	const { search, platform, category, sortBy, filter } = params

	let newParams = {};
	
	if (filter===true) {
		category !== "" ? newParams= {...newParams, category : category} : ''
		platform !== "" ? newParams= {...newParams, platform : platform} : ''
		sortBy !== "" ? newParams= {...newParams, 'sort-by' : sortBy} :''
	} else {
		sortBy !== "" ? newParams= {...newParams, 'sort-by' : sortBy} :''
	}

	const fetchData = () => {
		axios
		.get('/games', {
			baseURL: `https://${API_HOST}/api`,
			headers: {
				'X-RapidAPI-Key': API_KEY,
				'X-RapidAPI-Host': API_HOST,
			},
			params: newParams

		})
		.then(res => {
			const listed = res.data;
			if (filter !== true) {
				for (var i = 0; i < res.data.length; i++) {
					const index = Math.floor(Math.random() * res.data.length); // pick data randomly
					const removed = res.data.splice(index, 1); // remove it for preventing duplication
					listed.push(removed[0]);
				}

				const now = new Date()

				// `item` is an object which contains the original value as well as the time when it's supposed to expire
				const item = {
					expiry: now.getTime() + 86400000,
				}
				localStorage.setItem('popular', JSON.stringify(listed));
				localStorage.setItem('expiry', JSON.stringify(item));
				setGames(listed)

			} else
				setGames(res.data)

		})
		.catch(e => setErr(e.message))
	}

	useEffect(() => {
		if (filter===false) {
			const expiry = window.localStorage.getItem('expiry');
			const popular = window.localStorage.getItem('popular');
			if ( expiry !== null && expiry !== undefined && popular !== null && popular !== undefined ) {
				const item = JSON.parse(expiry)
				const now = new Date()
				if (now.getTime() > item.expiry) {
					// If the item is expired, delete the item from storage
					localStorage.removeItem('popular')
					localStorage.removeItem('expiry')
					fetchData();
				}
				else
					setGames(JSON.parse(popular));
			} else
			fetchData();

		} else
			fetchData();
		
	}, [search, platform, category, sortBy, filter])

	return {	
		games,
		error: err
	}
}

export default useFetch
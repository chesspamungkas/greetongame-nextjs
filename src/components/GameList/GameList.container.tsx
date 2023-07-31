import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import GameListRender from './GameList.render'
import GameFilter from '@/components/GameFilter'
import { Filter } from '@/types'
import InfiniteScroll from "react-infinite-scroll-component";

const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		search: '',
		platform: '',
		category: '',
		sortBy: 'relevance',
		filter: true
	})
	
	const { games, error } = useFetch(filter)
	
	const itemsPerPage = 10;

	const [allGames, setAllGames] = useState(games);
	const [gameData, setGameData] = useState(games);
	const [hasMore, setHasMore] = useState(true);
	const [records, setRecords] = useState(itemsPerPage);

	const fetchMoreData = () => {
		if (filter.search !=="") {

			if (gameData.length === 0) {
				setHasMore(false);
				return;
			}

			const interval = setTimeout(() => {		
				setGameData((data) => {	
					if (gameData.length>0) {
						setRecords(records + 10);
						return [...data, ...gameData.slice(records, records + 10)];
					}
					else {
						setRecords(records + 10);
						return [...data, ...gameData];
					}		
				});
			}, 1500);

			return () => clearTimeout(interval);

		} else {

			if (gameData.length === 0) {
				setHasMore(false);
				return;
			}

			const interval = setTimeout(() => {		
				setGameData((data) => {	
					if (allGames.length>0) {
						setRecords(records + 10);
						return [...data, ...allGames.slice(records, records + 10)];
					}
					else {
						setRecords(records + 10);
						return allGames;
					}
				});
			}, 1500);
			
			return () => clearTimeout(interval);
		}
	};

	const filterGames = () => {
		const regexSearch = new RegExp(filter.search, 'ig')
		return games.filter(game => {
			return regexSearch.exec(game.title)
		})
	}

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({		
			...current,
			[event.target.name]: event.target.value,
		}))

		event.preventDefault()
	}, [])

	useEffect(() => {
		if (filter.search !=="") {
			setGameData(filterGames().slice(0,10));
			setAllGames(filterGames());
		}
		else {
			if(games.length>0)
			{
				setGameData(games.slice(0, 10));
				setAllGames(games);
			} else {
				setGameData(games);
				setAllGames(games);
			}		
		}		
	}, [games]);

	return (
		<>
		<div className='relative home__text-container'>
			<h1>Top Free Games for PC and Browser!</h1>
		</div>
		<div className='home__filters'>
			<GameFilter onChange={onFilterChange} />
		</div>
	
		<InfiniteScroll
          dataLength={gameData.length}
          next={fetchMoreData}
          hasMore={hasMore}
		  height={350}
          loader={
			games.length > 0 && gameData.length > 0 && gameData.length !== allGames.length && gameData.length >= 10 && allGames.length >= 10 && (
			<>
			<div className="text-center justify-content-center">
				<svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
				</svg>
			</div>
			<p className={`text-center text-primary text-2xl font-bold`}>Loading ...</p>
			</>
			)
		  }
        >
			<GameListRender games={gameData} />
		</InfiniteScroll>
		</>
	)
}

export default GameListContainer
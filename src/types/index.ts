export type Game = {
	id: number
	title: string
	thumbnail: string
	short_description: string
	game_url: string
	category: string,
	genre: string
	platform: string
	publisher: string
	developer: string
	release_date: string
	freetogame_profile_url: string
}

export type Filter = {
	search: string
	platform?: string
	category?: string
	sortBy: string,
	filter: boolean
}

export type Developer = {
	id: number;
	title: string
	description: string
}

export type Genre = {
	id: number;
	title: string
	description: string
}

export interface OptionProps {
	title: string;
	value: string;
}

export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}

export interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
}
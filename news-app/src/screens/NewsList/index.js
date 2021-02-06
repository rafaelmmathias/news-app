import React from 'react';
import CardNews from './components/CardNews';
import { useFetch } from '../../hooks/useFetch';

export default function NewsList() {
	const { data, error } = useFetch(
		`http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=7d063102466648faaec3577feb211131&pageSize=10`
	);

	console.log(data);
	return (
		<div>
			<CardNews
				actionButtonProps={{
					onClick: () => {
						console.log('xx123');
					}
				}}
				title="Heading SM"
				subtitle="Subtitle SM"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			/>
		</div>
	);
}

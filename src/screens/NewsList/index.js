import React from 'react';
import CardNews from './components/CardNews';
import { useFetch } from '../../hooks/useFetch';
import Box from '../../components/Box';

export default function NewsList() {
	const { data, error } = useFetch(
		`http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=7d063102466648faaec3577feb211131&pageSize=10`
	);

	const onOpenNews = (news) => {
		window.open(news.url, '_blank');
	};
	
	return (
		<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
			{data &&
				data.articles.map((news) => (
					<CardNews
						actionButtonProps={{
							onClick: () => {
								onOpenNews(news);
							}
						}}
						title={news.title}
						subtitle={news.description}
						text={news.content}
					/>
				))}
		</Box>
	);
}

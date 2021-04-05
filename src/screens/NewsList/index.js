import React, { useState } from 'react';
import CardNews from './components/CardNews';
import { useFetch } from '../../hooks/useFetch';
import Box from '../../components/Box';
import CategoryList from './components/CategoryList';

const categories = [
  { apiValue: 'business', text: 'Negócios' },
  { apiValue: 'sports', text: 'Esportes' },
  { apiValue: 'entertainment', text: 'Entretenimento' }
];

export default function NewsList() {
  const [category, setCategory] = useState(categories[0]);

  const { data } = useFetch(
    `http://newsapi.org/v2/top-headlines?country=br&category=${category.apiValue}&apiKey=7d063102466648faaec3577feb211131&pageSize=10`
  );

  const onOpenNews = news => {
    window.open(news.url, '_blank');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="xxxs"
    >
      <Box display="flex" width="size-general-full" mb="spacing-stack-xxs">
        <CategoryList
          categories={categories}
          selectedCategory={category}
          onSelect={setCategory}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {data &&
          data.articles.map(news => (
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
    </Box>
  );
}

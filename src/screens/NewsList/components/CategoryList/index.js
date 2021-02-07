import React from 'react';
import { CategoryListContainer, CategoryOption } from './CategoryList.styled';

export default function CategoryList({ categories, selectedCategory, onSelect }) {
	return (
		categories && (
			
				<CategoryListContainer>
					{categories.map((category) => (
						<CategoryOption
							active={selectedCategory ? selectedCategory.apiValue === category.apiValue : false}
							onClick={() => {
								onSelect(category);
							}}
						>
							{category.text}
						</CategoryOption>
					))}
				</CategoryListContainer>
			
		)
	);
}

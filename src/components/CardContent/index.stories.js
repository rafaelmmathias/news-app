import React from 'react';
import CardContent from '.';

export const LongTexts = (args) => (
	<CardContent
		title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
		subtitle={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
		buttonText={'Acessar'}
		text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	/>
);

export const SmallTexts = (args) => (
	<CardContent
		title={'Lorem'}
		subtitle={'Ut enim'}
		buttonText={'Acessar'}
		text="Duis aute irure dolor."
	/>
);

const storyConfig = {
	title: 'Card Content',
	component: CardContent
}

export default storyConfig;

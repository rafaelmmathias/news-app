import React from 'react';
import CardContent from '../../../../components/CardContent';

export default function CardNews(props) {
	return (
		<CardContent
			maxWidth={[ 'size-general-md', 'size-general-md', 'size-general-lg' ]}
			mb="spacing-stack-xxxs"
			buttonText="Acessar"
			{...props}
		/>
	);
}

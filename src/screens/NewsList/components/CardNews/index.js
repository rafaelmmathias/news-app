import React from 'react';
import CardContent from '../../../../components/CardContent';

export default function CardNews(props) {
	return (
		<CardContent
			maxWidth={[ 'size-general-sm', 'size-general-sm', 'size-general-md' ]}
			mb="spacing-stack-xxxs"
			buttonText="Acessar"
			{...props}
		/>
	);
}

import React from 'react';
import Box from '../components/Box';
import Header from './components/Header';
import { Container } from './index.styled';

export default function Layout({ children }) {
	return (
		<Box>
			<Header />
			<Container>{children}</Container>
		</Box>
	);
}

import styled from 'styled-components';

export const ItemContacts = styled.li`
font-size: ${p => p.theme.fontSizes.m};
display: flex;
gap: ${p => p.theme.space[4]}px;
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[3]}px;


`

export const ListContacts = styled.ul`
margin-top: ${p => p.theme.space[4]}px;
`
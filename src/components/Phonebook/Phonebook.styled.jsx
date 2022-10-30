import styled from 'styled-components';


export const Container = styled.div`
padding: ${p => p.theme.space[4]}px;
outline: 1px solid black;
background-color: ${p => p.theme.colors.accent};
`

export const Title = styled.h1`
font-size: ${p => p.theme.fontSizes.l};
text-align: center;
margin-bottom: ${p => p.theme.space[4]}px;
`

export const ContactsTitle = styled.h2`
font-size: ${p => p.theme.fontSizes.l};
text-align: center;
`
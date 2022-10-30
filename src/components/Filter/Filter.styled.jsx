import styled from 'styled-components';

export const NameField = styled.label`
font-size: ${p => p.theme.fontSizes.m};
color:  ${p => p.theme.colors.muted};
font-weight: ${p => p.theme.fontWeights.bold};

`

export const InputValue = styled.input`
margin-left: ${p => p.theme.space[3]}px;
`
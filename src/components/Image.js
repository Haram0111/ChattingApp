import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;

const StyledImage = styled.Image`
    background-color: ${({theme}) => theme.imageBackground};
    width: 100px;
    height: 100px;
`

const Image = ({url, imageStyle})
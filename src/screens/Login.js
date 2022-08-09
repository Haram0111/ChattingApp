import React from 'react';
import styled from 'styled-components/native';
import {text, Button} from 'react-native';
import theme from '../theme';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Login = ({ navigation }) => {
    return(
        <Container>
            <Text style={{fontSize: 30}}>Login Screen</Text>
            <Button title="Signup" onPress={()=> navigation.navigator('Signup')} />
        </Container>
    )
};

export default Login;
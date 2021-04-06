import React from 'react';
import { Header } from '../components/accordion/styles/accordion';

export default function HeaderContainer() {
    return ( 
        <Header>
            <Header.Frame>
                <header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    );
}
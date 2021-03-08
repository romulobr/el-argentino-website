import logo from './assets/logo-el-argentino.jpg'
import React from 'react';

import Header from './header';

export default {
    title: 'Site Header',
    component: Header
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
    logo: logo,
    phone: '(62)1234-5567',
    whatsAppUrl:'https://web.whatsapp.com/send?phone=556239414008&text=Bem+vindo+%C3%A0+Argentina%21',
    email: 'email@domain.com'
};

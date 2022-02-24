import React from 'react';

const navLinks = [
    {
        path: '/',
        component: React.lazy(() => import('../containers/home')),
        isPrivate: false,
        isAdmin: false,
        exact: true,
    }
]

export default navLinks;
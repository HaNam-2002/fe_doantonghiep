import {  LoginForm } from '../pages/index';
import { LayoutDefault } from '../layouts/index';
import {  AdminForm } from '../pages/index';

const router = {
    normal: [
        { path: '/', layout: LayoutDefault, component: LoginForm },
    ],
    protect: [
        
        { path: '/admin', layout: LayoutDefault, component: AdminForm },
    ],
};

export { router };

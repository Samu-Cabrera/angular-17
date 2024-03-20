import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
                title: 'Change Detection'
            },
            {
                path: 'control-flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
                title: 'Control Flow'
            },
            {
                path: 'defer-option',
                loadComponent: () => import('./dashboard/pages/defer-option/defer-option.component'),
                title: 'Defer Option'
            },
            {
                path: 'defer-views',
                loadChildren: () => import('./dashboard/pages/defer-views/defer-views.component'),
                title: 'Defer Views'
            },
            {
                path: 'user/:id',
                loadComponent: () => import('./dashboard/pages/user/user.component'),
                title: 'User'
            },
            {
                path: 'users',
                loadComponent: () => import('./dashboard/pages/users/users.component'),
                title: 'Lista de Usuarios'
            },
            {
                path: 'view-transition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
                title: 'View Transition'
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

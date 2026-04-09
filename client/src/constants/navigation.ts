
export interface MenuItem {
    path: string;
    label: string;
    icon: string;
}

export const SidebarMenu: MenuItem[] = [
    { path: '/', label: 'Dashboard', icon: '/assets/overview.svg'},
    { path: '/tasks', label: 'Tasks', icon: '/assets/task.png'},
    { path: 'settings', label: 'Settings', icon: '/assets/settings.png'},
]
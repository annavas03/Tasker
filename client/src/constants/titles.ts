export const PAGE_TITLES: Record<string, string> = {
    '/': 'Dashboard',
    '/tasks': 'My Tasks',
    '/planner': 'Planner',
    '/settings': 'Settings',
}

export const getPageTitle = (pathname: string): string => {
    return PAGE_TITLES[pathname] || 'Tasker'
}
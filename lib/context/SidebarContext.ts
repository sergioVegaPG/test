// Libraries imports
import { create } from 'zustand';
import { easeInOut } from 'framer-motion';

interface ISidebar {
    borderRadius: number,
    borderWidth: number,

    isSidebarCollapsed: boolean,
    setIsSidebarCollapsed: (state: boolean) => void,

    sidebarWidthTransition: {
        duration: .5,
        ease: any,
    }

    sidebarWidthCollapsed: number,
    sidebarWidthExpanded: number,
}

export const useSidebar = create<ISidebar>(set => ({
    sidebarWidthCollapsed: 48,
    sidebarWidthExpanded: 256,

    isSidebarCollapsed: true,
    setIsSidebarCollapsed: (collapsed: boolean) => set(() => ({ isSidebarCollapsed: collapsed })),

    sidebarWidthTransition: {
        duration: .5,
        ease: easeInOut
    },

    borderRadius: 6,
    borderWidth: 8,
}));

export const useSidebarWidth = () => useSidebar(state =>
    state.isSidebarCollapsed ? state.sidebarWidthCollapsed : state.sidebarWidthExpanded
)
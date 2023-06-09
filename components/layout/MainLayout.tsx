'use client'

// Libraries imports
import { AnimatePresence, motion } from 'framer-motion';

// Local imports
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { useSidebar, useSidebarWidth } from '@/lib/context/SidebarContext';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { sidebarWidthTransition, setIsSidebarCollapsed, isSidebarCollapsed } = useSidebar();
    const sidebarWidth = useSidebarWidth();
  
    const isDesktop = useMediaQuery();

  return (
    <section className='w-screen min-h-screen bg-custom-white'>

      {/* Sidebar */}
      <AnimatePresence>
        {
          (isDesktop || !isSidebarCollapsed) &&
          <motion.aside
            className='absolute inset-0 bg-secondary-500 text-custom-white z-10k'
            initial={{ width: 0 }}
            animate={{ width: sidebarWidth, transition: { ...sidebarWidthTransition } }}
            exit={{ width: 0, transition: { ...sidebarWidthTransition } }}
          >
            <Sidebar />
          </motion.aside>
        }
      </AnimatePresence>

      {/* Mobile background */}
      <AnimatePresence>
        {
          !isDesktop && !isSidebarCollapsed &&
          <motion.div
            className='absolute inset-0 bg-secondary-500 bg-opacity-25 z-[4000]'
            onClick={() => setIsSidebarCollapsed(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ...sidebarWidthTransition } }}
            exit={{ opacity: 0, transition: { ...sidebarWidthTransition } }}
          />
        }
      </AnimatePresence>

      {/* Header and page */}
      <motion.section
        className='absolute inset-0 flex flex-col'
        initial={{ left: isDesktop ? sidebarWidth : 0 }}
        animate={{ left: isDesktop ? sidebarWidth : 0, transition: { ...sidebarWidthTransition } }}
      >
        <header className='h-header w-full z-50 shadow-header'>
          <Header />
        </header>
        <section
          className='flex flex-col flex-auto justify-between overflow-x-hidden overflow-y-overlay'
          id='content'
          onClick={() => !isDesktop && setIsSidebarCollapsed(true)}
        >
          <div className='px-sidebar-icon py-4'>
            {children}
          </div>
          <div className='shadow-footer'>
            <Footer />
          </div>
        </section>
      </motion.section>
    </section>
  )
}

export default MainLayout
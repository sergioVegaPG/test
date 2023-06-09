import '@/lib/assets/dx.generic.pg-theme.css';
import MainLayout from '@/components/layout/MainLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}
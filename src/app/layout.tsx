import Header from '@/components/header/header';
import NavList from '@/components/nav/navList';
import Footer from '@/components/footer/footer';
import { CartProvider } from '@/context/cart';
import '@/styles/index.scss';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='app'>
        <CartProvider>
          <div className='top'>
            <Header />
            <NavList />
          </div>
          <main className='container'>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;

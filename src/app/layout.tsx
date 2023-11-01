import Header from '@/components/header/header';
import NavList from '@/components/nav/navList';
import Footer from '@/components/footer/footer';
import Providers from '@/providers/providers';
import ProviderRedux from '@/providers/providerRedux';
import '@/styles/index.scss';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='app'>
        <ProviderRedux>
          <Providers>
            <div className='top'>
              <Header />
              <NavList />
            </div>
            <main className='container'>{children}</main>
            <Footer />
          </Providers>
        </ProviderRedux>
      </body>
    </html>
  );
};

export default RootLayout;

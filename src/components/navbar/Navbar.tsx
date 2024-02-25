import Navbar from './layout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar active="/events" /> // Highlight the "Events" link
      {children}
    </div>
  );
};

export default Layout;

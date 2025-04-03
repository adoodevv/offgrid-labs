import Breadcrumb from '@/components/Breadcrumb';

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="px-6 py-4">
         {/* Breadcrumb navigation */}
         <div className="container mx-auto px-4 py-4">
            <Breadcrumb />
         </div>

         {/* Main content */}
         <main>{children}</main>
      </div>
   );
};

export default Layout;

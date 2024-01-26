import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full">
        <Navbar />
        {children}
      </div>
    </ClerkProvider>
  );
};

export default DashboardLayout;

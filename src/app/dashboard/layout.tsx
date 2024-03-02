import DashboardNav from "@/components/DashboardNav";
import NavBar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import ProfileInfo from "@/components/ProfileInfo";

const dashboardLayout = ({ children }) => {
  return (
    <div className="min-w-max">
      <NavBar />
      <div className=" max-w-screen-xl mx-auto">
        <PageTitle title="My Profile" />
        <div>
          <ProfileInfo />
        </div>
        <div className="pt-6 ">
          <DashboardNav />
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto bg-slate-100">{children}</div>
    </div>
  );
};
export default dashboardLayout;

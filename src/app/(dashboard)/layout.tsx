import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start">
      <h1 className="text-lg font-bold w-96 border p-6">Sidebar</h1>
      <div className="w-full">
        <h1 className="w-full border p-6">Header</h1>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

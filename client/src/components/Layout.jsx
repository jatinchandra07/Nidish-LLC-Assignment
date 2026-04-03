import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🚀 Content Builder
      </h1>
      {children}
    </div>
  );
};

export default Layout;
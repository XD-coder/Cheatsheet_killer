import React from "react";
import Card from "@/components/Cards";
const settings = () => {
  return (
    <main className="bg-gray-200 p-4">
      <div className="bg-gradient-to-br from-blue-200 to-indigo-500 shadow-lg p-7 rounded-2xl bg">
        <p className="font-extrabold text-4xl hover:text-5xl transition-all duration-200">
          Settings:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-4 rounded-2xl shadow-lg mt-4">
        <Card
          bg="bg-blue-200"
          bg-hover="bg-blue-500"
          href="/dashboard/settings/account"
          symbol="🔒"
          title="Account"
          description="Change your account settings"
        />
        <Card
          bg="bg-green-200"
          bg-hover="bg-green-500"
          href="/dashboard/settings/notifications"
          symbol="🔔"
          title="Notifications"
          description="Change your notification settings"
        />
        <Card
          bg="bg-yellow-200"
          bg-hover="bg-yellow-500"
          href="/dashboard/settings/profile"
          symbol="👤"
          title="profile"
          description="Change your profile settings"
        />
      </div>
    </main>
  );
};

export default settings;

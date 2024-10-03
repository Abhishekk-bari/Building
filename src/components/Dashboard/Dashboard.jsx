// src/components/Dashboard.jsx
import SidebarPanel from "../sidepanel/SidebarPanel";

export default function Dashboard() {
  return (
    <div className="flex">
      <SidebarPanel />
      <main className="flex-grow p-4">
        {/* Dashboard content goes here */}
        <h1>Dashboard Content</h1>
      </main>
    </div>
  );
}
export default function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-r from-gray-900 to-gray-800">
      <header className="bg-gray-700 p-4">
        <h1 className="text-3xl font-bold">Workout Pal</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-700 p-4 text-center">
        <p>Copyright &copy; 2023 Workout Pal. All rights reserved.</p>
      </footer>
    </div>
  );
}

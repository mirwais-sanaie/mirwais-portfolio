import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="mx-auto max-w-7xl antialiased overflow-x-hidden">
      <div className="bg-image fixed bg-cover bg-fixed inset-0 bg-center">
        <div className="relative z-10">
          <Navigation />
        </div>
      </div>
    </main>
  );
}

export default App;

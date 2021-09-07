function App() {
  return (
    <div className="container mx-auto">
      <header className="header flex justify-between py-6">
        <div className="logo"></div>
        <div className="menu flex items-center">
          <ul className="list-none flex font-bold mr-3">
            <li className="text-blue-600 px-4">Home</li>
            <li className="text-blue-800 px-4">About</li>
          </ul>
          <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded">Join as Team</button>
        </div>
      </header>
    </div>
  );
}

export default App;

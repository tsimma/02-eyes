import './App.css'

function App() {
  return (
    <div className="h-screen flex items-center justify-center contrast-125">
      <div
        className={`hover:bg-[url("./resources/closedeyes.jpg")] bg-[url("./resources/openeyes.jpg")] w-[500px] h-[200px] bg-cover bg-center bg-no-repeat`}
      />
    </div>
  )
}

export default App

import Inputs from "./components/Inputs";
import DataList from "./components/DataList";
import { MainContext } from "./store/mainStore";

function App() {
  return (
    <main>
      <MainContext>
        <Inputs inputName="Добавить новую заметку" />
        <DataList />
      </MainContext>
    </main>
  );
}

export default App;

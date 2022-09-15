import Layout from './Components/Layout';
import { CalculateProvider } from './Context/CalculateContext';
import { DataProvider } from './Context/DataContext';



function App() {
  return (
    <div>
      <DataProvider>
        <CalculateProvider>
          <Layout />
        </CalculateProvider>
      </DataProvider>
    </div>
  );
}

export default App;

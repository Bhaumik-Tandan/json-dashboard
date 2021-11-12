import Main from './main/main';

function App() {
  const data=require('./data.json');
  return (
    <Main data={data}></Main>
  );
}

export default App;

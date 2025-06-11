// import { Provider } from 'react-redux';
// import { store } from './store';
// import Dashboard from './components/Dashboard';
// import styled from 'styled-components';

// const AppContainer = styled.div`
//   min-height: 100vh;
//   background-color: #f5f5f5;
// `;

// const TestComponent = () => {
//   console.log('Test component rendering');
//   return <div style={{textAlign:"center"}}>Test Component</div>;
// };

// function App() {
//   console.log('App component rendering');
//   return (
//     <Provider store={store}>
//       <AppContainer>
//         <TestComponent />
//         <Dashboard />
//       </AppContainer>
//     </Provider>
//   );
// }

// export default App;


import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 
`;

const Header = styled.header`
  background-color: #2f80ed;
  color: white;
  padding: 20px 40px;
  font-size: 1.8rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ContentWrapper = styled.div`
 
  padding: 20px 40px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header>📊 Filter Optimization Dashboard</Header>
        <ContentWrapper>
          <Dashboard />
        </ContentWrapper>
      </AppContainer>
    </Provider>
  );
};

export default App;

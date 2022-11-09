import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
// import Profile from './pages/Profile/Profile';
// import Room from './pages/Room/Room';
// import End from './pages/End/End';
import Footer from './components/Footer/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
          <Router>
  <div className="flex-column justify-flex-start min-100-vh">
    <div className="container">
          <Header />
    <Routes>
      <Route 
      path="/"
      element={<Home />} />
       {/* <Route 
          path="/room/:roomName" 
          element={<Room />}
        /> */}
          {/* <Route 
          path="/endgame/:roomName" 
          element={<End />}
        /> */}
         {/* <Route 
          path="/me" 
          element={<Profile />}
        /> */}
        <Route 
          path="*" 
          element={<h1 className='display-2'>You have chosen...poorly! Wrong page.</h1>}
        />
    </Routes>
    </div>
    <Footer />
  </div>
</Router>
    </ApolloProvider>
  );
}

export default App;

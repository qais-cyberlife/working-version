import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authors from "./components/Authors";
import Posts from "./components/Posts";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        authors: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        posts: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache,
});


function App() {
  return (
      <ApolloProvider client={client}>
      <Router>
        <>
          <NavBar/>
          <Routes>

            <Route path='/' element={<Home/>} />

            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            <Route path='/authors' element={<Authors/>} />

            <Route path='/write' element={<Write/>} />

            <Route path='/posts/posts:id' element={<SinglePost/>} />

            <Route path='/posts' element={<Posts/>} />

          </Routes>
        </>
      </Router>
      </ApolloProvider>

  );
}

export default App;

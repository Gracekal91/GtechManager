import './assets/scss/styles.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import Footer from './components/home/Footer';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dashboard" element={<Admin/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </ApolloProvider>
        </>
    )
}

export default App;
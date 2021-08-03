import { HashRouter,Route,Link } from "react-router-dom";
import About from "./router/About";
import Detail from "./router/Detail";
import Home from "./router/Home";

function Navigation(){
    return <div>
        <Link to="/a"> Home </Link>
        <Link to={{
            pathname:"/about",
            state:{
                thisWorks:true,
                amISexy:true,
            }
        }}>About</Link>
    </div>
}

function App(){
    return (
    <HashRouter>
        <Navigation />
        <Route path="/a" exact={true} component={Home} /> 
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
    </HashRouter>
    )
}

export default App;
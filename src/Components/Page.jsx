import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Home"
import p404 from "./404"
import About from "./About"
import Socials from "./Socials"

const Page = () => {
    return (
        <div className="background">
            <header>
                <h1><a href="/">home</a>✧<a href="/about">about</a>✧<a href="/socials">socials</a></h1>
                <hr />
            </header>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/socials" component={Socials}/>
                        <Route component={p404}/>
                    </Switch>
                </Router>
        </div>
    )
}

export default Page

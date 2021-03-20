import React from 'react'
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import HomeLoader from '../components/home/HomeLoader'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PageNotFound from '../components/main/PageNotFound'

const AppRouter=()=>(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={HomeLoader} />
            <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default AppRouter
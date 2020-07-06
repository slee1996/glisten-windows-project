import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import Contact from './Components/Contact/Contact'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
    </Switch>
)
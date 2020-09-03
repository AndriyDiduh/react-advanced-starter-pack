import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Axios from 'axios'

import 'Scss/all.scss'
import 'Scss/fonts.scss'

// Generate APP
export default class AppGenerate extends React.Component<any, any> {
    public constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render = (): JSX.Element => {
        return <div className="app">React Advanced APP</div>
    }
}

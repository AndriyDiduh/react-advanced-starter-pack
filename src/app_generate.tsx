import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Axios from 'axios'

import 'Scss/all.scss'
import 'Scss/fonts.scss'

// GET NAVIGATION DATA from STATE - work Only ONCE
//const navigation = new Navigation(false)
//const activatedPage = navigation.state.activated_page

export class AppGenerate extends React.Component<AppGenerateProps, AppGenerateState> {
    public constructor(props: AppGenerateProps) {
        super(props)
        this.state = {}
    }

    public componentDidMount = (): any => {}

    public componentWillUnmount = (): any => {}

    private onRemoteStateChange = (): void => {}


    public render = (): JSX.Element => {
        return (
            <div className="app">
                React Advanced APP
            </div>
        )
    }
}

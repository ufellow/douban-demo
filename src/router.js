import React ,{Fragment} from 'react';
import {BrowserRouter as Routers, Route, Switch}  from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './App'
import Hots from './pages/hots'
class Routes extends React.Component{
    render(){
        return  (<Provider store={store}>
            <Fragment>
                <Routers>
                    <App>
                        <Switch>
                            <Route path='/hots' component={Hots}></Route>
                            {/* <Route path='/motion' component={MotionSpring}></Route> */}
                        </Switch>
                    </App>
                </Routers>
            </Fragment>
        </Provider>)
    }
}

export default Routes;
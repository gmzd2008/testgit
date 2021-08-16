import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

class App extends Component {
    render () {
        return (
            <div>react template</div>
        )
    }
}
render(<App />, $('#root')[0]);

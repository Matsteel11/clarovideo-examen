import React, { Component } from 'react';
import Groups from '../../components-ui/groups/groups';
import HomeCss from './home.css';

class Home extends Component {
    render() {
        return (
            <div className="content_div">
                <Groups data={this.props.data.response.groups}/>
            </div>
        )
    }

}
export default Home;
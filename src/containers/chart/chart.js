import React from "react";
import { Link } from "react-router-dom";

class Chart extends React.Component {
    render() {
        return (
            <div>
                <h1 className="main">
                    <Link className="link" to="/">
                        React Home Page
                    </Link>
                </h1>
                <h3 className="main">High Chart Example</h3>
            </div>
        )
    }
}

export default Chart;
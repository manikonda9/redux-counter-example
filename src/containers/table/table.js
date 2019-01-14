import React from "react";
import { Link } from "react-router-dom";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                },
                {
                    Name: "Manikonda Malakondaiah",
                    Id: 20190001,
                    Age: 24,
                    Place: "Ongole",
                    EmailId: "mmk@gmail.com"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="main">
                    <Link className="link" to="/">
                        React Home Page
                    </Link>
                </h1>
                <h3 className="main">Table Search Example</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Age</th>
                            <th>Place</th>
                            <th>Email Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((data, index) =>
                            <tr key={index}>
                                <td>{data.Name}</td>
                                <td>{data.Id}</td>
                                <td>{data.Age}</td>
                                <td>{data.Place}</td>
                                <td>{data.EmailId}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
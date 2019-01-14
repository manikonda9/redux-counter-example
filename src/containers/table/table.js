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
                    Name: "Anirudh Kanneganti",
                    Id: 20190002,
                    Age: 23,
                    Place: "Bapatla",
                    EmailId: "anirudh@gmail.com"
                },
                {
                    Name: "Manikanta Darthi",
                    Id: 20190003,
                    Age: 26,
                    Place: "Vijayawada",
                    EmailId: "mani@gmail.com"
                },
                {
                    Name: "Harish Kanneganti",
                    Id: 20190004,
                    Age: 25,
                    Place: "Vinukonda",
                    EmailId: "harish@gmail.com"
                },
                {
                    Name: "Venu Gopal",
                    Id: 20190005,
                    Age: 21,
                    Place: "Chirala",
                    EmailId: "venu@gmail.com"
                },
                {
                    Name: "Kishore Das",
                    Id: 20190006,
                    Age: 28,
                    Place: "Nellore",
                    EmailId: "kishore@gmail.com"
                },
                {
                    Name: "Shiva Eadara",
                    Id: 20190007,
                    Age: 23,
                    Place: "Guntur",
                    EmailId: "shiva@gmail.com"
                },
                {
                    Name: "Naga Sai",
                    Id: 20190008,
                    Age: 21,
                    Place: "Ponnuru",
                    EmailId: "sai@gmail.com"
                },
                {
                    Name: "Shiva Shankar",
                    Id: 20190009,
                    Age: 22,
                    Place: "Vijayawada",
                    EmailId: "shankar@gmail.com"
                },
                {
                    Name: "Karanam Balaram",
                    Id: 20190010,
                    Age: 22,
                    Place: "Kandukur",
                    EmailId: "balaram@gmail.com"
                },
                {
                    Name: "Anjaneyulu Mallola",
                    Id: 20190011,
                    Age: 24,
                    Place: "Tenali",
                    EmailId: "anji@gmail.com"
                },
                {
                    Name: "Sai Teja",
                    Id: 20190012,
                    Age: 25,
                    Place: "Ongole",
                    EmailId: "teja@gmail.com"
                },
                {
                    Name: "Naveen Mahankali",
                    Id: 20190013,
                    Age: 23,
                    Place: "Nellore",
                    EmailId: "naveen@gmail.com"
                },
                {
                    Name: "Ashok Kongara",
                    Id: 20190014,
                    Age: 26,
                    Place: "Vinukonda",
                    EmailId: "ashok@gmail.com"
                }
            ],
            items: [],
            searchInput: ""
        }
    }

    componentWillMount = () => {
        const list = this.state.data;
        list.sort(function (x, y) {
            if (x.Name > y.Name) {
                return 1;
            } else {
                return -1;
            }
        })
        this.setState({
            items: list
        })
    }

    searchTableData = () => {
        let value = this.state.searchInput;
        let data = this.state.data;
        let items = [];
        data.forEach(function (ele) {
            if (ele.Name.toLowerCase().indexOf(value) > -1) {
                items.push(ele);
            }
        })

        this.setState({
            items: items,
            searchInput: ""
        })
    }

    onHandleChange = (e) => {
        let value = e.target.value;
        this.setState({
            searchInput: value
        })
    }

    render() {
        const items = this.state.items;
        return (
            <div className="container">
                <h1 className="main">
                    <Link className="link" to="/">
                        React Home Page
                    </Link>
                </h1>
                <h3 className="main">Table Search Example</h3>
                <input type="text" value={this.state.searchInput} onChange={this.onHandleChange} />
                <button className="btn btn-success" onClick={this.searchTableData}>Search</button>
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
                        {items.map((data, index) =>
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
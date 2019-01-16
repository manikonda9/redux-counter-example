import React from "react";
import { connect } from "react-redux";
import { dataRef } from "../../config/firebase";
import { getData } from "../../actions/tableAction";
import TableView from "../../components/tableView/tableView";
import "./table.css";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.props.get();
    }

    componentWillMount = () => {
        /*let items = [];
        const ordersRef = dataRef.orderByKey();
        ordersRef.once("value", snapshot => {
          snapshot.forEach(child => {
            items.push(child.val());
          });
          items.sort(function(x, y) {
            if (x.Name > y.Name) {
              return 1;
            } else {
              return -1;
            }
          });
    
          this.setState({
            items: items,
            data: items
          });
        });*/
        //this.props.get();
    };
    render() {
        const items = this.props.list.data;
        if (items.length > 0) {
            return (
                <div className="container">
                    <TableView items={items} />
                </div>
            );
        } else {
            return <div className="container text-center loader">Loading .....</div>
        }

    }
}

const mapStateToProps = state => {
    return {
        list: state.tableReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        get: () => dispatch(getData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
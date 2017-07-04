import React, {Component} from "react";

function ListItem(props) {
        return <li>{props.value}</li>;
}

export class MyList extends Component {
    list = [
        {id: 0, value: 'test1'},
        {id: 1, value: 'test2'},
        {id: 2, value: 'test2'},
    ];

    render() {
        return (
            <ul className="MyList">
                {this.list.map(item =>
                    <ListItem key={item.id.toString()} value={item.value}/>
                )}
            </ul>
        )
    }
}
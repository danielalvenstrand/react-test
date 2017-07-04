import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './style.css';

import {Clock} from '../../components/Clock';
import {MyList} from '../../components/MyList';

class MyInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onValueChange(event.target.value);
    }

    render() {
        return (
            <section className="MyInput">
                <label>{this.props.label}</label>
                <input type="text" value={this.props.value} onChange={this.handleChange} />
                {this.props.children}
            </section>
        )
    };
}

class HomePage extends Component {

    constructor() {
        super();

        this.state = {myInput: ''};

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(value) {
        this.setState({myInput: value});
    }

    render() {

        return (
            <main className="HomePage">
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.<br />
                </p>
                <Clock increment={1}/>
                <MyList />

                <MyInput value={this.state.myInput} onValueChange={this.handleValueChange} label="Name">
                    <legend>Length: {this.state.myInput.length}</legend>
                </MyInput>
            </main>
        );
    }

};

export default HomePage;
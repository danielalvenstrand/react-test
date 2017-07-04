import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./style.css";

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            number: 0
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState, props) => ({
            date: new Date()
        }));
    }

    increase() {
        this.setState((prevState, props) => ({
            number: prevState.number + props.increment
        }));
    }

    decrease() {
        this.setState((prevState, props) => ({
            number: prevState.number - props.increment
        }));
    }


    render() {
        return (
            <article className="Clock">
                <section>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                </section>
                    <p>{this.state.number}</p>
                <section>
                    <button onClick={this.increase}>increase</button>
                    <button onClick={this.decrease}>decrease</button>
                </section>
            </article>
        );
    }
}

Clock.propTypes = {
    increment: PropTypes.number
};
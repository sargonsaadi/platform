import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './Results';
import KeysBox from './KeysBox';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const MATH = ['*', '+', '/', '='];

class Calculator extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            temp: '0',
            equation: [],
            didCalculate: false
        }
    }

    componentDidMount() {
    }

    handlePress = symbol => {
        if (DIGITS.includes(symbol)) {
            this.calcDigit(symbol)
        }

        if (MATH.includes(symbol)) {
            this.tryCalculate(symbol)
        }

        switch (symbol) {
            case 'Del':
                this.deleteDigit()
                break;
            case 'C':
                this.reset();
                break;
            case '-+':
                this.changeSign()
                break;
            case '.':
                this.addDecimal();
                break;

        }
    }
    addDecimal = () => {
        let { temp, equation } = this.state;
        const length = equation.length;
        console.log("temp:", temp)
        if (temp.toString().indexOf('.') < 0) {

            switch (length) {
                case 0:
                    temp = '0.';
                    break;
                case 1:
                    temp = temp + '.';
                    equation[0] = temp;
                    break;
                case 2:
                    temp = temp + '.';
                    equation.push(temp);
                    break;
                case 3:
                    temp = temp + '.';
                    equation[2] = temp
                    break;
                default:
                    break;
            }
        }
        this.setState({ temp, equation });
    }
    changeSign = () => {
        let { temp, equation } = this.state;
        const length = equation.length;

        switch (length) {
            case 0:
                //do nothing
                break;
            case 1:
                equation[0] = equation[0] * -1;
                break;
            case 2:
                equation[2] = equation[2] * -1;
                break;
            case 3:
                equation[2] = equation[2] * -1;
                break;
            default:
                break;
        }
        temp = -1 * temp;
        this.setState({ temp, equation });
    }
    reset = () => {
        this.setState({
            temp: '0',
            final: 'null',
            number: "",
            equation: [],
            math: "",
            history: []
        })
    }
    deleteDigit = () => {
        let { temp } = this.state;
        temp = temp.toString();

        if (temp !== '0') {
            temp = temp.slice(0, temp.length - 1);

        }
        // reset to 0
        if (temp === '') {
            temp = '0';
        }
        this.setState({ temp })
    }

    calcDigit = digit => {
        const { temp, equation } = this.state;
        let newTemp = 0;
        const length = equation.length;


        if (this._shouldOverwrite()) {
            newTemp = digit
        } else {
            newTemp = temp + '' + digit;
        }


        if (length === 0) {
            equation.push(newTemp);
        } else if (length === 1) {
            equation[0] = newTemp;
        } else if (length === 2) {
            equation.push(newTemp);
        } else {
            equation[2] = newTemp;
        }

        console.log("equation:", equation, "temp", temp)
        this.setState({ temp: newTemp, equation })
    }
    tryCalculate = symbol => {
        let { equation, temp, didCalculate } = this.state;
        const length = equation.length;

        let results = '';
        if (symbol !== "=") {
            switch (length) {
                case 0:
                    equation.push('0')
                    equation.push(symbol)
                    didCalculate = false;

                    break;
                case 1:
                    equation.push(symbol)
                    didCalculate = false;

                    break;
                case 2:
                    equation[1] = symbol;
                    didCalculate = false;

                    break;
                case 3:
                    results = this.calculate();
                    temp = results;
                    equation = [];
                    equation.push(results);
                    equation.push(symbol);
                    didCalculate = true;
                    break;
                default:
                    break;
            }
            // if symbol is '='
        } else {
            switch (length) {
                case 0:
                    //do nothing
                    didCalculate = false;
                    break;
                case 1:
                    //do nothing
                    didCalculate = false;

                    break;
                case 2:
                    results = this.calculate();
                    temp = results
                    equation = [];
                    equation.push(results)
                    didCalculate = true;

                    // equation.push(symbol);
                    break;
                case 3:
                    results = this.calculate();
                    temp = results
                    equation = [];
                    equation.push(results)
                    didCalculate = true;

                    // equation.push(symbol);
                    break;
                default:
                    break;
            }
        }

        this.setState({ equation, temp, results, didCalculate })
    }
    calculate = () => {

        let { equation, temp } = this.state;
        let operator = equation[1];
        const length = equation.length;
        let left = Number(equation[0]);
        let right = 0;

        if (length === 2) {
            right = left
        } else {
            right = Number(equation[2])
        }

        let result = 0;

        console.log(
            "left:", left,
            "right: ", right
        )
        switch (operator) {
            case '+':
                result = left + right;
                break;
            case '*':
                result = left * right;
                break;
            case '/':
                result = left / right;
                break;
            default:
                break;
        }
        console.log("result: ", result, typeof result)

        return result.toFixed(2).toString();
    }

    _shouldOverwrite = () => {
        const { equation, temp, didCalculate } = this.state;
        let overwrite = false;
        const length = equation.length;

        //if first left digit.
        if ((length === 0 || length === 1) && temp === '0') {
            overwrite = true

            //if it's first right digit.
        } else if (length === 2) {
            overwrite = true
        } else if (didCalculate) {
            overwrite = true;
            this.setState({ didCalculate: !didCalculate })
        }

        return overwrite;
    }
    render() {
        let { equation, temp } = this.state;

        return (
            !this.props.apps['Calculator'].collapsed ? (
                <div className="single-app-main">
                    <div className="wrapper">
                        <div className="calculator">

                            <Results
                                final={temp}
                                equation={equation}
                            />
                            <KeysBox
                                onPress={this.handlePress}
                            />
                        </div>
                    </div>
                </div>
            ) : null
        );
    }
}
const mapStateToProps = state => {
    return {
        apps: state.apps
    }
}
export default connect(mapStateToProps, {})(Calculator);
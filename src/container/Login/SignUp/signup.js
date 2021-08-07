import React, { Component } from 'react';
import Input from '../../../components/Input/input';
import './signup.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Logo from '../../../assets/28e80045-0494-4e87-b415-7fb7f4b8fb70_200x200.png';

class Login extends Component {
    state = {
        Form: {
            fname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placehold: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                    isName: true,
                    error: ""
                },
                valid: false,
                touched: false,
                column: "6"
            },
            lname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placehold: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
                    isName: true,
                    error: ""
                },
                valid: false,
                touched: false,
                column: "6"
            },
            cnumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placehold: 'Phone Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true,
                    error: ""
                },
                valid: false,
                touched: false,
                column: "6"
            },

            country: {
                elementType: 'select',
                elementConfig: {},
                value: '',
                validation: {},
                valid: true,
                column: "6"
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placehold: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    error: ""
                },
                valid: false,
                touched: false,
                column: "12"
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placehold: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 25,
                    isPass: true,
                    error: ""
                },
                valid: false,
                touched: false,
                column: "12"
            },

        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.Form) {
            formData[formElementIdentifier] = this.state.Form[formElementIdentifier].value;
        }
        console.log(formData);
        axios.post('http://localhost:5000/sn', JSON.stringify(formData))
            .then(response => {
                // this.setState({ loading: false });
                // this.props.history.push('/');
                this.props.history.push('/sn/choice', formData);
                console.log(this.props);
            })
            .catch(error => {
                // this.setState({ loading: false });
                console.log(error, error.message);
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }


        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
            if (!isValid) {
                if (rules.minLength === rules.maxLength) {
                    rules.error = "Invalid Length"
                }
                else {
                    rules.error = "Your password must contain between " + rules.minLength + " and " + rules.maxLength + " characters."
                }

            }
            else {
                if (rules.isPass) {
                    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/;
                    isValid = pattern.test(value) && isValid
                    if (!isValid) {
                        rules.error = "Lowercase, Uppercase, Number & Special character required"
                    }
                    else rules.error = ""
                }

            }
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
            if (!isValid) {
                rules.error = "Incorrect Email"
            }
            else rules.error = ""
        }

        if (rules.isName) {
            const pattern = /^[A-Za-z.]{3,30}$/;
            isValid = pattern.test(value) && isValid
            if (!isValid) {
                rules.error = "Only Alphabet Allowed"
            }
            else rules.error = ""
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
            if (!isValid) {
                rules.error = "Only Numbers Allowed"
            }
            else rules.error = ""
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.Form
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ Form: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.Form) {
            formElementsArray.push({
                id: key,
                config: this.state.Form[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler} className="row">
                {formElementsArray.map(formElement => (
                    <Input column={"col-" + formElement.config.column}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        placeholder={formElement.config.elementConfig.placehold}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        errormsg={formElement.config.validation.error}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button className="col-11 submit px-0 ml-3 mb-5" type="submit" disabled={!this.state.formIsValid}>Create An Account</Button>
            </form>
        );
        // if ( this.state.loading ) {
        //     form = <Spinner />;
        // }
        return (
            <div className="loginpage">
                <div className="lg">
                    <img src={Logo} alt="brand" className="mt-3 pl-md-4 brand" />

                    <div className="row lgn">
                        <div className="col-xl-3 col-lg-4 col-md-6 loginform pb-4">
                            <h3 className="text-white pt-4">Sign Up</h3>
                            {form}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
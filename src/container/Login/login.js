import React, { Component } from 'react';
import Input from '../../components/Input/input';
import './SignUp/signup.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Logo from '../../assets/28e80045-0494-4e87-b415-7fb7f4b8fb70_200x200.png';

class Login extends Component {
    state = {
        Form: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placehold: 'Your E-Mail'
                },
                value: '',
                column: "12"
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placehold: 'Password'
                },
                value: '',
                column: "12"
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.Form) {
            formData[formElementIdentifier] = this.state.Form[formElementIdentifier].value;
        }
        // this.props.history.push('/main');
        axios.post('http://localhost:5000/ln', JSON.stringify(formData))
            .then(response => {
                // this.setState({ loading: false });
                // this.props.history.push('/main');
                localStorage.setItem(
                    'userData',
                    JSON.stringify({
                        user: response.data.user,
                        token: response.data.token
                        // expiration: tokenExpirationDate.toISOString()
                    }));
                console.log(response.data);
                this.props.submitted();
            })
            .catch(error => {
                // this.setState({ loading: false });
                console.log(error);
            });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.Form
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ Form: updatedOrderForm });
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
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button className="col-11 submit px-0 ml-3 mb-5" type="submit" >Login</Button>
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
                            <h3 className="text-white pt-4">Login</h3>
                            {form}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
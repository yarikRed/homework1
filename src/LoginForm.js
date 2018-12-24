import React, {Component} from "react";
import "./LoginForm.css";


class LoginForm extends Component {
    state = {
        isOpen: false
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };


    render() {

        const openLoginForm = (<div onClick={this.handleClick}><a href="#">Login for editing</a></div>);
        const loginForm = (this.state.isOpen && <div className="loginForm center">

                                        <form name="signIn">
                <label>
                    User name: <input type="text" name="name" />
                </label>
                <label>
                    Password: <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>

                            </div>);

        return (
            <div>
            {openLoginForm}
            {loginForm}

            </div>
        )
    }
}
export default LoginForm;
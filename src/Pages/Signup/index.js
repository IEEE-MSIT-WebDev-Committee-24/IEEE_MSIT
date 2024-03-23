import React from 'react'
import './style.css';
const SignUpPage = () => {
    return (
        <>
            <div class="container">
                <form id="form" class="form">
                    <h2>Registeration</h2>
                    <div class="formControl">
                        <label for="username">Username</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                        <small>error message</small>
                    </div>
                    <div class="formControl">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Enter your email" />
                        <small>error message</small>
                    </div>
                    <div class="formControl">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                        <small>error message</small>
                    </div>
                    <div class="formControl">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Enter Password again" />
                        <small>error message</small>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default SignUpPage;
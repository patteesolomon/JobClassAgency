import React from 'react';

export const login = () => {
    return (
        <div>
            <title>
                JCA
            </title>
            <body>
                <div className='container'>
                    <form action='POST' className='form' id='login'>
                        <h1 className='form_title'>Login</h1>
                        <div className='form_mess form_mess_error'>
                            Incorrect Username/Password Combo
                            </div>
                        <div className='form_input-group'>
                            <input type='password' className='form_input' autoFocus placeholder='Password'></input>
                            <div className='form_input-error-message'>
                                You've made an error
                                </div>
                        </div>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </body>
        </div>
    )
}
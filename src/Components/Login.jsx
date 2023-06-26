import React from 'react'

function Login() {
    const handleSubmit = (e) => {
        e.preventDefualt();
    }
    return (
        <>
          <form >
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Enter Your Email address</label>
                        <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Enter Your Password</label>
                        <input type="password" className="form-control" id="password" name='password' placeholder="**********" />
                    </div >
                </div>
                <div className="babo">
                    <button className=" container btn btn-success">Login</button>
                </div>
            </form>
       
        </>
    )
}

export default Login

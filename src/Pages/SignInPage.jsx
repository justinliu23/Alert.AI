import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './signpages.css'

export default function SignInPage() {
    return (
        <div>
            <Navbar />
            <section className="signin">
			<div className = "centered">
				<h1>Sign Up</h1>
				<form>
					<input type = "username" placeholder="Username" required>
					<input type = "password" placeholder="Password" required>
                    <label className="container">Are you a teacher?
                          <input type="checkbox" checked="checked">
                          <span className="checkmark"></span>
                        </label>
					<div>
						<button>Sign up</button>
						<a href = "/sign-in">Login.</a>
					</div>
				</form>
			    </div>
		    </section>
        </div>
    )
}

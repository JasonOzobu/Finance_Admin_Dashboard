import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign-up.css';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	//handle the sign up submitting action
	const handleSignUp = async (e) => {
		e.preventDefault();

		const res = await fetch('https://chidubem-be.onrender.com/api/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, email, password }),
		});

		const data = await res.json();
		console.log(data);

		try {
			setLoading(true);

			if (res.ok) {
				alert('Signup successful!');
				navigate('/'); // go to dashboard
			} else {
				alert(data.message || 'Signup failed');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<div className="login">
				<div className="logincard">
					<h2>Sign Up</h2>

					<form onSubmit={handleSignUp}>
						<div className="logincard_inputfield">
							<label>Username</label>
							<input
								type="text"
								placeholder="John"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div className="logincard_inputfield">
							<label>Email </label>
							<input
								type="email"
								placeholder="johndoe@gmail.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="logincard_inputfield">
							<label>Password</label>
							<input
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button className="btn" type="submit">
							{loading ? 'Signing...' : 'Sign Up'}
						</button>
					</form>
					<p>
						Already have an acouunt?{' '}
						<span onClick={() => navigate('/sign-in')}>Sign In</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

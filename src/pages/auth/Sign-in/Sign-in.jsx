import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign-in.css';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	//handle the login submitting action
	const handleLogin = async (e) => {
		e.preventDefault();

		const res = await fetch('https://chidubem-be.onrender.com/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});

		const data = await res.json();
		try {
			setLoading(true);

			if (res.ok && data.token) {
				localStorage.setItem('token', data.token); // save JWT
				navigate('/');
			} else {
				alert(data.message || 'Login failed');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="login">
			<div className="logincard">
				<h2>Sign In</h2>

				<form onSubmit={handleLogin}>
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
						{loading ? 'Signing...' : 'Sign In'}
					</button>
				</form>
				<p>
					Don't have an acouunt?{' '}
					<span onClick={() => navigate('/sign-up')}>Create One</span>
				</p>
			</div>
		</div>
	);
};

export default SignIn;

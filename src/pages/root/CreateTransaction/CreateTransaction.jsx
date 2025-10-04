import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateTransaction.css';
import Sidebar from '../../../components/Sidebar/Sidebar';

const CreateTransaction = () => {
	// const [transaction, setTransaction] = useState({});
	const [user, setUser] = useState('');
	const [descrition, setDescrition] = useState('');
	const [amount, setAmount] = useState(null);
	const navigate = useNavigate();

	const createTransaction = async (e) => {
		const token = localStorage.getItem('token');
		e?.preventDefault();

		const res = await fetch('https://chidubem-be.onrender.com/api/transactions/send', {
			method: 'POST',
			headers: { 
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json' },
			body: JSON.stringify({ receiverUsername:user, description:descrition, amount }),
		});
		const data = await res.json();
		console.log(data);

		try {
			if (data) {
				//do something
			} else {
				console.log('failed to create user');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='create-container'>
			<Sidebar />
		<div className="create">
			<h2>Create Transaction</h2>
			<div className="createbox">
				<form onSubmit={createTransaction}>
					<div className="createbox_inputfield">
						<label>Username</label>
						<input
							type="text"
							placeholder="Johndoe"
							value={user}
							onChange={(e) => setUser(e.target.value)}
						/>
					</div>

					<div className="createbox_inputfield">
						<label>Amount ' $ ' </label>
						<input
							type="number"
							placeholder="250"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>

					<div className="createbox_inputfield">
						<label>Description</label>
						<input
							type="text"
							required
							value={descrition}
							placeholder="Rent payment "
							onChange={(e) => setDescrition(e.target.value)}
						/>
					</div>

					<button type="submit">
						Create
					</button>
				</form>
			</div>
			<Link
				to={'/transactions'}
				style={{
					color: 'red',
					cursor: 'pointer',
					position: 'absolute',
					top: ' 40px',
					left: '50px',
					textDecoration: 'none',
				}}>
				Go Back
			</Link>
		</div>
		</div>
	);
};

export default CreateTransaction;

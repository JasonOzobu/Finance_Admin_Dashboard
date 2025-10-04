import { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Transactions.css';

const Transactions = () => {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const fetchTransactions = async () => {
			const token = localStorage.getItem('token');

			const res = await fetch('https://chidubem-be.onrender.com/api/transactions', {
				headers: { Authorization: `Bearer ${token}` },
			});
			const data = await res.json();

			if (res.ok) {
				setTransactions(data);
				console.log(data);
			} else {
				console.error(data.message);
			}
		};

		fetchTransactions();
	}, []);

	return (
		<div className="transactions">
			<Sidebar />
			<div className="transactions_layout">
				<div>Transactions: </div>

				<div className="trans_content">
					{!transactions.data ? (
						<p className="text">No transaction, kindly create one</p>
					) : (
						<div>
							{transactions?.data?.map((transaction) => (
								<span>{transaction}</span>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Transactions;

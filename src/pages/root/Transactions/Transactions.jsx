import { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Transactions.css';
import { useNavigate } from 'react-router-dom';

const Transactions = () => {
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const { toggleMenu, toggleSidebar } = useContext(globalContext);

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
				<div>Transactions </div>

				<div className="trans_content">
					{transactions?.data?.length === 0 ? (
						<p className="text">
							No transaction, kindly{' '}
							<span
								style={{ color: 'blue', cursor: 'pointer' }}
								onClick={() => navigate('/create')}>
								create one
							</span>
						</p>
					) : (
						<div>
							{transactions?.data?.map((transaction) => (
								<span>{transaction.amount}</span>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Transactions;

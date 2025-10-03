import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/root/Dashboard/Dashboard';
import Transactions from './pages/root/Transactions/Transactions';
import CreateTransaction from './pages/root/CreateTransaction/CreateTransaction';
import SignIn from './pages/auth/Sign-in/Sign-in';
import SignUp from './pages/auth/Sign-up/Sign-up';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/transactions"
					element={
						<ProtectedRoute>
							<Transactions />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/create"
					element={
						<ProtectedRoute>
							<CreateTransaction />
						</ProtectedRoute>
					}
				/>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default App;

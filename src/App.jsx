import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/root/Dashboard/Dashboard';
import Transactions from './pages/root/Transactions/Transactions';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './pages/auth/Sign-in/Sign-in';
import SignUp from './pages/auth/Sign-up/Sign-up';
import HomePage from './pages/root/HomePage/HomePage';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/dashboard"
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
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default App;

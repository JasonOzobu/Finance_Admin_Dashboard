import Sidebar from '../../../components/Sidebar/Sidebar';
import menu from '../../../assets/menu_icon.png';
import { globalContext } from '../../../context/GlobalState';
import { useContext } from 'react';
import './Dashboard.css';

const Dashboard = () => {
	const { toggleMenu, toggleSidebar } = useContext(globalContext);

	return (
		<div className="dashboard">
			<Sidebar />

			<div className="dashboard_layout">
				{!toggleMenu && (
					<div className="dashboard_menu">
						<img src={menu} alt="" onClick={toggleSidebar} />
					</div>
				)}

				<div className="dashboard_header">
					<h1>Dashboard</h1>
					<p>Here's your analysis details</p>
				</div>

				<div className="dashboard_charts">
					<div className="dashboard_charts-details">Dashboard</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

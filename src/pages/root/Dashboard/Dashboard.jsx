import Sidebar from '../../../components/Sidebar/Sidebar';
import zap from '../../../assets/zap.svg';
import arrow from '../../../assets/arrow_icon.png';
import menu from '../../../assets/menu_icon.png';
import { globalContext } from '../../../context/GlobalState';
import { useContext } from 'react';
import './Dashboard.css';

const Dashboard = () => {
	const { toggleMenu, toggleSidebar } = useContext(globalContext);

	const chartDetails = [
		{
			id: '1',
			title: 'Total Sales',
			amount: '$120.784.02',
			percentage: '15.5%',
			dailyRevenue: '+$50.052 today',
			inProfit: true,
		},
		{
			id: '2',
			title: 'Total Orders',
			amount: '28.834',
			percentage: '20.1%',
			dailyRevenue: '+2.67 today',
			inProfit: true,
		},
		{
			id: '3',
			title: 'Visitor',
			amount: '18.980',
			percentage: '8.5%',
			dailyRevenue: '-87 today',
			inProfit: false,
		},
		{
			id: '4',
			title: 'Refunded',
			amount: '2.634',
			percentage: '13%',
			dailyRevenue: '+34 today',
			inProfit: true,
		},
	];

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
					<div className="dashboard_charts-details">
						{chartDetails.map((chart) => (
							<div key={chart.id} className="dashboard_chartbox">
								<div className="dashboard_chartbox-title">
									<img src={zap} alt="" />
									<p>{chart.title}</p>
								</div>

								<div className="dashboard_chartbox-amount">{chart.amount}</div>

								<div className="dashboard_chartbox-percentage">
									<p className={`${chart.inProfit ? 'green' : 'red'}`}>
										{chart.percentage}
									</p>
									<p>{chart.dailyRevenue}</p>
								</div>

								<div className="dashboard_chartbox-report">
									<p>View Report</p>
									<img src={arrow} className="arrow" alt="" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

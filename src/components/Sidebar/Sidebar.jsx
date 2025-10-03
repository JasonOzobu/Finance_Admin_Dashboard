import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/xora.svg';
import cancel from '../../assets/close.svg';
import settings from '../../assets/setting_icon.png';
import help from '../../assets/question_icon.png';
import { useContext } from 'react';
import { globalContext } from '../../context/GlobalState';
import './Sidebar.css';

const Sidebar = () => {
	const pathname = useLocation();
	const navigate = useNavigate();

	const { toggleMenu, toggleSidebar } = useContext(globalContext);

	const navLinks = [
		{ id: 'dashboard', label: 'Dashboard', url: '/' },
		{ id: 'transactions', label: 'Transactions', url: '/transactions' },
	];

	const logout = () => {
		try {
			localStorage.removeItem('token');
			navigate('/sign-in');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{toggleMenu ? (
				<div className="sidebar">
					<div className="sidebar_top">
						<Link to={'/'} className="heading">
							<img src={logo} className="logo" alt="logo" />
							<img
								src={cancel}
								alt="cancel"
								onClick={toggleSidebar}
								className="cancel"
							/>
						</Link>

						<ul>
							{navLinks.map((item) => {
								return (
									<Link
										to={`${item.url}`}
										key={item.id}
										className={`link ${
											item.url === pathname.hash ? 'active' : ''
										}`}>
										<p>{item.label}</p>
									</Link>
								);
							})}
						</ul>
					</div>

					<div className="sidebar_bottom">
						<div className="sidebar_icons">
							<img src={settings} alt="settings" />
							<button onClick={logout}>Logout</button>
						</div>

						<div className="sidebar_icons">
							<img src={help} alt="help" />
							<p>Help</p>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Sidebar;

import { slide as Menu } from 'react-burger-menu';
import HomeIcon from '@material-ui/icons/Home';
import './Drawer.css';

const Drawer = (params) => {
	return (
		<div>
			<Menu disableAutoFocus={true} burgerBarClassName={"burger__btn-focus"}>
				<a className="menu-item" href="/">
					<span className="menu-icons">
						<HomeIcon />
					</span>
					Home
				</a>
				<a className="menu-item" href="/about">
					<span className="menu-icons">
						<HomeIcon />
					</span>
					About
				</a>
				<a className="menu-item" href="/contact">
					<span className="menu-icons">
						<HomeIcon />
					</span>
					Contact
				</a>
			</Menu>
		</div>
	);
};

export default Drawer;

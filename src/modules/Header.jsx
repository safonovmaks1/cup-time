export const Header = () => (
	<header className="header">
		<div className="container header__container">
			<a className="header__logo-link" href="/">
				<img className="header__logo" src="image/logo.svg" alt="Logo Cup Time" />
			</a>

			<nav className="header__nav">
				<ul className="header__menu">
					<li className="header__menu-item">
						<a className="header__menu-link" href="#">
							Чай
						</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="#">
							Кофе
						</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="#">
							Чайники
						</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="#">
							Турки
						</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="#">
							Прочее
						</a>
					</li>
				</ul>
			</nav>

			<a className="header__cart-link" href="cart.html">
				6
			</a>

			<a className="header__burger">
				<img src="image/burger.png" alt="Burger Menu" className="header__burger" />
			</a>
		</div>
	</header>
);

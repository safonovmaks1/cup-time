import { Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';
import { Order } from './Order';
import { Products } from './Products';
import { Promo } from './Promo';

export const Main = () => (
	<main className="main">
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Promo />
						<Products />
					</>
				}
			></Route>
			<Route
				path="/cart"
				element={
					<>
						<Cart />
						<Order />
					</>
				}
			></Route>
		</Routes>
	</main>
);

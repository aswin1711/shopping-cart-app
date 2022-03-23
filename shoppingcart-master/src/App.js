import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from 'react';
import { MyNavbar } from './shopping/Navbar';
import { Footer } from './shopping/Footer';
import { Header } from './shopping/Header';
import { Shoppingcard } from './shopping/ShoppingCard';
import { Product } from './shopping/Product';

function App() {
	const [cart, setCart] = useState(0);
	const productList = Product();
	const [product] = useState(productList);
	return (
		<div className="App">
			<MyNavbar cart={cart} />
			<Header />
			<section className="shopping-section">
				{/* Traversing through product details to print the details  */}

				{product.map(({ name, img }, index) => (
					<Shoppingcard cart={cart} setCart={setCart} name={name} img={img} key={index} />
				))}
			</section>

			<Footer />
		</div>
	);
}

export default App;

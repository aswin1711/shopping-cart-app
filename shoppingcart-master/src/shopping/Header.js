import { useEffect, useState } from 'react';

export function Header() {
	// imgData stores promotional ad images
	const imgData = [
		'https://m.media-amazon.com/images/I/51o1FkuFv-L._SX3000_.jpg',
		'https://m.media-amazon.com/images/I/618AjZ7dWxL._SX3000_.jpg',
		'https://m.media-amazon.com/images/I/71YWqqFHG3L._SX3000_.jpg',
	];

	// To set the index value for slider
	const [index, setIndex] = useState(0);

	// Next func to move the image
	const next = () => {
		setIndex((i) => (i + 1) % imgData.length);
	};

	// Use effect to call the interval timer and slide the image
	useEffect(() => {
		const timer = setInterval(() => {
			next();
		}, 5000);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<header className="header">
			<div className="header-content">
				<div className="slider-container">
					<div className="img-container">
						<img className="image" alt="mobiles" src={imgData[index]} />
					</div>
				</div>
			</div>
		</header>
	);
}

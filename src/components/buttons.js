import React from 'react';

function Button(item) {
	return (
		<button
			className="card-button"
			value={item.value.id}
			onClick={() => console.log(item.value.id)}
		>
			Add to Deck{' '}
		</button>
	);
}

export default Button;

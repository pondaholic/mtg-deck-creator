import React from 'react';
import Button from './buttons';

export default function CreateCard(item) {
	return (
		<ul key={item.id}>
			<li key={item.id} className="cardImage">
				{item.imageUrl ? (
					<img src={item.imageUrl}></img>
				) : (
					<div className="card">{item.name}</div>
				)}
				<Button value={item} />
			</li>
		</ul>
	);
}

import '../styles/card.css';

export default function Card({ id, name, image, handleCliced }) {
	return (
		<button type="button" onClick={() => handleCliced(id)} className="card" aria-label={`Choose ${name}`}>
			<div className="card_image_container">
				<img src={image} alt="" />
			</div>
			<p className="name_pkm">{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
		</button>
	)
}
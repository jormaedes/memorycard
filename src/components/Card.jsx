export default function Card({ name, image }) {
	return (
		<div className="card">
			<div className="card_image_container">
				<img src={image} alt={name} />
			</div>
			<p className="name_pkm">{name}</p>
		</div>
	)
}
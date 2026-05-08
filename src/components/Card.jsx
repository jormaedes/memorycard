export default function Card({ name, image, handleCliced }) {
	return (
		<div onClick={handleCliced} className="card" key={name}>
			<div className="card_image_container">
				<img src={image} alt={name} />
			</div>
			<p className="name_pkm">{name}</p>
		</div>
	)
}
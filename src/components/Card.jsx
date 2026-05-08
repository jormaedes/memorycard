export default function Card({ id, name, image, handleCliced }) {
	return (
		<div onClick={() => handleCliced(id)} className="card">
			<div className="card_image_container">
				<img src={image} alt={name} />
			</div>
			<p className="name_pkm">{name}</p>
		</div>
	)
}
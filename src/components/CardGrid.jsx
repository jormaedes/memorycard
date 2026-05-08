import Card from "./Card";
import '../styles/cardgrid.css';


export default function CardGrid({listPkms, handleCliced})
{
	return (
		<main className="card_grid container">
			{
				listPkms.map(e => 
					<Card key={e.id} id={e.id} name={e.name} handleCliced={handleCliced} image={e.image}/>
				)
			}
		</main>
	)
}
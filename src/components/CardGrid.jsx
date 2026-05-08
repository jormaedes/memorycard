import Card from "./Card"

export default function CardGrid(listPkms)
{
	return (
		<main className="card_grid">
			{
				listPkms.map(pkm=>{
					<Card name={pkm.name} image={pkm.sprites.other['official-artwork'].front_default}/>
				})
			}
		</main>
	)
}
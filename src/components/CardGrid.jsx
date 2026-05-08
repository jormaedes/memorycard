import Card from "./Card"

export default function CardGrid({listPkms, handleCliced})
{
	return (
		<main className="card_grid">
			{
				listPkms.map(pkm=>{
					<Card handleCliced={handleCliced} name={pkm._name} image={pkm.sprites.other['official-artwork'].front_default}/>
				})
			}
		</main>
	)
}
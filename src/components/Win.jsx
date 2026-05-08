export default function Win({ handlePlayAgain }) {
	return (
		<section className="win_container">
			<div className="win_content">
				<div className="win_text">
					<p>You won!</p>
					<p>You have an enviable memory.</p>
				</div>
				<button onClick={handlePlayAgain}>Play again</button>
			</div>

		</section>
	)
}
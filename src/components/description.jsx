import './description.css';  // Importing the CSS file

export default function Description() {
  return (
    <div className="description-container">
      <h2>Lottery Game</h2>
      <p>
        A simple React-based lottery game where users generate random tickets. The goal is to win by matching numbers that sum up to <strong>15</strong>. 
      </p>
      <p>
        Winning triggers a congratulatory message with an option to restart the game.
      </p>
    </div>
  );
}

export default function RatingSlider({ value, onChange }) {
      return (
        <div className="rating-slider">
          <input
            type="range"
            min="1"
            max="10"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
          <span>{value}</span>
        </div>
      )
    }

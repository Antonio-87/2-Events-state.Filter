export default function Toolbar(props) {
    const { filters, selected, onSelectedFilter } = props;
    return (
        <div className="buttons">
            {filters.map((filter, i) => (
                <button
                    key={i}
                    onClick={() => onSelectedFilter(filter)}
                    className={filter === selected ? "active" : ""}
                    >
                        {filter}
                    </button>
            ))}
        </div>
    );
}
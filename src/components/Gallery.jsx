import "./Gallery.component.scss";


export function Gallery({ items, children }) {
    return (
        <div className="gallery-list">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
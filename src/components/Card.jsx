import "./Card.component.scss"


export function Card({ title, content, child }) {
    return <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-content">{content}</div>
        {child}
    </div>
}
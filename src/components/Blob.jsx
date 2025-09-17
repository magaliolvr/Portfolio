import "./Blob.component.scss"

export function Blob({ type, image, color = "#746f6f", width = "100vh", height = "100vh" }) {
    const className = type === "image" ? "blob blob-image" : "blob blob-color";
    //Se o type for "image", usa "blob blob-image", Se o type for "color", usa "blob blob-color"

    const style =

        type === "image"
            ? { backgroundImage: `url(${image})`, width, height }
            : { background: color, width, height };
    //   Cria um objeto de estilo inline que será aplicado ao div. Se for imagem, define backgroundImage usando a URL passada. Se for cor, define background usando a cor passada

    return <div className={className} style={style}></div>;
}


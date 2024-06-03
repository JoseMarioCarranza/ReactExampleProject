import './card.css'

export default function Card(props) {
    return (
        <>
            <div className="container-card">
                <img src="https://www.sierralagoresort.com/blog/wp-content/uploads/2021/08/MicrosoftTeams-image-5.jpg" alt="" />
                <h1>{props.titulo}</h1>
                <p className='container-card-subtitle'>{props.subtitulo}</p>
                <p><strong>{props.precio}</strong></p>
            </div>
        </>
    )
}
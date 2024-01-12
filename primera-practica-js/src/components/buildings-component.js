import * as React from "react"

let edificios = [{
    nombre: "Mi casa",
    imagen: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
    antecedentes: "Antes vivia en una madriguera",
    arquitectura: "rocambolesca",
    epoca: "espacial",
    coordenadas: {
        lat: "aqui",
        long: "aca"
    }
}]

const BuildingComponent = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <div>
            <div>
                <h2>{edificios[index].nombre}</h2>
                <img src={edificios[index].imagen} />
                <p>Antecedentes: {edificios[index].antecedentes}</p>
                <p> Es una construcción con arquitectura {edificios[index].arquitectura} construido en el periodo {edificios[index].epoca}</p>
                <p>Esta situado en las coordenadas {edificios[index].coordenadas.lat}, {edificios[index].coordenadas.long}</p>
            </div>
        </div>
    )
}

export default BuildingComponent
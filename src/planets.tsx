type PlanetProps ={
    name: string,
    species: string
    heightofspecies: number
    
}

export function PlanetDetails(props: PlanetProps){
    const {name, species, heightofspecies} = props; 

    return <>

        <h4>{name}</h4>
        <dl>
            {heightofspecies > 7 ? <>
                <dt>Height</dt>
                <dd>{heightofspecies}</dd>

                <dt>Home of</dt>
                <dd>{species}</dd>
                </>:<p>Navis</p>}
        </dl>
    </>

}
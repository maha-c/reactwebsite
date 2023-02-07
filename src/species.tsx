type SpeciesProps = {
    type: string,
    species:string,  
    modeOfTransportation: string,
    color: string,
   
    
}

export function SpeciesInfo(props: SpeciesProps ){

    return <>
        <h1>{props.type}</h1>
        <table border={2} bgcolor='green'>
            <thead>
                <tr><th>name</th><th>species</th><th>modeOfTransportation</th><th>color</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.type}</td>
                    <td>{props.species}</td>
                    <td>{props.modeOfTransportation}</td>
                    <td>{props.color}</td>
                    
                
                </tr>
            </tbody>
        </table>
    </>

}
export function HybridName(){

    const name: string[] = ["Jake Sully", "Norm Spellman","Grace Augustine","Miles Quaritch"];

    return <ul>
        {name.map(n => <li style={{ backgroundColor: "green",  width: '150px', height: '40px' }}>{n}</li>)}

    </ul>
}
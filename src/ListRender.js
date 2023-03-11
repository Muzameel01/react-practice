// const person = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];
import {getImageUrl} from "./utils";
import { person } from "./data";

export default function ListRender(){
    // const chemist = person.filter((p)=>p.profession==="chemist");
    // const listItem = person.map((person)=>(<li key={person.id}>{person.name}:{person.profession}</li>));
    const listItem = person.map(person =>
        <li>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );
    return(
        <ul>
           {listItem}</ul>  
//         <ul>
//             <li>Creola Katherine Johnson: mathematician</li>
//   <li>Mario José Molina-Pasquel Henríquez: chemist</li>
//   <li>Mohammad Abdus Salam: physicist</li>
//   <li>Percy Lavon Julian: chemist</li>
//   <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
//         </ul>
    )
}
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const quimicos = people.filter(person =>
    person.profession === 'químico'
  );

  const elresto = people.filter(person =>
    person.profession !== 'químico'
  );

   return (
    <article>
      <h1>Científicos</h1>
      <h2>Químicos</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Todos los demás</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

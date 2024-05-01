import Card from '../Card/Card';
import './Main.scss'; // Import CSS for styling



interface Apartment {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
  latitude: number;
  longitude: number;
}

function CardHolder({ data }: { data: Apartment[] }) {
  console.log(data)
  return (
    <div className="card__holder">
      {!data || data.length === 0 ? (
        <h3 className="no-apartments-message">No apartments available</h3>
      ) : (
        data.map((apartment) => (
          <Card
            key={apartment.id}
            id={apartment.id}
            name={apartment.name}
            description={apartment.description}
            price={apartment.price}
            photo={apartment.photo}
          />
        ))
      )}
    </div>
  );
}

export default CardHolder;
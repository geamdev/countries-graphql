import { CountryFragment } from '@/services/graphql';

interface ItemProps {
  country: CountryFragment;
}

const Item = ({ country }: ItemProps) => {
  return (
    <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-start gap-3 shadow-md">
      <h2 className="text-4xl font-black text-center text-gray-800">
        {country.name} {country.emoji}
      </h2>

      <div className="flex flex-col">
        <p className="text-gray-600">
          <span className="font-bold text-gray-800">Capital: </span>
          {country.capital ?? '-'}
        </p>

        <p className="text-gray-800">
          <span className="font-bold text-gray-800">Currency: </span>
          {country.currency ?? '-'}
        </p>

        <p className="text-gray-800">
          <span className="font-bold text-gray-800">Continent: </span>
          {country.continent.name + ' (' + country.continent.code + ')' ?? '-'}
        </p>

        <p className="text-gray-800">
          <span className="font-bold text-gray-800">Languages: </span>
          {country.languages.map((language) => language.name).join(', ') ?? '-'}
        </p>
      </div>
    </div>
  );
};

export default Item;

import { BiSearchAlt } from 'react-icons/bi';
interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}
const Search = (props: SearchProps) => {
  return (
    <div className="flex items-center h-10 w-fit rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none">
      <input
        role="search"
        autoComplete="off"
        onChange={props.onChange}
        type="text"
        className="focus:outline-none"
        placeholder={props.placeholder ?? 'Search'}
        defaultValue={props.value ?? ''}
      />
      <BiSearchAlt color="gray" />
    </div>
  );
};

export default Search;

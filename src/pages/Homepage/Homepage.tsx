import { Filters, List } from './components';
import { WithLayout } from '@/hocs';

const headers: string[] = ['Code', 'Name', 'Continent', 'Currency', 'Actions'];

export const Homepage = () => {
  return (
    <div className="mx-4">
      <Filters />
      <List />
    </div>
  );
};

export default WithLayout(Homepage);

import { Loading } from '@/components';
import { WithLayout } from '@/hocs';
import { useGetCountryQuery } from '@/services/graphql';
import { Link, Redirect, useRoute } from 'wouter';
import { Item } from './components';
import { FaChevronLeft } from 'react-icons/fa';

const Country = () => {
  const [match, params] = useRoute('/country/:code');

  const { data, loading } = useGetCountryQuery({
    variables: { code: params?.code ?? '' }
  });

  return (
    <div className="mt-4 max-w-[1228px] mx-auto">
      <Link href="/">
        <a className="flex items-center gap-2 text-[#0D162F] hover:text-[#868a97] duration-300 my-2">
          <FaChevronLeft />
          <span>Back to home</span>
        </a>
      </Link>
      {loading && <Loading />}
      {!loading && data?.country && <Item country={data.country} />}
      {!loading && !data?.country && <Redirect to="/" />}
    </div>
  );
};
export default WithLayout(Country);

import { Link } from 'wouter';
import { NavRoute } from '@/models';

const staticRoutes: NavRoute[] = [
  {
    link: 'https://geampiere.vercel.app',
    name: 'Portfolio'
  },
  {
    link: 'https://github.com/geamdev',
    name: 'Github'
  }
];

const Nav = () => {
  const renderNavItem = (route: NavRoute, idRoute: number) => (
    <li key={idRoute}>
      <a href={route.link} target="_blank" role="links" className="flex gap-2 items-center hover:text-[#868a97]">
        {route.name}
      </a>
    </li>
  );

  return (
    <header className="py-4 text-[#0D162F] font-medium bg-transparent mx-4">
      <nav
        className="max-w-[1228px] rounded-3xl mx-auto bg-white py-4 px-8"
        style={{
          boxShadow:
            '0 0 1px rgba(22, 19, 74, .5), 0 -2px rgba(22, 19, 74, .08), 0 2px 2px rgba(22, 19, 74, .05), 0 9px 13px rgba(13, 22, 47, .1)'
        }}
      >
        <ul className="flex justify-between items-center">
          <li className="cursor-pointer">
            <Link href="/">
              <span className="font-bold">RCOUNTRIESG</span>
            </Link>
          </li>
          <div className="flex gap-3">{staticRoutes.map(renderNavItem)}</div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

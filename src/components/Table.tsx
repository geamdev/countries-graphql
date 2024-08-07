interface TableProps {
  renderHeaders: JSX.Element[];
  renderRows: JSX.Element[];
  loading: boolean;
  onLoading: JSX.Element;
  empty: boolean;
  onEmpty: JSX.Element;
}

export const Table = ({ renderHeaders, renderRows, loading, onLoading, empty, onEmpty }: TableProps) => {
  return (
    <>
      <div className="overflow-auto h-[calc(100vh_-_180px)] border rounded-lg max-w-[1228px] mx-auto">
        <table className="w-full caption-bottom text-sm" role={'table'}>
          <thead className="[&_tr]:border-b bg-[#F1F7F9]">
            <tr>{renderHeaders}</tr>
          </thead>
          {!loading && <tbody className="text-sm divide-y divide-indigo-100">{renderRows}</tbody>}
        </table>
        {empty && !loading && <div className="w-full h-full flex justify-center my-10 font-black">{onEmpty}</div>}
        {loading && <div className="w-full h-full flex items-center justify-center">{onLoading}</div>}
      </div>
    </>
  );
};

export const Row = ({ children, onClick }: { children: JSX.Element[]; onClick?: () => void }) => {
  return (
    <tr
      role={'table-row'}
      onClick={onClick}
      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted  hover:bg-gray-50 cursor-pointer"
    >
      {children}
    </tr>
  );
};

export const Header = ({ children }: { children: string }) => {
  return (
    <th role={'table-header'} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
      {children}
    </th>
  );
};

export const Cell = ({ children }: { children: string | JSX.Element }) => {
  return <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{children}</td>;
};

export default {
  Table,
  Row,
  Header,
  Cell
};

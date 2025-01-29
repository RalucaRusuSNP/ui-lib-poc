import { Column } from '@tanstack/react-table';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export interface TableHeadSortingProps
  extends React.HTMLAttributes<HTMLElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any>;
}

function TableHeadSorting({ column, children }: TableHeadSortingProps) {
  const sorting = column.getIsSorted();
  const classes = cn(
    'flex justify-start w-full p-0 gap-1 hover:border-none hover:bg-initial outline-none',
    {
      'text-grey-400': !sorting,
      'text-grey-600': !!sorting,
    },
  );
  const chevronClasses = cn('h-4 w-4', {
    hidden: !sorting,
    'rotate-180': sorting === 'desc',
  });

  const handleSorting = () => {
    if (!sorting) {
      return column.toggleSorting(false);
    }

    if (sorting === 'asc') {
      return column.toggleSorting(true);
    }

    return column.clearSorting();
  };

  return (
    <Button variant="ghost" onClick={handleSorting} className={classes}>
      {children}
      <ChevronDown className={chevronClasses} />
    </Button>
  );
}

export default TableHeadSorting;

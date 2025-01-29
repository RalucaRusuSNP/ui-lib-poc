import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table as SCNTable,
  TableBody as SCNTableBody,
  TableCell as SCNTableCell,
  TableHead as SCNTableHead,
  TableHeader as SCNTableHeader,
  TableRow as SCNTableRow,
} from "@/components/ui/table"
import Skeleton from 'react-loading-skeleton';
import { Button } from "@/components/ui/button"
import type { TData } from "@/types/table"
import ExpandableButton from "../molecules/ExpandableButton";

export interface TableProps {
  data: TData[];
  columns: ColumnDef<TData>[];
  isExpandable?: boolean;
  expandedRowContent?: React.ElementType;
  loading?: boolean;
}

export default function Table({
  data,
  columns,
  isExpandable,
  expandedRowContent: ExpandedRowContent,
  loading,
}: TableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [expandedRows, setExpandedRows] = React.useState<Record<string, boolean>>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const renderLoadingTableRows = () => {
    const loadingRows = Array.from({ length: 4 });
    const loadingCells = Array.from({ length: columns.length});
    console.log(loadingRows, loadingCells)

    return loadingRows.map((_, rowIndex) => (
      <SCNTableRow key={`loading-row-${rowIndex}`} className="h-24 text-center">
        {loadingCells.map((_, cellIndex) => (
          <SCNTableCell key={`loading-cell-${rowIndex}-${cellIndex}`}>
            <Skeleton className="w-full h-full" />
          </SCNTableCell>
        ))}
      </SCNTableRow>
    ));
  };

  const renderEmptyTable = () => {
    if (loading) {
      return renderLoadingTableRows();
    }

    return (
      <SCNTableRow>
        <SCNTableCell
          colSpan={columns.length}
          className="h-24 text-center"
        >
          No results.
        </SCNTableCell>
      </SCNTableRow>
    );
  };

  const renderContent = () => {
    if (loading) {
      return renderLoadingTableRows();
    }

    if (!table.getRowModel().rows?.length) {
      return renderEmptyTable();
    }

    return table.getRowModel().rows.map((row) => (
      <React.Fragment key={row.id}>
        <SCNTableRow>
          {row.getVisibleCells().map((cell) => (
            <SCNTableCell key={cell.id}>
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )}
            </SCNTableCell>
          ))}
          {isExpandable && (
            <SCNTableCell key={`expandable-row-${row.original.id}`} className="pl-0">
              <ExpandableButton
                onExpand={() => toggleRow(row.original.id)}
                isExpanded={expandedRows[row.original.id]}
              />
            </SCNTableCell>
          )}
        </SCNTableRow>
        {expandedRows[row.original.id] && ExpandedRowContent && (
          <SCNTableRow>
            <SCNTableCell colSpan={columns.length + (isExpandable ? 1 : 0)}>
              <ExpandedRowContent data={row.original} />
            </SCNTableCell>
          </SCNTableRow>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <SCNTable>
          <SCNTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <SCNTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <SCNTableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </SCNTableHead>
                  )
                })}
                {isExpandable && <SCNTableHead key="expandable" />}
              </SCNTableRow>
            ))}
          </SCNTableHeader>
          <SCNTableBody>
            {renderContent()}
          </SCNTableBody>
        </SCNTable>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {table.getCanPreviousPage() && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
        )}
        {table.getCanNextPage() && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          )}
      </div>
    </div>
  )
}


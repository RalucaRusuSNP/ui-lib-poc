import { createColumn, createTable } from '@tanstack/table-core';
import { getCoreRowModel, SortingState } from '@tanstack/react-table';
import { StoryFn } from '@storybook/react';
import TableHeadSorting, {
  TableHeadSortingProps,
} from '@/components/molecules/TableHeadSorting';
import { notificationTableData, notificationColumns } from './Table/data';
import { useState } from 'react';

export default {
  title: 'Molecules/TableHeadSorting',
  component: TableHeadSorting,
  argTypes: {},
};

const Template: StoryFn<TableHeadSortingProps> = args => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableOptions = {
    columns: notificationColumns,
    data: notificationTableData,
    getCoreRowModel: getCoreRowModel(),
    onStateChange: () => {},
    onSortingChange: setSorting,
    renderFallbackValue: () => null,
    state: { sorting },
  };
  const table = createTable(tableOptions);
  const column = createColumn(table, notificationColumns[0], 0);

  return (
    <TableHeadSorting {...args} column={column}>
      Test Header
    </TableHeadSorting>
  );
};

export const Default = Template.bind({});
Default.args = {};

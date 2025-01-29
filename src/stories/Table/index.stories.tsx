import type { Meta, StoryFn } from '@storybook/react';

import Table, { TableProps } from '@/components/organisms/Table';
import { ExpandedRowContent } from "@/components/molecules/ExpandedRowContent";
import type { TData } from "@/types/table"
import { notificationTableData, notificationColumns } from "./data";
import { ColumnDef } from '@tanstack/react-table';

export default {
  title: 'Organisms/Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args: TableProps) => {
  return <Table {...args} />;
};
export const Primary = Template.bind({});
Primary.args = {
  data: notificationTableData as TData[],
  columns: notificationColumns as ColumnDef<TData>[],
  isExpandable: true,
  expandedRowContent: ExpandedRowContent,
};

export const NoData = Template.bind({});
NoData.args = {
  data: [],
  columns: notificationColumns as ColumnDef<TData>[],
};

export const Loading = Template.bind({});
Loading.args = {
  data: [],
  columns: notificationColumns as ColumnDef<TData>[],
  loading: true,
};
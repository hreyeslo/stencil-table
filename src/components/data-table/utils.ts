import { Tabulator } from 'tabulator-tables';

/**
 *
 */
export const getVisibleRowsHeight = (host: HTMLElement, visibleRows: number): number => {
  const tableContainer = host.shadowRoot.querySelector('.tabulator-tableholder');
  const horizontalScroll = tableContainer?.scrollWidth > tableContainer?.clientWidth || false;
  const scrollBarGap = horizontalScroll ? 16 : 0;
  const rowsHeight = 45 * (visibleRows + 1) + 2;
  return rowsHeight + scrollBarGap;
};

/**
 *
 * @param tableRef
 * @returns
 */
export const getTotalCells = (tableRef: Tabulator): string => {
  const _total = ((tableRef?.getColumns()?.length || 0) - 2) * tableRef?.getRows()?.length || 0;
  return new Intl.NumberFormat('de-DE').format(_total);
};

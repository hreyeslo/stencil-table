import { Options, Tabulator, TabulatorFull } from 'tabulator-tables';
import { generateColumns, generateData } from './generators';
import { Component, Element, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { getTotalCells, getVisibleRowsHeight } from './utils';

@Component({
  tag: 'data-table',
  styleUrl: 'data-table.scss',
  shadow: true,
})
export class DataTable {
  private _tableRef: Tabulator | null = null;
  private _tableonfig: Options = {
    index: 'id',
    layout: 'fitColumns',
    resizableColumnFit: true,
    resizableColumnGuide: true,
    renderHorizontal: 'virtual',
    layoutColumnsOnNewData: true,
    placeholder: 'No Data Available',
    rowHeader: {
      formatter: 'rownum',
      headerSort: false,
      hozAlign: 'left',
      resizable: false,
      frozen: true,
      minWidth: 65,
      width: 65,
    },
    columnDefaults: {
      headerSort: false,
      maxWidth: 300,
      minWidth: 200,
    },
  };

  /**
   *
   */
  @Element() host: HTMLElement;

  /**
   *
   */
  @State() initialBuild: boolean = true;

  /**
   *
   */
  @State() totalCells: string;

  /**
   *
   */
  componentDidLoad() {
    const _tableContainer = this.host.shadowRoot.getElementById('table');
    this._tableRef = new TabulatorFull(_tableContainer, {
      height: `${getVisibleRowsHeight(this.host, this.visibleRows)}px`,
      columns: generateColumns(this.columns),
      data: generateData(this.rows),
      renderVerticalBuffer: 51 * 10,
      ...this._tableonfig,
    });
    this._tableRef.on('tableBuilt', () => {
      if (this.initialBuild) {
        window.requestAnimationFrame(() => {
          this.initialBuild = false;
          this._tableRef.setHeight(getVisibleRowsHeight(this.host, this.visibleRows));
        });
      }
    });
    this._tableRef.on('columnsLoaded', () => this._updateTotalCells());
    this._tableRef.on('dataProcessed', () => this._updateTotalCells());
  }

  /**
   *
   */
  @Prop() visibleRows: number = 10;
  @Watch('visibleRows') visibleRowsHandler(newValue: number) {
    if (this._tableRef) {
      this._tableRef.setHeight(getVisibleRowsHeight(this.host, newValue));
    }
  }

  /**
   *
   */
  @Prop() columns: number = 200;
  @Watch('columns') columnsHandler(newValue: number) {
    if (this._tableRef) {
      this._tableRef.setColumns(generateColumns(newValue));
    }
  }

  /**
   *
   */
  @Prop() rows: number = 2000;
  @Watch('rows') rowsHandler(newValue: number) {
    if (this._tableRef) {
      this._tableRef.setData(generateData(newValue));
    }
  }

  /**
   *
   * @param event
   */
  @Listen('columnsChange') updateColumns(event: CustomEvent<number>) {
    this.columnsHandler(event.detail);
  }

  /**
   *
   * @param event
   */
  @Listen('rowsChange') updateRows(event: CustomEvent<number>) {
    this.rowsHandler(event.detail);
  }

  /**
   *
   * @param event
   */
  @Listen('itemsViewChange') updateItemsView(event: CustomEvent<number>) {
    this.visibleRowsHandler(event.detail);
  }

  /**
   *
   */
  private _updateTotalCells() {
    if (this._tableRef) {
      this.totalCells = getTotalCells(this._tableRef);
    }
  }

  /**
   *
   * @returns
   */
  render() {
    return (
      <Host>
        <filters-box>
          <h3>Total cells: {this.totalCells}</h3>
        </filters-box>
        <div style={{ visibility: this.initialBuild ? 'hidden' : 'visible' }}>
          <div id="table"></div>
        </div>
      </Host>
    );
  }
}

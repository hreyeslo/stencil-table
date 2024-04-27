import { Component, Element, EventEmitter, Host, h, Event } from '@stencil/core';

@Component({
  tag: 'filters-box',
  styleUrl: 'filters-box.scss',
  shadow: true,
})
export class FiltersBox {
  /**
   *
   */
  @Element() host: HTMLElement;

  /**
   *
   */
  @Event() columnsChange: EventEmitter<number>;

  /**
   *
   */
  @Event() rowsChange: EventEmitter<number>;

  /**
   *
   */
  @Event() itemsViewChange: EventEmitter<number>;

  /**
   *
   * @param event
   * @param name
   */
  changeColumns(event: any, name: string) {
    const value = event.currentTarget.value;
    const eventname = `${name}Change`;
    this[eventname].emit(Number(value));
  }

  /**
   *
   * @returns
   */
  render() {
    return (
      <Host>
        <div class="box">
          <md-filled-text-field label="Columns" value="200" type="number" onChange={event => this.changeColumns(event, 'columns')}></md-filled-text-field>
          <md-filled-text-field label="Rows" value="2000" type="number" onChange={event => this.changeColumns(event, 'rows')}></md-filled-text-field>
          <md-filled-text-field label="Visible Items" value="10" type="number" onChange={event => this.changeColumns(event, 'itemsView')}></md-filled-text-field>
          <slot />
        </div>
      </Host>
    );
  }
}

/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DataTable {
        "columns": number;
        "rows": number;
        "visibleRows": number;
    }
    interface FiltersBox {
    }
}
export interface FiltersBoxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFiltersBoxElement;
}
declare global {
    interface HTMLDataTableElement extends Components.DataTable, HTMLStencilElement {
    }
    var HTMLDataTableElement: {
        prototype: HTMLDataTableElement;
        new (): HTMLDataTableElement;
    };
    interface HTMLFiltersBoxElementEventMap {
        "columnsChange": number;
        "rowsChange": number;
        "itemsViewChange": number;
    }
    interface HTMLFiltersBoxElement extends Components.FiltersBox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFiltersBoxElementEventMap>(type: K, listener: (this: HTMLFiltersBoxElement, ev: FiltersBoxCustomEvent<HTMLFiltersBoxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFiltersBoxElementEventMap>(type: K, listener: (this: HTMLFiltersBoxElement, ev: FiltersBoxCustomEvent<HTMLFiltersBoxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFiltersBoxElement: {
        prototype: HTMLFiltersBoxElement;
        new (): HTMLFiltersBoxElement;
    };
    interface HTMLElementTagNameMap {
        "data-table": HTMLDataTableElement;
        "filters-box": HTMLFiltersBoxElement;
    }
}
declare namespace LocalJSX {
    interface DataTable {
        "columns"?: number;
        "rows"?: number;
        "visibleRows"?: number;
    }
    interface FiltersBox {
        "onColumnsChange"?: (event: FiltersBoxCustomEvent<number>) => void;
        "onItemsViewChange"?: (event: FiltersBoxCustomEvent<number>) => void;
        "onRowsChange"?: (event: FiltersBoxCustomEvent<number>) => void;
    }
    interface IntrinsicElements {
        "data-table": DataTable;
        "filters-box": FiltersBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "data-table": LocalJSX.DataTable & JSXBase.HTMLAttributes<HTMLDataTableElement>;
            "filters-box": LocalJSX.FiltersBox & JSXBase.HTMLAttributes<HTMLFiltersBoxElement>;
        }
    }
}

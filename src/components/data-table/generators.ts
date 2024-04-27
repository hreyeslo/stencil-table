import { faker } from '@faker-js/faker';

/**
 *
 */
export const generateColumns = (columnsNumber: number): any[] => {
  return new Array(columnsNumber)
    .fill(null)
    .map((_value, index) => {
      return {
        resizable: index < columnsNumber - 1,
        title: `Column ${index + 1}`,
        field: 'value',
      };
    })
    .concat([generateActionColumns()]);
};

/**
 *
 */
export const generateData = (rowsNumber: number): any[] => {
  return new Array(rowsNumber).fill(null).map((_, index) => {
    return {
      id: faker.string.uuid(),
      value: faker.person.fullName(),
      index: index + 1,
    };
  });
};

/**
 *
 */
const generateActionColumns = (): any => {
  return {
    headerSort: false,
    hozAlign: 'center',
    resizable: false,
    frozen: true,
    maxWidth: 100,
    minWidth: 100,
    width: 100,
    formatter: cell => {
      const _cellNumber = cell.getRow().getData().index;
      const _container = document.createElement('div');
      _container.classList.add('tabulator-action-buttons');
      const _optionsButton = document.createElement('button');
      _optionsButton.innerHTML = '&TripleDot;';
      _optionsButton.onclick = () => alert(`Showing options for row number: ${_cellNumber}`);
      const _detailButton = document.createElement('button');
      _detailButton.innerHTML = '&ShortRightArrow;';
      _detailButton.onclick = () => alert(`Showing detail for cell with id: ${_cellNumber}`);
      _container.appendChild(_optionsButton);
      _container.appendChild(_detailButton);
      return _container;
    },
  };
};

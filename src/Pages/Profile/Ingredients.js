import React from 'react';
import MaterialTable from 'material-table';

export default function Ingredients() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Ingredient Name', field: 'name' },
      { title: 'Quantity', field: 'quantity', type: 'numeric' },
      {
        title: 'Units',
        field: 'unit',
        lookup: { 1: 'gram', 2: 'liters', 3:'tsp', 4:'tbsp'},
      },
    ],
    data: [
      { name: 'Turmeric', quantity: 1, unit: 1 },
      
    ],
  });

  return (
    <MaterialTable
      title="Add Ingredients"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

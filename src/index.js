import { render } from "react-dom";
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn
} from "@devexpress/dx-react-grid-material-ui";

const getRowId = row => row.id;

const App = () => {
  const [columns] = useState([
    { name: "column1", title: "Column1" },
    { name: "column2", title: "Column2" },
    { name: "column3", title: "Column3" },
    { name: "column4", title: "Column4" },
    { name: "column5", title: "Column5" },
    { name: "column6", title: "Column6" },
    { name: "column7", title: "Column7" },
    { name: "column8", title: "Column8" },
    { name: "column9", title: "Column9" },
    { name: "column10", title: "Column10" },
    { name: "column11", title: "Column11" },
    { name: "column12", title: "Column12" },
    { name: "column13", title: "Column13" },
    { name: "column14", title: "Column14" },
    { name: "column15", title: "Column15" },
    { name: "column16", title: "Column16" },
    { name: "column17", title: "Column17" },
    { name: "column18", title: "Column18" },
    { name: "column19", title: "Column19" },
    { name: "column20", title: "Column20" },
    { name: "column21", title: "Column21" },
    { name: "column22", title: "Column22" },
    { name: "column23", title: "Column23" },
    { name: "column24", title: "Column24" },
    { name: "column25", title: "Column25" },
    { name: "column26", title: "Column26" }
  ]);
  const [rows, setRows] = useState([]);
  const [editingStateColumnExtensions] = useState([
    { columnName: "column19", editingEnabled: false },
    { columnName: "column20", editingEnabled: false },
    { columnName: "column21", editingEnabled: false },
    { columnName: "column22", editingEnabled: false },
    { columnName: "column23", editingEnabled: false },
    { columnName: "column24", editingEnabled: false },
    { columnName: "column25", editingEnabled: false }
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row
        }))
      ];
    }
    if (changed) {
      changedRows = rows.map(row =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <EditingState
          onCommitChanges={commitChanges}
          defaultEditingRowIds={[0]}
          columnExtensions={editingStateColumnExtensions}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
      </Grid>
    </Paper>
  );
};

render(<App />, document.getElementById("root"));

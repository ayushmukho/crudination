import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {};

  const deleteHandler = () => {};

  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>React.js</td>
            <td>Mukho</td>
            <td>available</td>
            <td>
              <Button variant="secondary" className="edit" onClick={{}}>
                Edit
              </Button>
              <Button variant="danger" className="delete" onClick={{}}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;

import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          <h3>Posts</h3>
          <button className="btn btn-primary">Add Post</button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Sample Post</td>
              <td>Marketing</td>
              <td>Draft</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
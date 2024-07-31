import React from 'react';

const Report = () => {
  return (
    <div>
      <h1>Jenkins Summary Report</h1>
      <div className="search-bar">
        <input type="text" placeholder="Enter Package Name" />
        <button className="button">Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Recipe</th>
            <th>Docker</th>
            <th>C1 Link</th>
            <th>Image</th>
            <th>Binary</th>
            <th>Comment</th>
            <th>Size</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Report;

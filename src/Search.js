import React from 'react';

const Search = () => {
  return (
    <div className="details-container">
      <h1>Details</h1>
      <input type="text" placeholder="Developer Name" />
      <button>Submit</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Recipe</th>
            <th>Docker</th>
            <th>CI Links</th>
            <th>Image</th>
            <th>Binary</th>
            <th>Comment</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Search;

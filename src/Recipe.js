import React from 'react';

const Recipe = () => {
  return (
    <div>
      <div className="filter-container">
        <div className="filter-select">
          <select>
            <option value="all">ALL</option>
            <option value="failed">Failed Jobs</option>
          </select>
        </div>
        <div className="filter-checkbox">
          <input type="checkbox" id="failedJobs" />
          <label htmlFor="failedJobs">Failed Jobs</label>
        </div>
        <button className="submit-button">Submit</button>
      </div>
      <button>Full View</button>
      <button>Display Broken</button>
      <table>
        <thead>
          <tr>
            <th>PACKAGE NAME</th>
            <th>RECIPE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Package 1</td>
            <td>Recipe 1</td>
          </tr>
          <tr>
            <td>Package 2</td>
            <td>Recipe 2</td>
          </tr>
          <tr>
            <td>Package 3</td>
            <td>Recipe 3</td>
          </tr>
        </tbody>
      </table>
      <div className="legend">
        <button className="legend-item">NA</button>
        <button className="legend-item all-good">All Good</button>
        <button className="legend-item failed">Failed</button>
        <button className="legend-item jenkins-broken">Jenkins broken</button>
        <button className="legend-item broken">Broken</button>
        <button className="legend-item job-not-run">Job not run</button>
      </div>
      <div className="download-links">
        <button>Download Links</button>
        <button className="passing">Passing</button>
      </div>
    </div>
  );
}

export default Recipe;

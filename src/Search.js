import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row mt-4">
          <div className="col-7">
            {" "}
            <input
              type="search"
              className="form-control"
              placeholder="Enter a word"
            ></input>
          </div>
          <div className="col-5">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

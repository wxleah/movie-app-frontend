
function SearchBox({ handleSubmit, handleChange, value }) {

  return (
    <>
      <div className='col col-sm-4' >
        <form onSubmit={handleSubmit} className="d-flex">
          <input className="form-control"
            type="text"
            placeholder="Type to search..."
            value={value}
            onChange={handleChange}
          />
          {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
        </form>
      </div>

    </>
  )
}

export default SearchBox;
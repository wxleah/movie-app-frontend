function ViewMore({ onClick}) {
    return <div className="col-md-3 d-flex 
                           align-items-center 
                           justify-content-center">
        <button
            className='btn btn-m btn-outline-light view-more-btn'
            onClick={onClick}
        >
            View More
        </button>
    </div>
}

export default ViewMore;
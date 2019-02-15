import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const SeriesListItem = ({ series }) => (

  <div className="col-6 col-md-4 col-sm-6 col-lg-3" style={{ paddingBottom: 10 }}>
    <div className="card" >
      <img className="card-img-top" src={series.show.image != null && series.show.image.medium.replace(/^http:\/\//i, 'https://') || ''} alt="Card image cap" />
      <div className="card-block" style={{ padding: 10 }}>
        <h4 className="card-title">{series.show.name}</h4>
        <div className="row">
          <div className="col-8">
            <p className="card-text">Status - {series.show.status}</p>

          </div>
          <div className="col-4">
            <p className="card-text text-right"><span className="badge badge-primary">{series.show.rating.average || ''}</span> </p>
          </div>
        </div>
        <p className="card-text">Type - {series.show.type}</p>

        <Link to={`/series/${series.show.id}`} className="btn btn-primary">
          Details
      </Link>
      </div>


    </div>
  </div>
)


const SeriesList = (props) => {
  return (
    <div>
      <div className="row" style={{ margin: 5 }}>
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </div>

    </div>
  )
}



export default SeriesList;
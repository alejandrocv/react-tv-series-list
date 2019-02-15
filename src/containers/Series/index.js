import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';
import './index.css';


class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isfetching: false
  }


  onSeiresInputChange = e => {
    this.setState({ seriesName: e.target.value, isfetching: true });
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then(json => this.setState({ series: json, isfetching: false }))

  }

  render() {
    const { series, seriesName, isfetching } = this.state;
    return (
      <div>
        <div className="jumbotron">
          <Intro message="Here you can find all  your most loved series" />
          <div className="text-center">
            <input
              value={seriesName}
              type="text"
              onChange={this.onSeiresInputChange} />
          </div>
          <div className="text-center">
            <div className="text-muted">
              {
                series.length === 0 && seriesName.trim() === '' && <p>Please enter series name into the input </p>
              }
            </div>
            <div className="text-danger">
              {
                !isfetching && series.length === 0 && seriesName.trim() !== '' && <p>No TV series have been found with this name</p>
              }
            </div>
          </div>
        </div>
        {
          isfetching && <div className="loader" ></div>
        }
        {
          !isfetching && <SeriesList list={series} />
        }

      </div>
    )
  }
}

export default Series;
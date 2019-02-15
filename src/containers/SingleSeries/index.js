import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((response) => response.json())
      .then(json => this.setState({ show: json }));
    console.log(this.state.show)
  }

  render() {
    const { show } = this.state;
    console.log(show)

    return (
      <div>
        {show === null && <div className="loader" ></div>}
        {
          show !== null
          &&
          <div className="text-center">
            <h3>{show.name}</h3>
            <p>Status - {show.status}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episodes - {show._embedded.episodes.length}</p>
            <p>
              <img src={show.image.medium.replace(/^http:\/\//i, 'https://')} />
            </p>
            {ReactHtmlParser(show.summary)}
          
          </div>
        }
      </div>
    )
  }
}

export default SingleSeries;
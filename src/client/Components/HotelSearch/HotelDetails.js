import React, {Component} from 'react';
import Detail from './Detail';

import styled from 'styled-components';

const Wrapper = styled.h5`
    width: 300px;
    height: 300px;
    overflow: auto;
    color: white;
`;

export default class HotelDetails extends Component {
  render() {
    const { details } = this.props;

    return (
    <Wrapper>
      <div className="col-md-12">
    <ul className='list-group-item'>
      {
        details.map((detail) =>
          <Detail
            name={detail.name}
            imgUrl={detail.image_url}
            nightlyRate={detail.nightlyRate}
            totalRate={detail.totalRate}
            bookingUrl={detail.bookingUrl}
          />
        )
      }
    </ul>
      </div>

    


       </Wrapper>
    )
  }
}


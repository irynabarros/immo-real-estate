import React, { Component } from 'react';

import Client from './Contentful';

const AptContext = React.createContext();

export default class AptProvider extends Component {
  state = {
    apts: [],
    sortedApts: [],
    featuredApts: [],
    loading: true,
    type: 'all',
    deal: 'all',
    rooms: 1,
    bathroom: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    elevator: false,
    balcony: false,
    doorman: false,
    cave: false,
    parking: false
  };
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'immo',
        order: '-fields.price'
      });
      let apts = this.formatData(response.items);

      console.log(apts);
      let featuredApts = apts.filter(apt => apt.featured === true);
      //
      let maxPrice = Math.max(...apts.map(item => item.price));
      let maxSize = Math.max(...apts.map(item => item.size));
      this.setState({
        apts,
        featuredApts,
        sortedApts: apts,
        loading: false,
        //
        // price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let apt = { ...item.fields, images, id };
      return apt;
    });
    return tempItems;
  }
  getApt = id => {
    let tempApts = [...this.state.apts];
    const apt = tempApts.find(apt => apt.id === id);
    return apt;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterApts
    );
  };

  filterApts = () => {
    let {
      apts,
      type,
      deal,
      rooms,
      bathroom,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      elevator,
      balcony,
      doorman,
      cave,
      parking
    } = this.state;

    let tempApts = [...apts];

    // filter by type
    if (type !== 'all') {
      tempApts = tempApts.filter(apt => apt.type === type);
    }
    if (deal !== 'all') {
      tempApts = tempApts.filter(apt => apt.deal === deal);
    }
    // filter by rooms
    if (rooms !== 1) {
      tempApts = tempApts.filter(apt => apt.rooms >= rooms);
    }
    if (bathroom !== 1) {
      tempApts = tempApts.filter(apt => apt.bathroom >= bathroom);
    }

    tempApts = tempApts.filter(
      apt => apt.price >= minPrice && apt.price <= maxPrice
    );
    //filter by size
    tempApts = tempApts.filter(
      apt => apt.size >= minSize && apt.size <= maxSize
    );
    //filter by elevator
    if (elevator) {
      tempApts = tempApts.filter(apt => apt.elevator === true);
    }
    //filter by balcony
    if (balcony) {
      tempApts = tempApts.filter(apt => apt.balcony === true);
    }

    if (doorman) {
      tempApts = tempApts.filter(apt => apt.doorman === true);
    }
    if (parking) {
      tempApts = tempApts.filter(apt => apt.parking === true);
    }
    if (cave) {
      tempApts = tempApts.filter(apt => apt.cave === true);
    }
    this.setState({
      sortedApts: tempApts
    });
  };

  render() {
    return (
      <AptContext.Provider
        value={{
          ...this.state,
          getApt: this.getApt,
          handleChange: this.handleChange
        }}>
        {this.props.children}
      </AptContext.Provider>
    );
  }
}
const AptConsumer = AptContext.Consumer;

export { AptProvider, AptConsumer, AptContext };

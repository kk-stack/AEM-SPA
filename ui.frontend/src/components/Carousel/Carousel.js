import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';

require('./Carousel.scss');

export const CarouselEditConfig = {

    emptyLabel: 'Carousel',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

export default class Carousel extends Component {

    get content() {
        return <div className="carousel-content">
            
        </div>;
    }

    render() {
        if(CarouselEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
                <div className="carousel">
                    {this.content}
                </div>
        );
    }
}

MapTo('wknd-spa-react/components/carousel')(Carousel, CarouselEditConfig);
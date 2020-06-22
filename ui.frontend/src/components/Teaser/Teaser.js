import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { Link } from "react-router-dom";

require('./Teaser.scss');

export const TeaserEditConfig = {

    emptyLabel: 'Teaser',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

export default class Teaser extends Component {

    get content() {
        return <div className="teaser-content">
            <Image src={this.props.imagePath} title={this.props.title}></Image>
            <h2>{this.props.title}</h2>
            <Text text={this.props.description} richText={true}></Text>
            {this.props.actions.map(action => (
                <Button {...action}></Button>
            ))}
            <Link to={'/single'}>Custom Route</Link>
        </div>;
    }

    render() {
        if(TeaserEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
                <div className="teaser">
                    {this.content}
                </div>
        );
    }
}

MapTo('wknd-spa-react/components/teaser')(Teaser, TeaserEditConfig);
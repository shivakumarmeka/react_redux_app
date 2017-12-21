import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesBars
} from 'react-sparklines';

export default (props) => {
    return (
        <div>
        <Sparklines data={props.data} width={180} height={80}>
                <SparklinesLine color={props.color} />
        </Sparklines>
        <div>{props.units}</div>
        </div>
    );

}
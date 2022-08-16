import React, { Component } from 'react';

const cardStyle={
    border:'1px solid black',
    padding: 10,
    margin: 10
}
function Card(props) {
    return <div style={cardStyle}>
        <span> 2022년 8월 16일</span>
        <hr />
        <span>{props.author}</span>
        {props.children}
    </div>
}

class Sample extends Component {
    render() {
        const elements =[]
        for (let index=1; index<10; index++){
            elements.push(
                <Card author="NoName">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat repellendus in culpa libero iure perferendis inventore ab illum expedita? Sit saepe maiores in exercitationem eum quidem accusantium voluptas cupiditate qui?</p>
                </Card>
            )
            const element = <div>{elements}</div>
        }
        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default Sample;
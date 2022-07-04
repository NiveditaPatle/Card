import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div id='div1'>
            <div id='div2'>
                <p>Card Name: { props.ProjectNo }</p>
                <p>Project Budget: { props.Budget }</p>
                <p> Project End Date: 03/07/2022, 02:39 pm</p>
            </div>
            <hr/>
            <div id='div3'>
                <span>Edit Card</span>
                <span>Delete Card</span>
                <span>Copy Card</span>
            </div>
        </div>
    )
}

export default Card

import React from 'react'

import './title.css'
import './navigation.css'

class Navigation extends React.Component {
    render() {
        return (
            <div className="section-nav-top">
                {this.renderTitle()}
                <div className="section-nav-top__toggle">
                    <div className="section-nav-top__toggle-link" >
                        <div className="section-nav-top__toggle-button"></div>
                        <div className="section-nav-top__toggle-button"></div>
                        <div className="section-nav-top__toggle-button"></div>
                    </div>
                </div>

                <ul className="section-nav-top__flex-wrapper">
                    <li className="section-nav-top__item">
                        <div className="section-nav-top__link" >List</div>
                    </li>
                    <li className="section-nav-top__item">
                        <div className="section-nav-top__link" >About us</div>
                    </li>
                </ul>
            </div >
        )
    }

    renderTitle() {
        return (
            <div className="section-nav-top__title">
                title
            </div>
        )
    }
}

export default Navigation
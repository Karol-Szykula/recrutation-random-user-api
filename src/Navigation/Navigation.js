import React from 'react'

import { Link } from 'react-router-dom'
import './title.css'
import './navigation.css'

class Navigation extends React.Component {
    state = {
        linkToAboutUs: false,
        linkToList: false,
    }
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
                    <Link
                        className="section-nav-top__item"
                        to='/list'
                    >
                        <li className="section-nav-top__item">
                            <div className="section-nav-top__link" >List</div>
                        </li>
                    </Link>
                    <Link
                        className="section-nav-top__item"
                        to='/about-us'
                    >
                        <li className="section-nav-top__item">
                            <div className="section-nav-top__link" >About us</div>
                        </li>
                    </Link>
                </ul>
            </div >
        )
    }

    renderTitle() {
        return (
            <div className="section-nav-top__title">
                Recrutation task - RandomUserApi
            </div>
        )
    }
}

export default Navigation
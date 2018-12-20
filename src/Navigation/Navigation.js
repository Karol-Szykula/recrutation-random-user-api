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
                <div className="section-nav-top__flex-wrapper">
                    <Link
                        className="section-nav-top__item"
                        to='/list'
                    >
                        <div className="section-nav-top__link">List</div>
                    </Link>
                    <Link
                        className="section-nav-top__item"
                        to='/about-us'
                    >
                        <div className="section-nav-top__link" >About us</div>
                    </Link>
                </div>
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
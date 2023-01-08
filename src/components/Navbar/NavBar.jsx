/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import quillbotIcon from '../../assets/quillbotIcon.jpg';
import './NavBarStyle.css';

const NavBar = () => {
    return (
        <div className='main__navBar'>
            <nav className="navbar fixed-top bg-white m-0 p-0">
                <div className="border border-2 container-fluid d-flex text-center">
                    <a className="navbar-brand" href="" >
                        <img src={quillbotIcon} alt="QuillBot" className="align-text-top image__tag" target="_blank" />
                    </a>
                    <div className="text-center quillbot-head">QuillBot Premium</div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

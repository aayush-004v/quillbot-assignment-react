/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top bg-white m-0 p-0 style={{border: '2px solid black'}}">
                <div className="border border-2 container-fluid d-flex text-center">
                    <a className="navbar-brand" href="https://quillbot.com/premium?utm_medium=paid_search&utm_source=google&utm_campaign=sitelinks&campaign_type=extension">
                        <img src="https://assets.stickpng.com/images/630f865ad5353300f4bd3291.png" alt="QuillBot" width="150px" height="50px" className="d-inline-block align-text-top" target="_blank" />
                    </a>
                    <h3 className="text-center">QuillBot Premium</h3>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
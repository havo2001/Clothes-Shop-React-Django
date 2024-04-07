import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './breadCrumbs.css';

const BreadCrumbs = () => {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`;
            const capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{capitalizedCrumb}</Link>
                </div>
            )
        })

    return (
        <>
            <section className='breadcrumbs'>{crumbs}</section>
        </>
    )
}

export default BreadCrumbs

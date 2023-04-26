import React from 'react';
import './PageTemplate.css';

export default function PageTemplate(props) {
    return (
        <section className="page-template">
            <div className="container">
                <div className="page-content">
                    <h2>{props.pageTitle}</h2>
                    {props.children}
                </div>
            </div>
        </section>
    );
}

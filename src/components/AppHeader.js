import React from 'react';
import templates from '../template.json';
export default function AppHeader() {
    return (
    <nav className="navbar navbar-light bg-light">
        <span className="display-4 mx-auto">{templates.AppHeader}</span>
    </nav>
    )
}

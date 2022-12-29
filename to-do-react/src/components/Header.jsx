import React from 'react';
import Button from './Button';

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button className='btn'
            onClick={onAdd}
            text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

export default Header
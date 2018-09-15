import React from 'react';

import Aux from '../../hoc/Auxs'
import classes from './Layout.css';

const layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, draBar, Back</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
};
export default layout;
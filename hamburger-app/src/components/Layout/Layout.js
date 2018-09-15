import React from 'react';
import Aux from '../../hoc/Auxs'

const layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, draBar, Back</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
};
export default layout;
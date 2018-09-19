import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxs'
import Bacdrop from '../Backdrop/Backdrop'
const modal = (props) => {
	console.log(props.show);
	return(
		<Aux>
			<Bacdrop show={props.show}/>
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}>
				{props.children}
			</div>
		</Aux>
	)
};

export default modal;

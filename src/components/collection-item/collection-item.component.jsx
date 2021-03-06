import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.css';

const CollectionItem = ({ item, addItem }) => {
	const { imageUrl, name, price, sale } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">R{price}</span>
			</div>
			{sale ? <div className="sale">Sale</div> : null}

			<CustomButton onClick={() => addItem(item)}>add to cart</CustomButton>
		</div>
	);
};

const mapDispacthToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
});
export default connect(null, mapDispacthToProps)(CollectionItem);

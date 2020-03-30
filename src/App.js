import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
function App(props) {
  const dispatch = useDispatch();
  //RENDERS PRODUCTLIST FROM STORE
  //USES ONCLICK ACTION DERIVED FROM
  return (
    <ul className="App list-inline">
      <li className="media container">
        <div className="row-12">
        {props.testStore.map((arrayItem, index) =>
          <div key={index}>
            <img src={arrayItem.img} className="mr-3" alt="Image not found"></img>
            <div className="media-body list-inline-item">
              <h5 className="mt-0 text-wrap">{arrayItem.name}</h5>

              <li>PartNo: &nbsp;
              <p className="list-inline-item font-weight-bold">{arrayItem.number}</p></li>
              <li className="text-danger font-weight-bold">${arrayItem.pricing}</li>
              <button onClick={() => dispatch(increment())} className="btn-warning">Add to Cart</button>
              
            </div>
            <hr></hr>
          </div>

        )}
      </div>
      </li>
    </ul>
  );
}


export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);


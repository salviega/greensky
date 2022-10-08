import React from 'react';
import './GreenSkyResumen.scss'

export function GreenSkyResumen({protectedArea}) {
  return ( 
    <div className="resumen">
      <h1 className="resumen__title">NDVI Statistics</h1>
      <div className="resumen-list">
        <div className="resumen-list-head">
          <p className="resumen-list-head__title">Min</p>
          <p className="resumen-list-head__title">Max</p>
          <p className="resumen-list-head__title">Mean</p>
          <p className="resumen-list-head__title">SD</p>
          <p className="resumen-list-head__title">Date</p>
        </div>
          {/* {purchasedItems.map((boughtItem, index) => (
            <div className='resumen-list-body' key={index}>
              <p className="resumen-list-body__item">{boughtItem.itemId}</p>
              <p className="resumen-list-body__item">{boughtItem.title}</p>
              <p className="resumen-list-body__item">   {(parseInt(boughtItem.price) / currency + 0.001).toFixed(3)}</p>
              <p className="resumen-list-body__show" onClick={() => {onShowDetail(boughtItem);}}>show</p>
              <a className="resumen-list-body__address" href={`https://goerli.etherscan.io/address/${boughtItem.buyer}`}> {boughtItem.buyer.slice(0, 4) + "..." + boughtItem.buyer.slice(38)}</a>
            </div>
          ))} */}
          {/* <div className='resumen-list-footer'>
            <p className="resumen-list-footer__item">Total</p>
            <p className="resumen-list-footer__item">{totalItems}</p>
            <div className="resumen-list-footer-value">
              <FontAwesomeIcon
                icon={faEthereum}
                className="resumen-list-footer-value__item"
              />
              <p className="resumen-list-footer-value__item">
                {ethIncome}
              </p>
            </div>
            <a className="resumen-list-footer__wallet" href={`https://goerli.etherscan.io/address/${owner}`}> {owner.slice(0, 4) + "..." + owner.slice(38)}</a>
            <p className="resumen-list-footer__item">{''}</p>
          </div> */}
      </div>
    </div>
  )
}
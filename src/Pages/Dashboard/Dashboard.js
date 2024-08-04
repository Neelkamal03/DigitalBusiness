import React from 'react'
import css from './Dashboard.module.css';
import {cardsData, ordersData, groupNumber,INTIAL_EVENTS, boardData,userData} from '../../data/data.js'
import Statistics from '../../Component/Statistics/Statistics.js';
import Order from '../../Component/Order/Order.js';
export default function Dashboard() {
  return (
    <div className={css.container}>
      {/* Left-side */}
      <div className={css.dashboard}>
        <div className={css.dashboardHead}>
          <div className={css.head}>
            <span>Dashboard</span>
            <div className={`${css.durationButton} them-container`}>
              <select>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>1 Year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index)=>(
                <div key={index} className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>{card.change}</span>
                  </div>
                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Statistics/>
      </div>
      {/* Right-Side */}
      <div className={css.orders}>
        <Order/>
      </div>
    </div>
  )
}

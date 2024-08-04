import React from 'react'
import { groupNumber, ordersData } from "../../data/data"
import css from './Order.module.css'
import OrdersPieCharts from '../OrdersPieChart/OrdersPieCharts'
export default function Order() {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./assests/logo.png" alt="Logo" />
                <span>Orders today</span>
            </div>
            <div className={`${css.stat} grey-container`}>
                <span>Amount</span>
                <span>{groupNumber(3662)}</span>
            </div>
            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>{order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>{order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={css.ordersChart}>
                <span>Split by orders</span>
                <OrdersPieCharts/>
            </div>
        </div>
    )
}

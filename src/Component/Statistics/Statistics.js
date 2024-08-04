import React from 'react'
import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import {groupNumber} from "../../data/data.js"
import StatisticalChart from "../StatisticalChart/StatisticalChart.js"

export default function Statistics() {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview of statistics</span>

        <div className={`${css.cards} grey-container`}>
            <div>
                <div className={css.arrowIcon}>
                    <BsArrowUpShort/>
                </div>
                <div className={css.card}>
                    <span>Top Item this month</span>
                    <span>Office comps</span>
                </div>
            </div>
            <div className={css.card}>
                <span>Item</span>
                <span>$ {groupNumber(74.00003)}</span>
            </div>
            <div className={css.card}>
                <span>Profit</span>
                <span>Profit</span>
                <span>$ {groupNumber(37000)}</span>
            </div>
            <div className={css.card}>
                <span>Daily Average</span>
                <span>$ {groupNumber(57348)}</span>
            </div>
        </div>
        <StatisticalChart/>
    </div>
  )
}

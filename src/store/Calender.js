import { create } from 'zustand';
import { cardsData, ordersData, groupNumber, INITIAL_EVENTS, boardData, userData } from '../data/data.js'

const useCalender=create((set)=>({
    currentEvents:INITIAL_EVENTS,
    setCurrentEvents: (events)=>set({currentEvents:events})
}))
export default useCalender;
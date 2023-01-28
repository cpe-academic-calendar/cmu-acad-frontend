import create from 'zustand'

const CollectCalendar = ((set: any) => ({
    userId: [],
    setId: (id:any) => set((state:any)  => ({userId: [...state.userId,id]}))
}))

export const useCalendarCollect = create(CollectCalendar)
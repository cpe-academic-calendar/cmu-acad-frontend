import create from 'zustand'

const CollectCalendar = ((set: any) => ({
    userId: [] as number[],
    setId: (id:number) => set((state:any)  => ({userId: [...state.userId,id]}))
}))

export const useCalendarCollect = create(CollectCalendar)
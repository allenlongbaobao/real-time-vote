interface IData {
  id: string,
  name: string,
  poll: number,
}

export const storeData: IData[] = [
  {
    id: "1",
    name: "节目一",
    poll: 0,
  },
  {
    id: "2",
    name: "节目一",
    poll: 0,
  },
  {
    id: "3",
    name: "节目一",
    poll: 0,
  },
  {
    id: "4",
    name: "节目一",
    poll: 0,
  },
  {
    id: "5",
    name: "节目一",
    poll: 0,
  },
  {
    id: "6",
    name: "节目一",
    poll: 0,
  },
  {
    id: "7",
    name: "节目一",
    poll: 0,
  },
]

export function setData(id: string): IData[]  {
  storeData.forEach((d: IData) => {
    if (d.id === id) {
      ++d.poll
    }
  })
  return storeData
}

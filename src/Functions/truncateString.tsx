export function truncateString(str: string) {
    if(21>str.length){
      return str
    }
      return str.slice(0, 15) + "..."
  }
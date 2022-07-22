
export const getUrl = (list) => {
    const urlObj = {}
    list.forEach(ele => {
      for(let [idx,item] of Object.entries(ele)){
          console.log(item,idx)
      }
    })
}
export const getDatasCurrentId = (datasArray, id) => {
  let currentTitle
  let currentImage
  let currentAddress
  let currentDescription
  
  datasArray.map(el => {
    if(el.id === id) {
      currentTitle = el.title
      currentImage = el.image
      currentAddress = el.address
      currentDescription = el.description
    }
  })

  return {
    currentTitle,
    currentImage,
    currentAddress,
    currentDescription,
  }
}

export const getIdsFromArray = (datasArray) => {
  let idsArray = []
  
  datasArray.map(el => {
    idsArray.push(el.id)
  })

  return idsArray
}
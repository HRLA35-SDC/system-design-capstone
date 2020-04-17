import React, {useState} from 'react'

const SizingGuide = ({currentShoe, updateCurrentOrder, isValidOrder}) => {
/* Will need a request function passed down */
  let sizes = currentShoe.availSizes
  //replace X's with colons
  for(let key in sizes){
    if(key.includes('x')){
      let newValue = key.replace(/x/g, ".");
      //key = key.replace(/x/g, ".");
      sizes[newValue] = sizes[key]
      delete sizes[key]
      //console.log(key, newValue)
    }
  }
  let [selectedSize, setSelectedSize] = useState(null)

  const selectSize = (size) => {
    setSelectedSize(size)
  }
  return (
    <div id='size_guide_wrapper'>
      <div id='size_guide_header'>
        <label style={{color: `${isValidOrder === false ? "#d43f21" : ""}`}}>Select Size</label>
        <a href="https://www.nike.com/us/en_US/sfg/unisex-shoe-sizing-chart">Size Guide</a>
      </div>
      <ul id='size_grid' style={{border: `${isValidOrder === false ? "1px solid #d43f21" : ""}`}}>
        {Object.entries(sizes).map(([key, value]) => (
            <SizeItem
                value={value}
                key={key}
                size={key}
                updateCurrentOrder={updateCurrentOrder}
                selected={selectedSize == key}
                selectSize={selectSize}
            />
        ))}
      </ul>
      {isValidOrder === false && <span style={{color: "#d43f21"}}>Please Select a Size</span>}
    </div>
  )
}

const SizeItem = ({value, size, updateCurrentOrder, selectSize, selected}) => {
  return (
    <li className={`
                    ${value === true ? `available` : `unavailable`}
                    ${selected && `selectedSize`}
                    `}
        id='size_item'
        onClick={() => {
          updateCurrentOrder('size', size)
          selectSize(size)
        }}
        >
          {size}
      </li>
  )
}




export default SizingGuide


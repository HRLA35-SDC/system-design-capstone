import React,{ useState } from 'react'
import ReadMoreModal from '../modals/ReadMoreModal.jsx'

const Description = ({currentShoe}) => {

  const [modal, setModal] = useState(false)

  const removeModal = () => { setModal(false)}

  return(
    <div id='sidebar_wrapper'>
      <div id='sidebar_description'>
        <p>The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story.</p>
        <ul>
          <li>Shown: {currentShoe.colorStyles.join('/')}</li>
          <li>Style: {currentShoe.productDetails.style}</li>
        </ul>
    </div>
      <button className='readmorebtn' onClick={()=>setModal(!modal)}>
        <span>Read More</span>
      </button>
      {modal && <ReadMoreModal removeModal={removeModal} currentShoe={currentShoe}/>}
    </div>
  )
}





export default Description;
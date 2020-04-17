import React from 'react'
import SlideDown from '../Portal&animation/SlideDown.jsx'
import downArrow  from '../../images/DownArrow.png'

//https://www.jayfreestone.com/writing/react-portals-with-hooks/

class SideBarAccordian extends React.Component{
  constructor(){
    super()
    this.state = {
      dropdown: false
    }
    this.setDropDown = this.setDropDown.bind(this)
  }



  setDropDown(){
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  componentDidMount(){
    const jaredsElement = document.getElementById('app_jared');
    const mountingPoint = document.getElementById('jaredAttach');
    mountingPoint.appendChild(jaredsElement)
  }

  render(){
    return(
      <div id='sidebar_accordian_wrapper'>

        <div className="jaredConnection" id='jaredAttach' >

          <button id='sidebar_accordian_button' onClick={this.setDropDown}>
            <div className='sidebar_accordian_button_2'>
              <div>Free Shipping & Returns</div>
              <div className='accordian-arrow'>
                  {this.state.dropdown ?
                    <img className="default-arrow-nl" src={downArrow} style={{ transform: "rotate(180deg)" }}></img> :
                    <img className="default-arrow-nl" src={downArrow}></img>
                  }
             </div>
            </div>
              <SlideDown show={this.state.dropdown}>
                <div>
                  <span>
                    Free standard shipping and free 30-day returns for Nike Members.
                    <u><a href='https://www.nike.com/help/a/free-shipping'>Learn More.</a></u>
                    <u><a href='https://www.nike.com/help/a/return-exceptions'>Return policy exceptions</a></u>
                  </span>
                </div>
                <ul id='accordian_return'>
                  <li>Standard / Arrives 2-4 Business Days</li>
                  <li>Two-Day / Arrives 2-3 Business Days</li>
                  <li>Next-Day / Arrives 1-2 Business Days</li>
                </ul>
                <u>
                  <a href='Pick-up available at select Nike Stores.'>
                  Pick-up available at select Nike Stores.
                  </a>
                </u>
              </SlideDown>
          </button>

        </div>

      </div>
    )
  }
}


export default SideBarAccordian
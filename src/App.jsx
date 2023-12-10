
import bell from './assets/Button.png'
import bag from './assets/Bag.png'
import avatar from './assets/Avatar.png'
import home from './assets/Home.png'
import icon1 from './assets/icon1.png'
import chevron from './assets/chevron-down.png'
import folder from './assets/folder-icon.png'
import combo from './assets/combo.png'
import graphbar from './assets/graphBar.png'
import person from './assets/person.png'
import shopbag from './assets/shop_bag.png'
import shopcart from './assets/shop-cart.png'
import heart from './assets/Heart.png'
import TopNav from './components/Navbar'
import FirstCard from './components/overview/FirstCard'
import './App.css'

function App() {
  

  return (
    <>
    <div className="main-container">
    <TopNav
        bell={bell}
        avatar={avatar}
        home={home}
      />
      <div className='container'>
        <div className='overview'>
        <FirstCard
          icon1={icon1}
          chevron={chevron}
          cardBottomTitle1="Sales"
          cardBottomTitle2="Volume"
          bottomValue1="₦0.00"
          bottomValue2="0"
          bottomPercentage1="+0.00"
        />
          <div className='dashboard-summary-card'>
            <div className="summary-container">
              <div className="summary-heading">
                <img src={person} alt='button' />
                <div className="filter">
                  <p>This week</p>
                  <img src={chevron} alt='' />
                </div>
              </div>
              <div className="summary-bottom">
                <div className="summary-bottom-item">
                    <span className='card-bottom-title'>Customers</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0</span>
                    <span className='bottom-percentage'>+0.00%</span>
                    </div>
                </div>
                <div className="summary-bottom-item">
                <span className='card-bottom-title'>Active</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0</span>
                    <span className='bottom-percentage'>+0.00%</span>
                    </div>
                </div>

              </div>
            </div>

          </div>
          <div className='dashboard-summary-card-extended'>
          <div className="summary-container">
              <div className="summary-heading">
                <img src={shopbag} alt='button' />
                <div className="filter">
                  <p>This week</p>
                  <img src={chevron} alt='' />
                </div>
              </div>
              <div className="summary-bottom">
                <div className="summary-bottom-item">
                <span className='card-bottom-title'>All orders</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0</span>
                    <span className='bottom-percentage'></span>
                    </div>
                </div>
                <div className="summary-bottom-item">
                <span className='card-bottom-title'>Pending</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0</span>
                    <span className='bottom-percentage'></span>
                    </div>
                </div>
                <div className="summary-bottom-item">
                <span className='card-bottom-title'>Completed</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0</span>
                    <span className='bottom-percentage'></span>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='main-content'>
          <div className="left">
            <div className="top">
              <div className="bar-chart">
              <div className="top-chart">
                  <div className="top-chart-heading">
                  <div className="summary-heading">
                  <span className="card-title">Marketing</span>
                  <div className="filter">
                    <p>This week</p>
                    <img src={chevron} alt='' />
                  </div>
              </div>
                    <div className="top-chart-heading-key-container">
                        <div className="key">
                        <div className='red-bullet'></div>
                          <span className='colored-text'>Acquisition</span>
                        </div>
                        <div className="key">
                        <div className='blue-bullet'></div>
                        <span className='colored-text'>Purchase</span>
                        
                        </div>
                        <div className="key">
                        <div className='yellow-bullet'></div>
                        <span className='colored-text'>Retention</span>
                        
                        </div>
                    </div>
                  </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="205" height="205" viewBox="0 0 205 205" fill="none">
                <path d="M205 102.5C205 159.109 159.109 205 102.5 205C45.8908 205 0 159.109 0 102.5C0 45.8908 45.8908 0 102.5 0C159.109 0 205 45.8908 205 102.5ZM56.7908 102.5C56.7908 127.744 77.2555 148.209 102.5 148.209C127.744 148.209 148.209 127.744 148.209 102.5C148.209 77.2555 127.744 56.7908 102.5 56.7908C77.2555 56.7908 56.7908 77.2555 56.7908 102.5Z" fill="#EEF0FA"/>
                </svg>
                </div>
              </div>
                
                <div className="top-right">
                  <div className="top-right-summary-card-lodin">
                  <div className="summary-container">
              <div className="summary-heading">
                <img src={folder} alt='button' />
                <div className="filter">
                  
                </div>
              </div>
              <div className="summary-bottom">
                <div className="summary-bottom-item">
                <span className='card-bottom-title white'>All Products</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value white'>0</span>
                    <span className='bottom-percentage white'>+0.00%</span>
                    </div>
                </div>
                <div className="summary-bottom-item">
                <span className='card-bottom-title white'>Active</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value white'>0</span>
                    <span className='bottom-percentage white'>+0.00%</span>
                    </div>
                </div>

              </div>
            </div>
                  </div>
                  <div className='top-right-summary-card'>
            <div className="summary-container">
              <div className="summary-heading">
                <img src={shopcart} alt='button' />
                <div className="filter">
                  <p>This week</p>
                  <img src={chevron} alt='' />
                </div>
              </div>
              <div className="summary-bottom">
                <div className="summary-bottom-item">
                <span className='card-bottom-title'>Abondaned cart</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0</span>
                    <span className='bottom-percentage'>0.00%</span>
                    </div>
                </div>
                <div className="summary-bottom-item">
                <span className='card-bottom-title'>Completed</span>
                    <div className='summary-bottom-details'>
                    <span className='bottom-value'>0%</span>
                    <span className='bottom-percentage'></span>
                    </div>
                </div>

              </div>
            </div>

          </div>
                </div>
            </div>
            <div className="bottom">
              <div className="chart">
                <div className="summary-heading">
                  <div className="summary-title">
                  <span className='card-title'>Summary</span>
                  <img src={combo} alt='' />
                  </div>
                  <div className="summary-filter">
                  <div className="filter black">
                  <p>Last 7 days</p>
                  <img src={chevron} alt='' />
                </div>
                  </div>
                </div>
                <div className="graphbar">
                  <img src={graphbar} className='graphbar-image' />
                </div>
              </div>

            </div>
          </div>
          <div className="order-summary">
              <div className="order-summary-content">
                <span className='right-title'>Recent orders</span>
                <div className="empty-state">
                  <div className="icon-container">
                    <img src={bag} alt=''className='bag-image' />  
                  </div>
                  <div className="empty-state-content">
                    <div className="description">
                      <span className='no-orders'>No Orders Yet ?</span>
                      <span className='no-orders-description'>Add products to your store and start selling to see orders here.</span>
                    </div>
                    <div className="button">
                      <button className='button'>
                        <img src={heart} className='heart-image' />
                        Create product
                        </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App

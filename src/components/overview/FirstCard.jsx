function FirstCard({ icon1, chevron, cardBottomTitle1, cardBottomTitle2, bottomValue1, bottomValue2, bottomPercentage1 }) {
    return (
      <div className="dashboard-summary-card">
        <div className="summary-container">
          <div className="summary-heading">
            <img src={icon1} alt="icon" />
            <div className="filter">
              <p>{cardBottomTitle1}</p>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
          <div className="summary-bottom">
            <div className="summary-bottom-item">
              <span className="card-bottom-title">{cardBottomTitle1}</span>
              <div className="summary-bottom-details">
                <span className="bottom-value">{bottomValue1}</span>
                <span className={`bottom-percentage ${bottomPercentage1 > 0 ? "positive" : "negative"}`}>{bottomPercentage1}%</span>
              </div>
            </div>
            <div className="summary-bottom-item">
              <span className="card-bottom-title">{cardBottomTitle2}</span>
              <div className="summary-bottom-details">
                <span className="bottom-value">{bottomValue2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FirstCard;
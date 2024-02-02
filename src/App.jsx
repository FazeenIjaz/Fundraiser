import React, { useState } from "react";
import euro from "./assets/euro.svg";
import visaLogo from "./assets/visa-logo.png";
import mcLogo from "./assets/mastercard-logo.png";
import ppLogo from "./assets/paypal-logo.png";
import frLogo from "./assets/fundraising-regulator-logo.png";
import ddLogo from "./assets/direct-debit-logo.png";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(
    selectedTab === "monthly" ? 12 : 40
  );
  const [customAmount, setCustomAmount] = useState("");
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setSelectedAmount(tab === "monthly" ? 12 : 40);
    setCustomAmount("");
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };
  const handleDonate = () => {
    const finalAmount = customAmount || selectedAmount;
    alert(
      `Donating $${finalAmount} ${
        selectedTab === "monthly" ? "monthly" : "once"
      }`
    );
    setCustomAmount("");
    setSelectedAmount(selectedTab === "monthly" ? 12 : 40);
  };

  return (
    <div className="wrapper">
      <div className="">
        <div className="tabs__wrapper">
          <button
            onClick={() => handleTabChange("monthly")}
            className={`tab__button ${
              selectedTab === "monthly" ? "active" : ""
            }`}
          >
            Donate Monthly
          </button>
          <button
            onClick={() => handleTabChange("once")}
            className={`tab__button ${selectedTab === "once" ? "active" : ""}`}
          >
            Donate Once
          </button>
        </div>
      </div>

      <div className="content__wrapper">
        <div className="content">
          <p>
            I would like to make a{" "}
            {selectedTab === "monthly" ? "monthly" : "once-off"} donation of.
          </p>
          <div className="amount__btn_wrapper">
            {(selectedTab === "monthly"
              ? [6, 12, 18, 30]
              : [10, 40, 75, 100]
            ).map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`${
                  amount === selectedAmount ? "selected" : ""
                } amount__btn `}
              >
                <img src={euro} alt="" className="currency-symbol" />{" "}
                {amount === "other amount" ? "Other Amount" : amount}
              </button>
            ))}
            <button
              onClick={() => handleAmountSelect("other amount")}
              className={`${
                "other amount" === selectedAmount ? "selected" : ""
              } amount__btn other-amount__btn`}
            >
              <img src={euro} alt="" className="currency-symbol" /> Other Amount
              {selectedAmount === "other amount" && (
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              )}
            </button>

            <button onClick={handleDonate} className="amount__btn donate__btn">
              Donate <img src={euro} alt="" />
              {customAmount || selectedAmount}{" "}
              {selectedTab === "monthly" ? "monthly" : "today"}
            </button>
          </div>

          <div className="donation__description-wrapper">
            <p className="donation__description">
              <img src={euro} alt="" />{" "}
              {selectedTab === "monthly"
                ? `${selectedAmount} Could help answer an emergency call to our Animal Rescue Line`
                : `${selectedAmount} Could help an Animal Rescue Team take on an urgent animal rescue `}
            </p>
          </div>
        </div>

        <div className="footer_wrapper">
          <>
            {selectedTab === "monthly" ? (
              <footer>
                <div>
                  <button onClick={() => handleTabChange("once")}>
                    I would like to make a once-off donation
                  </button>
                </div>
                <div className="footer__desc">
                  <div className="">
                    <p>
                      All direct debts are controlled by direct debt guarantee
                    </p>
                  </div>
                  <div className="monthly_footer-logo-wrapper">
                    <img src={ddLogo} alt="" className="footer-logo" />
                    <img src={frLogo} alt="" className="footer-logo" />
                  </div>
                </div>
              </footer>
            ) : (
              <footer>
                <div>
                  <button onClick={() => handleTabChange("monthly")}>
                    I would like to give monthly
                  </button>
                </div>
                <div className="footer-logo-wrapper">
                  <img src={visaLogo} alt="" className="footer-logo" />
                  <img src={mcLogo} alt="" className="footer-logo" />
                  <img src={ppLogo} alt="" className="footer-logo" />
                  <img src={frLogo} alt="" className="footer-logo" />
                </div>
              </footer>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
export default App;

import React, { useState } from "react";
import "./App.css";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("Annually");

  const plans = [
    {
      title: "Basic",
      priceMonthly: 19.99,
      priceAnnually: 199.99,
      storage: "500 GB",
      users: "2 Users",
      transfer: "Send up to 3 GB",
    },
    {
      title: "Professional",
      priceMonthly: 24.99,
      priceAnnually: 249.99,
      storage: "1 TB",
      users: "5 users",
      transfer: "Send up tp 10 GB",
    },
    {
      title: "Master",
      priceMonthly: 39.99,
      priceAnnually: 399.99,
      storage: " 2TB",
      users: "10 users",
      transfer: "Send up to 20 GB",
    },
  ];

  return (
    <div className="pricing-container">
      <div className="toggle-container">
        <h1>Our pricing</h1>
        <div className="toggle">
          <span className={billingCycle === "Annually" ? "active" : ""}>
            Annually
          </span>
          <button
            onClick={() =>
              setBillingCycle(
                billingCycle === "Annually" ? "Monthly" : "Annually"
              )
            }
            className={billingCycle === "Annually" ? "annually" : "monthly"}
          ></button>
          <span className={billingCycle === "Monthly" ? "active" : ""}>
            Monthly
          </span>
        </div>
      </div>
      <div className="plans">
        {plans.map((plan) => (
          <div
            className={`plan ${
              plan.title === "Professional" ? "highlighted" : ""
            }`}
            key={plan.title}
          >
            <h2>{plan.title}</h2>
            <h3>
              $
              {billingCycle === "Annually"
                ? plan.priceAnnually
                : plan.priceMonthly}
            </h3>
            <p className="dark-gray-text">{plan.storage} Storage</p>
            <p className="dark-gray-text">{plan.users} Allowed</p>
            <p className="dark-gray-text">{plan.transfer}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

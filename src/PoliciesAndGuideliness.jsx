import React from "react";
import VolunteerCommitmentIcon from "./assets/Volunteer Commitment.png";
import FinancialIcon from "./assets/Financial Policies.png";
import EthicsIcon from "./assets/Ethical Standards.png";
import LeadershipIcon from "./assets/Leadership Tenure.png";
import AmendmentsIcon from "./assets/Amendments and Accountability.png";
import BackgroundCheckIcon from "./assets/Background Checks.png";

import "./styles/PoliciesAndGuidelines.css";

function PoliciesAndGuidelines() {
  const policies = [
    {
      icon: VolunteerCommitmentIcon,
      title: "Volunteer Commitment",
      items: [
        "Each family contributes 20 volunteer hours annually.",
        "Failure to meet this requirement may affect admission for the following year.",
      ],
    },
    {
      icon: FinancialIcon,
      title: "Financial Policies",
      items: [
        "Matching funds from corporations are utilized for non-operating expenses.",
        "Annual budgets prioritize transparency and fiscal responsibility.",
      ],
    },
    {
      icon: EthicsIcon,
      title: "Ethical Standards",
      items: [
        "Leaders and members must demonstrate high commitment, collaboration, and ethics.",
        "Conflicts are resolved transparently, with the Board intervening if necessary.",
      ],
    },
    {
      icon: LeadershipIcon,
      title: "Leadership Tenure",
      items: [
        "Committee members: 2 years.",
        "Committee leads and academic principals: 2 years.",
        "Board members: 3 years.",
      ],
    },
    {
      icon: AmendmentsIcon,
      title: "Amendments and Accountability",
      items: [
        "Any donor can propose amendments to by-laws.",
        "The Board maintains ultimate accountability for legal, financial, and operational matters.",
      ],
    },
    {
      icon: BackgroundCheckIcon,
      title: "Background Checks",
      items: [
        "Required for all volunteers participating in on-premises or contact-based roles.",
      ],
    },
  ];

  return (
    <div className="policies-and-guidelines-wrapper" data-aos="fade-up">
      {/* Title Section */}
      <div className="policies-title-wrapper">
        <h1 className="policies-title">
          Policies <span className="guidelines-highlight">and Guidelines</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="policies-card-container">
        {policies.map((policy, index) => (
          <div key={index} className={`policy-card policy-card-${index}`}>
            <img
              src={policy.icon}
              alt={policy.title}
              className={`policy-icon policy-icon-${index}`}
            />
            <h3 className={`policy-heading policy-heading-${index}`}>
              {policy.title}
            </h3>
            <ul className={`policy-list policy-list-${index}`}>
              {policy.items.map((item, i) => (
                <li key={i} className={`policy-list-item policy-list-item-${index}-${i}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PoliciesAndGuidelines;

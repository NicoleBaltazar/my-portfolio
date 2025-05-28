import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {Icon} from "@iconify/react";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline flex items-center gap-3"
                name={skills.skillName}
              >
                {/* <i className={skills.iconifyIcon}></i> */}
                <Icon
                  icon={skills.iconifyIcon}
                  style={{color: "#6B7280", width: "50px", height: "55px"}}
                />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

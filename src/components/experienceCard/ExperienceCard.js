// import React, {useState, createRef} from "react";
// import "./ExperienceCard.scss";
// import ColorThief from "colorthief";

// export default function ExperienceCard({cardInfo, isDark}) {
//   const [colorArrays, setColorArrays] = useState([]);
//   const imgRef = createRef();

//   function getColorArrays() {
//     const colorThief = new ColorThief();
//     setColorArrays(colorThief.getColor(imgRef.current));
//   }

//   function rgb(values) {
//     return typeof values === "undefined"
//       ? null
//       : "rgb(" + values.join(", ") + ")";
//   }

//   const GetDescBullets = ({descBullets, isDark}) => {
//     return descBullets
//       ? descBullets.map((item, i) => (
//           <li
//             key={i}
//             className={isDark ? "subTitle dark-mode-text" : "subTitle"}
//           >
//             {item}
//           </li>
//         ))
//       : null;
//   };

//   return (
//     <div className={isDark ? "experience-card-dark" : "experience-card"}>
//       <div style={{background: rgb(colorArrays)}} className="experience-banner">
//         <div className="experience-blurred_div"></div>
//         <div className="experience-div-company">
//           <h5 className="experience-text-company">{cardInfo.company}</h5>
//         </div>

//         <img
//           crossOrigin={"anonymous"}
//           ref={imgRef}
//           className="experience-roundedimg"
//           src={cardInfo.companylogo}
//           alt={cardInfo.company}
//           onLoad={() => getColorArrays()}
//         />
//       </div>
//       <div className="experience-text-details">
//         <h5
//           className={
//             isDark
//               ? "experience-text-role dark-mode-text"
//               : "experience-text-role"
//           }
//         >
//           {cardInfo.role}
//         </h5>
//         <h5
//           className={
//             isDark
//               ? "experience-text-date dark-mode-text"
//               : "experience-text-date"
//           }
//         >
//           {cardInfo.date}
//         </h5>
//         <p
//           className={
//             isDark
//               ? "subTitle experience-text-desc dark-mode-text"
//               : "subTitle experience-text-desc"
//           }
//         >
//           {cardInfo.desc}
//         </p>
//         <ul>
//           <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
//         </ul>
//       </div>
//     </div>
//   );
// }

//===================================================================
import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        {/* LEFT COLUMN */}
        <div className="timeline-left">
          <h3
            className={
              isDark ? "timeline-company dark-mode-text" : "timeline-company"
            }
          >
            {cardInfo.company}
          </h3>
          <h4
            className={
              isDark ? "timeline-role dark-mode-text" : "timeline-role"
            }
          >
            {cardInfo.role}
          </h4>
          <p
            className={
              isDark ? "timeline-date dark-mode-text" : "timeline-date"
            }
          >
            {cardInfo.date}
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="timeline-right">
          {cardInfo.desc && (
            <p
              className={
                isDark ? "timeline-desc dark-mode-text" : "timeline-desc"
              }
            >
              {cardInfo.desc}
            </p>
          )}

          {cardInfo.descBullets && (
            <ul
              className={
                isDark ? "timeline-desc dark-mode-text" : "timeline-bullets"
              }
            >
              {cardInfo.descBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// // src/containers/StartupProjects/ProjectModal.js
// import React from "react";
// import "./ProjectModal.scss"; // you can style this as needed

// export default function ProjectModal({project, onClose, isDark}) {
//   if (!project) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <button className="close-button" onClick={onClose}>
//           ×
//         </button>
//         <h2 className={isDark ? "dark-mode modal-title" : "modal-title"}>
//           {project.projectName}
//         </h2>
//         <img
//           src={project.image}
//           alt={project.projectName}
//           className="modal-image"
//         />
//         <p
//           className={
//             isDark ? "dark-mode modal-description" : "modal-description"
//           }
//         >
//           {project.projectFullDesc}
//         </p>
//         {/* Add more fields like tech stack, timeline, etc. if needed */}
//       </div>
//     </div>
//   );
// }

// ===================================================================================================================

import React from "react";
import "./ProjectModal.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectModal({project, onClose, isDark}) {
  console.log("Project", project);
  console.log("Images", project.images);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-container" onClick={e => e.stopPropagation()}>
          {/* Top Row: Carousel */}
          <div className="modal-carousel">
            {Array.isArray(project.carouselImages) &&
            project.carouselImages.length > 0 ? (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{delay: 3000}}
                loop
              >
                {project.carouselImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="modal-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.image || project.carouselImages?.[0]}
                alt={project.projectName}
                className="modal-img"
              />
            )}
          </div>

          {/* Bottom Row: Details */}
          <div className="modal-details">
            <h2 className={isDark ? "dark-mode modal-title" : "modal-title"}>
              {project.projectName}
            </h2>
            {/* <p>{project.projectFullDesc}</p> */}
            <div dangerouslySetInnerHTML={{__html: project.projectFullDesc}} />
            <p>{project.roleDesc}</p>
            <ul className="modal-info-list">
              <li>
                <strong>Type:</strong> {project.type}
              </li>
              <li>
                <strong>Role:</strong> {project.role}
              </li>
              <li>
                <strong>Languages:</strong> {project.languages}
              </li>
              <li>
                <strong>Live URL:</strong>{" "}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveUrl}
                  </a>
                ) : (
                  "N/A"
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//=======================================================================================================================

// <div className="modal-grid">
//         {/* Left: Carousel */}
//         <div className="modal-carousel">
//           {Array.isArray(project.carouselImages) &&
//           project.carouselImages.length > 0 ? (
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               navigation
//               autoplay={{delay: 3000}}
//               loop
//             >
//               {project.carouselImages.map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <img
//                     src={img}
//                     alt={`Slide ${i + 1}`}
//                     className="modal-img"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           ) : (
//             <img
//               src={project.image || project.carouselImages?.[0]}
//               alt={project.projectName}
//               className="modal-img"
//             />
//           )}
//         </div>

//         {/* Right: Info */}
//         <div className="modal-details">
//           <h2 className={isDark ? "dark-mode modal-title" : "modal-title"}>
//             {project.projectName}
//           </h2>
//           <p className={isDark ? "dark-mode" : ""}>
//             {project.projectFullDesc}
//           </p>
//           <ul className="modal-info-list">
//             <li>
//               <strong>Type:</strong> {project.type}
//             </li>
//             <li>
//               <strong>Role:</strong> {project.role}
//             </li>
//             <li>
//               <strong>Languages:</strong> {project.languages}
//             </li>
//             <li>
//               <strong>Live URL:</strong>{" "}
//               {project.liveUrl ? (
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {project.liveUrl}
//                 </a>
//               ) : (
//                 "N/A"
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>

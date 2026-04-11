import React, { useEffect, useRef } from "react";

import img from "../../assets/images/img.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

const rawProjects = [
  { title: "Neon Dreams", category: "Photography", img },
  { title: "Lava Cap", category: "Product", img: img4 },
  { title: "Summer Sip", category: "Advertising", img: img2 },
  { title: "Eco Threads", category: "Fashion", img: img3 },
  { title: "Neon Dreams", category: "Photography", img },
  { title: "Lava Cap", category: "Product", img: img4 },
  { title: "Eco Threads", category: "Fashion", img: img3 },
  { title: "Summer Sip", category: "Advertising", img: img2 },
  { title: "Eco Threads", category: "Fashion", img: img3 },
];

const projects = [...rawProjects, ...rawProjects].map((p, i) => ({
  ...p,
  id: i,
}));

const Gallery3DCarousel = () => {
  const carouselRef = useRef(null);

  const rotationAngleRef = useRef(0);
  const isHoveringRef = useRef(false); 
  
  const rotationVelocityRef = useRef(-0.15); 

  const dragInfo = useRef({
    isDragging: false,
    lastX: 0, 
  });

  const cardCount = projects.length;
  const theta = 360 / cardCount;
  const centerTranslateZ = -300;

  const getSpreadDistance = () => {
    const w = window.innerWidth;
    if (w >= 2560) return 1050;
    if (w >= 1920) return 1000;
    if (w >= 1440) return 1000;
    if (w >= 1024) return 1000;
    if (w >= 768) return 1000;
    return 650;
  };

  /* ================= ANIMATION LOOP ================= */
  useEffect(() => {
    const animate = () => {
      
      if (!dragInfo.current.isDragging && !isHoveringRef.current) {
        rotationAngleRef.current += rotationVelocityRef.current;
      }

      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateZ(${centerTranslateZ}px) rotateY(${rotationAngleRef.current}deg)`;
      }

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  /* ================= DRAG HANDLERS (INVERSED) ================= */
  const handleDragStart = (clientX) => {
    dragInfo.current.isDragging = true;
    dragInfo.current.lastX = clientX;
  };

  const handleDragMove = (clientX) => {
    if (!dragInfo.current.isDragging) return;

    const deltaX = clientX - dragInfo.current.lastX;
    
    rotationAngleRef.current -= deltaX * 0.2; 

    const newVelocity = -deltaX * 0.05; 
    
    if (Math.abs(newVelocity) > 0.01) {
        rotationVelocityRef.current = Math.max(Math.min(newVelocity, 0.5), -0.5);
    }

    dragInfo.current.lastX = clientX;
  };

  const handleDragEnd = () => {
    dragInfo.current.isDragging = false;
    
    if (Math.abs(rotationVelocityRef.current) < 0.05) {
        rotationVelocityRef.current = rotationVelocityRef.current > 0 ? 0.15 : -0.15;
    }
  };

  return (
    <div
      className="h-80 sm:h-[450px] md:h-[500px] w-full flex justify-center items-center relative overflow-hidden"
      style={{ perspective: "1000px", cursor: "default" }}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      // Hover stop
      onMouseEnter={() => { isHoveringRef.current = true; }}
      onMouseLeave={() => { isHoveringRef.current = false; handleDragEnd(); }}
      // Touch Support
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      <div
        ref={carouselRef}
        className="relative w-[220px] h-[300px] sm:w-[280px] sm:h-[340px] md:w-[340px] md:h-[400px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {projects.map((project, index) => {
          const angle = theta * index;
          const spread = getSpreadDistance();

          return (
            <div
              key={project.id}
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg select-none"
              style={{
                backfaceVisibility: "hidden",
                transform: `rotateY(${angle}deg) translateZ(-${spread}px)`,
                pointerEvents: "none" 
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable="false" 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery3DCarousel;
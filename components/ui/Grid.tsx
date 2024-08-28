import React from "react";
import {BentoGrid, BentoGridItem} from "./BentoGrid";
import {gridItems} from "@/data";
function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20 p-2">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;

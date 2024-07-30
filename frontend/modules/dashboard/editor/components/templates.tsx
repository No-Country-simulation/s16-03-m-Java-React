import Image from "next/image";

import banner1 from "../../../../public/images/banner1.png";
import banner2 from "../../../../public/images/banner2.png";
import banner3 from "../../../../public/images/banner3.png";
import banner4 from "../../../../public/images/banner4.png";

const templates = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Image src={banner1} alt="Template 1" />
      <Image src={banner2} alt="Template 2" />
      <Image src={banner3} alt="Template 3" />
      <Image src={banner4} alt="Template 4" />
    </div>
  );
};

export default templates;

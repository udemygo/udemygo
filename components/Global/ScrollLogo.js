import Image from "next/image";

const images = [
  "amrita.webp",
  "amity.webp",
  "dpu.webp",
  "gla.webp",
  "nmims.webp",
  "amu.webp",
  "lpu.webp",
  "su.webp",
  "un.webp",
  "upes.webp",
  "vgu.webp",
];

const ScrollLogo = () => {
  return (
    <div>
      <div className=" z-0 w-fit flex items-center justify-around  h-16  gap-3 mt-5 ">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white w-20 h-10 px-4 py-2 rounded-4xl animate-scroll-logo  "
          >
            <Image
              width={500}
              height={500}
              src={`/unilogos/${item}`}
              alt=""
              className=" object-fill h-full w-full  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollLogo;

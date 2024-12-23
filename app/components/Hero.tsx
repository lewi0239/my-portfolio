import Image from "next/image";
const HeroBanner = () => {
  return (
    <div className="bg-cover bg-center h-[90vh] flex items-center justify-center py-10 bg-white p-4">
      <div className="max-w-screen-md text-center text-black">
        <div className=" flex justify-center">
          <Image
            src="/images/profile.jpg"
            alt="brodie's image"
            width={160}
            height={160}
            className="rounded-full mb-6 object-cover shadow-lg justify-center"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">
          Hi, I’m Brodie Lewis. I build mobile and web applications that solve
          real-world problems.
        </p>
        <a
          href="#portfolio"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View My Projects
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;

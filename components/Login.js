import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className=" flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className=" object-cover rounded-full"
          src="/images/nft.png"
          height={220}
          width={220}
          objectFit="cover"
        />
        <button
          onClick={authenticate}
          className=" bg-indigo-700 rounded-lg p-5 font-bold animate-pulse "
        >
          log in to the metaverse
        </button>
      </div>
      <div className="w-full h-screen overflow-y-scroll bg-gradient-to-b from-black to-indigo-600 overflow-hidden">
        {/* <Image
          src="/images/wallpaper4.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import Marquee from 'react-marquee-slider';
import 'tailwindcss/tailwind.css';
import sui from '../assets/sui.svg';
import arbitrum from '../assets/arbitrum.svg';
import cosmos from '../assets/cosmos.svg';
import ethereum from '../assets/ethereum.svg';
import optimism from '../assets/optimism.svg';
import solana from '../assets/solana.svg';
import vector from '../assets/vector.svg';
const networks = [
  { name: 'Ethereum', logo: ethereum },
  { name: 'Solana', logo: solana },
  { name: 'Aptos', logo: vector },
  { name: 'Cosmos', logo: cosmos },
  { name: 'Optimism', logo: optimism },
  { name: 'Arbitrum', logo: arbitrum },
  { name: 'Sui', logo: sui },
  // Add more networks as needed
];

const NetworksCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <h2 className="text-l md:text-xl font-extrabold	 py-5 text-center	">
        ALL NETWORKS YOU NEED. IN ONE PLACE
      </h2>
      <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}>
        {networks.map((network, index) => (
          <div
            key={index}
            className="mx-4 flex flex-col items-center justify-center bg-transparent border rounded-lg"
            style={{ width: '200px', height: '200px' }} // Fixed width and height for uniformity
          >
            <img
              src={network.logo}
              alt={network.name}
              className="h-16 w-16 object-contain"
            />
            <p className="mt-2 text-lg font-medium text-black text-center">
              {network.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default NetworksCarousel;

// // src/components/Solutions.js
// import React from 'react';

// const Solutions = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-l md:text-xl font-extrabold	 py-5 text-center	">
//           WE CREATE CUSTOM SOLUTIONS
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
//             <p>
//               Get access to our private high-performance RPCs and archive APIs.
//             </p>
//           </div>
//           <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Staking</h3>
//             <img
//               src="/icons/staking.png"
//               alt="Staking"
//               className="mx-auto mb-4"
//             />
//             <p>
//               Stake with us and enjoy the most reliable rewards and staking
//               provisioning.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Guides</h3>
//             <p>We make crypto easy for the community.</p>
//           </div>
//           <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Snapshots</h3>
//             <p>
//               We provide snapshots of desired networks so you can sync the node
//               in a few moments.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Development</h3>
//             <p>We develop bots, dashboards, and monitoring for your needs.</p>
//           </div>
//           <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Testnets</h3>
//             <img
//               src="/icons/testnets.png"
//               alt="Testnets"
//               className="mx-auto mb-4"
//             />
//             <p>
//               Do you have an ongoing testnet? We would love to bring our
//               expertise and participate.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;
// src/components/Solutions.js
// src/components/Solutions.js

import restaking from "../assets/restaking.svg";
import testnet from "../assets/testnet.svg";
import guides from "../assets/guides.svg";
import staking from "../assets/staking.svg";

const Solutions = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-l md:text-xl font-extrabold py-5 text-center">
          WE CREATE CUSTOM SOLUTIONS
        </h2>
        <div className="grid grid-cols-12 gap-4">
          {/* Infrastructure */}
          <div className="bg-white p-8 rounded-lg shadow-lg col-span-3">
            <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
            <p>
              Get access to our private high-performance RPCs and archive APIs.
            </p>
          </div>
          {/* Staking */}
          <div
            className="bg-blue-500	 text-white p-8 rounded-lg shadow-lg col-span-5 row-span-1 flex flex-col items-startjustify-between"
            style={{
              backgroundImage: `url(${staking})`,
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",

              backgroundSize: "40% 70%",
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Staking</h3>
            <p>
              Stake with us and enjoy the most reliable rewards and staking
              provisioning.
            </p>
          </div>
          {/* Guides */}
          <div
            className="bg-white p-5 rounded-lg shadow-lg col-span-4 flex flex-col items-startjustify-between"
            style={{
              backgroundImage: `url(${guides})`,
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "78% ",
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Guides</h3>
            <p>We make crypto easy for the community.</p>
          </div>
          {/* Snapshots */}
          <div
            className="bg-blue-400 text-white p-8 rounded-lg shadow-lg col-span-3 flex flex-col justify-between"
            style={{
              backgroundImage: 'url("/path/to/snapshots-bg.png")',
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Snapshots</h3>
            <p>
              You want to spin up the node but don't want to wait a lot of time.
              Feel free to contact us and we will provide you a snapshot of a
              desired network , so you can sync the node in a few moments.
            </p>
          </div>
          {/* Development */}{" "}
          <div className="grid grid-rows-1 col-span-4 gap-2">
            <div
              className="bg-blue-600 text-white p-8 rounded-lg shadow-lg col-span-4 row-span-1 flex flex-col justify-between"
              style={{
                backgroundImage: 'url("/path/to/development-bg.png")',
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p>We develop bots, dashboards, and monitoring for your needs.</p>
            </div>

            {/* Restaking */}
            <div
              className="bg-transparent  p-8 rounded-lg shadow-lg col-span-4 row-span-1 flex flex-col items-startjustify-between"
              style={{
                backgroundImage: `url(${restaking})`,
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20% 50%",
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Restaking</h3>
              <p>Want to multiply your rewards? Ask us how!</p>
            </div>
          </div>
          {/* Testnets */}
          <div
            className="bg-gray-200 p-8 rounded-lg shadow-lg col-span-5 flex flex-col items-startjustify-between "
            style={{
              backgroundImage: `url(${testnet})`,
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80% 50%",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 ">Testnets</h3>
            <p>
              Do you have an ongoing testnet? We would love to bring our
              expertise and participate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

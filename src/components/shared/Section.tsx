import React from 'react';

const Section = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-10 flex justify-center gap-2"> {/* Reduced gap */}
      <div className="flex flex-col items-center">
        <div className="w-29 h-45 bg-gray-100 rounded-lg shadow-md p-1"> {/* Card styling */}
          {/* Card content */}
          <h2 className="text-lg font-semibold"></h2>
          <p></p>
          <img src="/Top Products.png" className="w-81 h-71" alt="Top Products" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-80 h-100 bg-gray-100 rounded-lg shadow-md p-1"> {/* Card styling */}
          {/* Card content */}
          <h2 className="text-lg font-semibold"></h2>
          <p></p>
          <img src="/Sales Mapping.png" className="w-81 h-100" alt="Sales Mapping" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-81 h-100 bg-gray-100 rounded-lg shadow-md p-1"> {/* Card styling */}
          {/* Card content */}
          <h2 className="text-lg font-semibold"></h2>
          <p></p>
          <img src="/Volume.png" className="w-81 h-100" alt="Volume" />
        </div>
      </div>
    </div>
  );
};

export default Section;




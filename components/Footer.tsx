import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 mt-auto text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-l text-center md:text-left mb-4 md:mb-0">
          <p>
            COPYRIGHT © 2024 NUN BUT FAMILY - ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="text-l text-center md:text-right">
          <p>
            Designed By: Bruce Sailes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




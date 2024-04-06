import React, { useEffect, useState } from 'react'; // Import useState here

const CalendlyWidget = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsLoading(false); // Set loading to false when the script is loaded
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {isLoading && <p className="text-center text-white text-2xl">Loading...</p>} {/* Show this while loading */}
      <div className={`calendly-inline-widget ${isLoading ? 'hidden' : ''}`} data-url="https://calendly.com/nbfamilyinc" style={{ minWidth: 320, height: 700 }}></div>
    </div>
  );
};

export default CalendlyWidget;

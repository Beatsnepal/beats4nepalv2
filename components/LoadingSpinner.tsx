
import React, { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;

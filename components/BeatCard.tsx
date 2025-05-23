
import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';

interface Beat {
  id: number;
  name: string;
  key: string;
  bpm: number;
  price: number;
  phone: string;
  uploader: string;
  coverArt: string;
  audioUrl: string;
  producerPhone: string;
}

interface BeatCardProps {
  beat: Beat;
  onDelete?: () => void;
}

export const BeatCard: React.FC<BeatCardProps> = ({ beat, onDelete }) => {
  const cardStyle =
    "bg-white shadow-lg rounded-2xl p-4 md:p-6 text-gray-900 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 hover:shadow-xl";

  const storedPhone = typeof window !== 'undefined' ? localStorage.getItem('userPhone') : null;
  const isOwner = beat.phone === storedPhone;

  return (
    <div className={cardStyle}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-2xl transition-all duration-200 w-60 flex-shrink-0 sm:w-full">
        <div className="aspect-square w-full bg-blue-100 relative">
          <img
            src={beat.coverArt || "/images/default-art.png"}
            alt="Beat Cover"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <div className="p-4 flex flex-col space-y-1">
          <h2 className="text-lg font-semibold truncate">{beat.name}</h2>
          <p className="text-sm text-gray-600 truncate">Key: {beat.key}</p>
          <p className="text-sm text-gray-500 truncate">BPM: {beat.bpm}</p>
        </div>

        <div className="px-4 pb-4 flex justify-between items-center">
          <span className="text-blue-700 font-bold text-lg">${beat.price}</span>
          {isOwner ? (
            <span className="text-green-600 text-sm">Your Beat</span>
          ) : (
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

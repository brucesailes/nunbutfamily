import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import merchandiseData from '../data/hoodies.json'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Define TypeScript interface for merchandise items
interface MerchItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrls: string[]; 
  category: string;
  sizes: string[]; 
  colors: string[]; 
  selectedSize: string;
  selectedColor: string;
}


export default function Hoodies() {
  const [hoodies, setHoodies] = useState<MerchItem[]>([]);
  const { addToCart } = useCart(); 
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});
  const [selectedColors, setSelectedColors] = useState<{[key: number]: string}>({});
  const { updateQuantity } = useCart();
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});


  useEffect(() => {
    const fetchMerchandise = async () => {
      const extendedHoodies = merchandiseData.hoodies.filter(item => item.category === 'Hoodie').map(item => ({
        ...item,
        selectedSize: '',
        selectedColor: '',
      }));
      setHoodies(extendedHoodies);
    };
    fetchMerchandise();
  }, []);


  function handleSizeChange(id: number, value: string) {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [id]: value,
    }));
  }

  function handleColorChange(id: number, value: string) {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [id]: value,
    }));
  }

 
  const handleAddToCart = (hoodies: MerchItem, sizes: string, colors: string) => {
    // Ensure you have the selected size and color for the item
    const size = selectedSizes[hoodies.id];
    const color = selectedColors[hoodies.id];
    const itemKey = `${hoodies.id}-${sizes}-${colors}`;

    setAddedToCart(prev => ({ ...prev, [itemKey]: true }));

    if (size && color) {
      const newItem = {
        ...hoodies,
        selectedSize: size,
        selectedColor: color,
        quantity: 1, // This assumes adding one item at a time
        imageUrls: hoodies.imageUrls[0], // Assuming the first image is the main image
      };
      
      setTimeout(() => {
        setAddedToCart(prev => ({ ...prev, [itemKey]: false }));
      }, 3000);

      addToCart(newItem); // Use the context's addToCart function
    } else {
      // Optionally handle the case where size or color is not selected
      console.error("Size or color not selected");
    }
  };


  const handleQuantityChange = (id: number, quantity: string) => {
    const newQuantity = parseInt(quantity, 10);
    updateQuantity(id, isNaN(newQuantity) ? 0 : newQuantity);
  };


  const { cartItems } = useCart();

  const getQuantityInCart = (id: number, size: string, color: string) => {
    const itemKey = `${id}-${size}-${color}`;
    const item = cartItems.find(item => item.id === id && item.selectedSize === size && item.selectedColor === color);
    return item ? item.quantity : 0;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // Add any other settings you need for the slider
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {hoodies.map((hoodie) => (
          <div key={hoodie.id} className="p-10 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <h1 className="text-2xl text-center py-10 relative overflow-hidden transition-transform transform hover:scale-105">NBF HOODIES</h1>
            <Slider {...settings}>
            {/* Map through imageUrls to display all images */}
            {hoodie.imageUrls.map((url, index) => (
              <div key={index} className="mb-4">
                <Image 
                  src={url} 
                  alt={`${hoodie.name} design ${index + 1}`} 
                  width={500} // Adjust based on your layout needs
                  height={500} // Adjust based on your layout needs
                  priority
                />
              </div>
            ))}
            </Slider>
               {/* Size selection */}
            <div className="mt-4 text-black">
              <label htmlFor="size-select" className="block font-bold mb-2">Size:</label>
              <select
                 id={`size-select-${hoodie.id}`}
                 aria-label="Select Size" 
                 value={selectedSizes[hoodie.id] || ''}
                 onChange={(e) => handleSizeChange(hoodie.id, e.target.value)}
                 className="border rounded p-2 w-full"
               >
                <option value="">Select a size</option>
                {hoodie.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            {/* Color selection */}
            <div className="mt-4 text-black">
              <label htmlFor="color-select" className="block font-bold mb-2">Color:</label>
              <select
                id={`color-select-${hoodie.id}`}
                aria-label="Select Size" 
                value={selectedColors[hoodie.id] || ''}
                onChange={(e) => handleColorChange(hoodie.id, e.target.value)}
                className="border rounded p-2 w-full"
              >
                <option value="">Select a color</option>
                {hoodie.colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <h2 className="text-lg">{hoodie.name}</h2>
            <p>{hoodie.description}</p>
            <p>${hoodie.price}</p>
            <p>{selectedSizes[hoodie.id]}</p>
            <p>{selectedColors[hoodie.id]}</p>
            <button 
              type="button"
              className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddToCart(hoodie, selectedSizes[hoodie.id], selectedColors[hoodie.id])}>
                {addedToCart[`${hoodie.id}-${selectedSizes[hoodie.id]}-${selectedColors[hoodie.id]}`] ? "Added to Cart" : "Add to Cart"}
            </button>
            <span className="block mt-2 text-center py-2 px-4 font-bold">
              In Cart: {getQuantityInCart(hoodie.id, selectedSizes[hoodie.id], selectedColors[hoodie.id])}
            </span>
            <label htmlFor="quantity" className="block font-bold mt-2">Quantity:</label>
            <input
              title="quantity"
              placeholder="0"
              type="number"
              id={`quantity-${hoodie.id}`}
              className="mt-2 p-1 border rounded w-full text-black text-center"
              value={getQuantityInCart(hoodie.id, selectedSizes[hoodie.id], selectedColors[hoodie.id])}
              onChange={(e) => handleQuantityChange(hoodie.id, e.target.value)}
              min="0"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}

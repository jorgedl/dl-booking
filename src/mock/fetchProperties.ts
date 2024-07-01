import stringComparison from 'string-comparison';

import { Property } from '@/types';

// src/mockApi.js
export const mockProperties: Property[] = [
  {
    id: '1d3a1e5e-6d3b-4d39-bf7b-34d776dc3b7e',
    lat: -22.8969,
    lng: -47.0626,
    label: 'Sunny Beach House',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    category: 'BEACH',
    price: 200,
    description:
      'Sunny Beach House is a beautiful beachside property offering stunning ocean views, direct beach access, and modern amenities for a perfect seaside retreat.',
    lockedDays: [
      '06-30-2024',
      '07-01-2024',
      '07-02-2024',
      '07-03-2024',
      '07-04-2024',
      '07-05-2024',
    ],
  },
  {
    id: '2a9f9fba-4d3b-4b9e-9e5d-9f8b7e2d3c6e',
    lat: -22.9053,
    lng: -47.0608,
    label: 'Countryside Farmhouse',
    category: 'FARM',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 300,
    description:
      'Countryside Farmhouse is a serene farmhouse nestled in the countryside, featuring lush gardens, peaceful surroundings, and the charm of rural living.',
  },
  {
    id: '3b7e1c2d-4d3b-4a7e-8e9b-2a1d3c6e9f5d',
    lat: -22.9093,
    lng: -47.0644,
    label: 'Downtown Apartment',
    category: 'CITY',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 400,
    description:
      'Downtown Apartment is a chic urban apartment located in the heart of the city, close to all major attractions, dining, and entertainment. Perfect for a vibrant city experience.',
  },
  {
    id: '4c6d1a2b-4d3b-4b8e-9e5d-8f7b2d3c6e9f',
    lat: -22.901,
    lng: -47.0578,
    label: 'City View Loft',
    category: 'CITY',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 350,
    description:
      'City View Loft is a modern loft apartment with stunning city views, offering a perfect blend of comfort and style for your urban getaway.',
  },
  {
    id: '5d7e1b2c-4d3b-4a8e-9e5d-9f6b3e2d1c4f',
    lat: -22.9172,
    lng: -47.0549,
    label: 'Metropolitan Suite',
    category: 'CITY',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 320,
    description:
      'Metropolitan Suite is a luxurious suite located in the bustling city center, offering top-notch amenities and easy access to shopping, dining, and entertainment.',
  },
  {
    id: '6e8f1c2d-4d3b-4b7e-8e9b-2a9d3c6e9f7d',
    lat: -22.9243,
    lng: -47.0423,
    label: 'Rustic Farm Retreat',
    category: 'FARM',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 280,
    description:
      'Rustic Farm Retreat is a charming farmhouse offering a peaceful escape from the city, with beautiful gardens, cozy interiors, and a taste of rural life.',
  },
  {
    id: '7f9a1d2c-4d3b-4b9e-8e9b-3a2d3c6e9f8e',
    lat: -22.9229,
    lng: -47.0572,
    label: 'Ocean Breeze Villa',
    category: 'BEACH',
    cover:
      'https://fastly.picsum.photos/id/776/900/600.jpg?hmac=dhqGPC5SAmIaql4eyq2fjMc6iSJESXh82h8rHeBmbkA',
    price: 450,
    description:
      'Ocean Breeze Villa is a luxurious beachside villa with breathtaking ocean views, private beach access, and high-end amenities for an unforgettable seaside vacation.',
  },
  {
    id: '8a1b1e2c-4d3b-4b9e-9e5d-2f6b3d7c6e9e',
    lat: -22.9008,
    lng: -47.0667,
    label: 'Seaside Cottage',
    category: 'BEACH',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 380,
    description:
      'Seaside Cottage is a cozy beach cottage perfect for a relaxing getaway, featuring beautiful ocean views, a comfortable interior, and easy beach access.',
  },
  {
    id: '9b2c1d3a-4d3b-4a8e-8e9b-3a1d3c6e9f7b',
    lat: -22.8956,
    lng: -47.0597,
    label: 'Mountain Cabin Retreat',
    category: 'CABIN',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 220,
    description:
      'Mountain Cabin Retreat is a cozy cabin nestled in the woods, offering a tranquil escape with rustic charm, a fireplace, and proximity to hiking trails.',
  },
  {
    id: '10c3d1a2-4d3b-4b9e-9e5d-1a6b3e2d4c7f',
    lat: -22.9263,
    lng: -47.053,
    category: 'BEACH',
    label: 'Coastal Paradise',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 410,
    description:
      'Coastal Paradise is a stunning beach property with breathtaking ocean views, private beach access, and luxurious amenities for a perfect seaside retreat.',
  },
  {
    id: '11d4e1a3-4d3b-4b9e-8e9b-2a3d4c6e9f5b',
    lat: -22.9138,
    lng: -47.0528,
    label: 'Vineyard Haven',
    category: 'VINEYARD',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 340,
    description:
      'Vineyard Haven is a luxurious vineyard estate, offering panoramic views of the vineyards, wine tasting experiences, and elegant accommodations.',
  },
  {
    id: '12e5f1b4-4d3b-4a9e-9e5d-1a2b3c6e9f8c',
    lat: -22.9167,
    lng: -47.0636,
    label: 'Grapevine Retreat',
    category: 'VINEYARD',
    cover:
      'https://fastly.picsum.photos/id/776/900/600.jpg?hmac=dhqGPC5SAmIaql4eyq2fjMc6iSJESXh82h8rHeBmbkA',
    price: 360,
    description:
      'Grapevine Retreat is a beautiful vineyard property offering stunning vineyard views, comfortable accommodations, and a peaceful setting for a relaxing getaway.',
  },
  {
    id: '13f6a1c5-4d3b-4b9e-8e9b-2f3d4c6e1b7e',
    lat: -22.9129,
    lng: -47.0453,
    label: 'Lakeside Getaway',
    category: 'LAKE',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 310,
    description:
      'Lakeside Getaway is a serene lakeside property offering stunning water views, private dock access, and a perfect getaway for water sports and relaxation.',
  },
  {
    id: '14a7b1d6-4d3b-4a8e-9e5d-3a1b2c4e5d9f',
    lat: -22.8982,
    lng: -47.0682,
    label: 'Urban Loft',
    category: 'CITY',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 300,
    description:
      'Urban Loft is a stylish loft apartment located in the heart of the city, offering modern amenities, stunning views, and easy access to city attractions.',
  },
  {
    id: '15b8c1e7-4d3b-4b9e-8e9b-2a1d3c6e4f7b',
    lat: -22.9271,
    lng: -47.0622,
    label: 'Lakeview Villa',
    category: 'LAKE',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 370,
    description:
      'Lakeview Villa is a beautiful lakeside villa offering stunning water views, luxurious accommodations, and private dock access for an unforgettable lakeside retreat.',
  },
  {
    id: '16c9d1f8-4d3b-4a8e-9e5d-1a2b3c6e4f8c',
    lat: -22.9058,
    lng: -47.0477,
    label: 'Tranquil Lake House',
    category: 'LAKE',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 330,
    description:
      'Tranquil Lake House is a serene lakeside property offering beautiful water views, private dock access, and comfortable accommodations for a relaxing stay.',
  },
  {
    id: '17d1a1b9-4d3b-4b9e-8e9b-3a1d4c5e2f6e',
    lat: -22.9124,
    lng: -47.0583,
    label: 'Seaside Escape',
    category: 'BEACH',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 420,
    description:
      'Seaside Escape is a luxurious beachside property offering stunning ocean views, direct beach access, and high-end amenities for an unforgettable seaside vacation.',
  },
  {
    id: '18e2b1c1-4d3b-4a8e-9e5d-1a3d4c6e2b7f',
    lat: -22.9112,
    lng: -47.0566,
    label: 'Luxe Retreat',
    category: 'LUXE',
    cover:
      'https://fastly.picsum.photos/id/776/900/600.jpg?hmac=dhqGPC5SAmIaql4eyq2fjMc6iSJESXh82h8rHeBmbkA',
    price: 500,
    description:
      'Luxe Retreat is a luxurious property featuring high-end amenities, exquisite interiors, and premium services for an exclusive and lavish stay.',
  },
  {
    id: '19f3c1d2-4d3b-4b9e-8e9b-2a1d3c4e2b8c',
    lat: -22.9199,
    lng: -47.0605,
    label: 'Beachfront Paradise',
    category: 'BEACH',
    cover:
      'https://fastly.picsum.photos/id/404/900/600.jpg?hmac=nUQlSp8OKr2pg1etBlmJ295bgKsaiLXC7Jaq02buk1s',
    price: 390,
    description:
      'Beachfront Paradise is a stunning beach property offering breathtaking ocean views, private beach access, and luxurious amenities for the perfect seaside retreat.',
  },
  {
    id: '20a4d1e3-4d3b-4a8e-9e5d-1a2b3c4e2f9d',
    lat: -22.9234,
    lng: -47.0485,
    label: 'City Lights Apartment',
    category: 'CITY',
    cover:
      'https://fastly.picsum.photos/id/776/900/600.jpg?hmac=dhqGPC5SAmIaql4eyq2fjMc6iSJESXh82h8rHeBmbkA',
    price: 310,
    description:
      'City Lights Apartment is a chic urban apartment located in the heart of the city, offering modern amenities, stunning city views, and easy access to all major attractions.',
  },
];

export const fetchProperties: any = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProperties);
    }, 500);
  });
};

export const autoCompleteProperties: any = async (params: {
  query: string;
}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response: (Property & { weight?: number })[] = mockProperties;
      if (params.query && params.query.length > 3) {
        const withWeight = mockProperties.map((property) => ({
          ...property,
          weight: stringComparison.mlcs.similarity(
            property.label,
            params.query,
          ),
        }));
        // This should be done in the server, I'm just mocking some "intelligence" to this application
        response = withWeight.filter(
          ({ weight }) => weight / params.query.length >= 0.033,
        );
      }
      resolve(response);
    }, 500);
  });
};

export const fetchProperty: any = async (params: { id: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockProperties.find((property) => String(property.id) === params.id),
      );
    }, 500);
  });
};

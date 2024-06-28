// src/mockApi.js
export const mockProperties = [
  {
    id: 1,
    lat: -22.8969,
    lng: -47.0626,
    label: 'Property 1',
    cover: 'https://picsum.photos/900/600',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae justo felis. In hac habitasse platea dictumst. Vestibulum eu dictum est. Suspendisse auctor urna iaculis massa consequat, id pharetra ipsum dictum. In nec ipsum diam. Aliquam euismod tellus lacus. Donec iaculis dui lectus, a cursus nulla lacinia et. Nunc turpis nisi, semper sed sapien a, elementum pellentesque nisl. Nulla quis sapien ipsum. Sed faucibus metus sed odio molestie accumsan.',
  },
  {
    id: 2,
    lat: -22.9053,
    lng: -47.0608,
    label: 'Property 2',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 3,
    lat: -22.9093,
    lng: -47.0644,
    label: 'Property 3',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 4,
    lat: -22.901,
    lng: -47.0578,
    label: 'Property 4',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 5,
    lat: -22.9172,
    lng: -47.0549,
    label: 'Property 5',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 6,
    lat: -22.9243,
    lng: -47.0423,
    label: 'Property 6',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 7,
    lat: -22.9229,
    lng: -47.0572,
    label: 'Property 7',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 8,
    lat: -22.9008,
    lng: -47.0667,
    label: 'Property 8',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 9,
    lat: -22.8956,
    lng: -47.0597,
    label: 'Property 9',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 10,
    lat: -22.9263,
    lng: -47.053,
    label: 'Property 10',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 11,
    lat: -22.9138,
    lng: -47.0528,
    label: 'Property 11',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 12,
    lat: -22.9167,
    lng: -47.0636,
    label: 'Property 12',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 13,
    lat: -22.9129,
    lng: -47.0453,
    label: 'Property 13',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 14,
    lat: -22.8982,
    lng: -47.0682,
    label: 'Property 14',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 15,
    lat: -22.9271,
    lng: -47.0622,
    label: 'Property 15',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 16,
    lat: -22.9058,
    lng: -47.0477,
    label: 'Property 16',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 17,
    lat: -22.9124,
    lng: -47.0583,
    label: 'Property 17',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 18,
    lat: -22.9112,
    lng: -47.0566,
    label: 'Property 18',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 19,
    lat: -22.9199,
    lng: -47.0605,
    label: 'Property 19',
    cover: 'https://picsum.photos/900/600',
  },
  {
    id: 20,
    lat: -22.9234,
    lng: -47.0485,
    label: 'Property 20',
    cover: 'https://picsum.photos/900/600',
  },
];

export const fetchProperties: any = async (params: any) => {
  console.log(params);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProperties);
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

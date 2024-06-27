// src/mockApi.js
export const mockProperties = [
  { id: 1, lat: -22.8969, lng: -47.0626, label: 'Property 1' },
  { id: 2, lat: -22.9053, lng: -47.0608, label: 'Property 2' },
  { id: 3, lat: -22.9093, lng: -47.0644, label: 'Property 3' },
  { id: 4, lat: -22.901, lng: -47.0578, label: 'Property 4' },
  { id: 5, lat: -22.9172, lng: -47.0549, label: 'Property 5' },
  { id: 6, lat: -22.9243, lng: -47.0423, label: 'Property 6' },
  { id: 7, lat: -22.9229, lng: -47.0572, label: 'Property 7' },
  { id: 8, lat: -22.9008, lng: -47.0667, label: 'Property 8' },
  { id: 9, lat: -22.8956, lng: -47.0597, label: 'Property 9' },
  { id: 10, lat: -22.9263, lng: -47.053, label: 'Property 10' },
  { id: 11, lat: -22.9138, lng: -47.0528, label: 'Property 11' },
  { id: 12, lat: -22.9167, lng: -47.0636, label: 'Property 12' },
  { id: 13, lat: -22.9129, lng: -47.0453, label: 'Property 13' },
  { id: 14, lat: -22.8982, lng: -47.0682, label: 'Property 14' },
  { id: 15, lat: -22.9271, lng: -47.0622, label: 'Property 15' },
  { id: 16, lat: -22.9058, lng: -47.0477, label: 'Property 16' },
  { id: 17, lat: -22.9124, lng: -47.0583, label: 'Property 17' },
  { id: 18, lat: -22.9112, lng: -47.0566, label: 'Property 18' },
  { id: 19, lat: -22.9199, lng: -47.0605, label: 'Property 19' },
  { id: 20, lat: -22.9234, lng: -47.0485, label: 'Property 20' },
];

export const fetchProperties: any = async (params: any) => {
  console.log(params);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProperties);
    }, 500);
  });
};

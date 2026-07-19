// Usamos variable de entorno para la URL del CMS
const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

export async function getClases() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/clases?populate=*`);
    if (!res.ok) throw new Error('Error fetching clases');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export function getStrapiImageUrl(imageData) {
  if (!imageData || !imageData.attributes) return '/placeholder.jpg';
  return `${STRAPI_URL}${imageData.attributes.url}`;
}
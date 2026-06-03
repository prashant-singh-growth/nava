import commonConfig from "../config/commonConfig"; // adjust path if needed

export const fetchPosts = async (apiCallEndpoint: string) => {
  const API_BASE = commonConfig.API_BASE; // Use the imported constant
  const url = `${API_BASE}${apiCallEndpoint}&t=${Date.now()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

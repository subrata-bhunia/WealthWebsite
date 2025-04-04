/**
 * Utility function for making API requests
 */

export const apiUrl: string =
  "https://wealth-backend-production.up.railway.app" as string;
export const apiRequest = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(
    "https://wealth-backend-production.up.railway.app" + url,
    {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

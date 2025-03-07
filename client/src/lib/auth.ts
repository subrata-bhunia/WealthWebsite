
import { AuthUser } from "@shared/auth";

// Local storage keys
const TOKEN_KEY = "wealthspire_auth_token";
const USER_KEY = "wealthspire_auth_user";

// Get auth from localStorage
export function getAuth(): { token: string | null; user: AuthUser | null } {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const userJson = localStorage.getItem(USER_KEY);
    const user = userJson ? JSON.parse(userJson) : null;
    return { token, user };
  } catch (error) {
    // In case of any errors (like JSON parsing), clear auth
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    return { token: null, user: null };
  }
}

// Set auth in localStorage
export function setAuth(token: string, user: AuthUser): void {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

// Clear auth from localStorage
export function clearAuth(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  const { token } = getAuth();
  return !!token;
}

// Check if user is admin
export function isAdmin(): boolean {
  const { user } = getAuth();
  return user?.isAdmin || false;
}

// Get Authorization header
export function getAuthHeader(): { Authorization: string } | Record<string, never> {
  const { token } = getAuth();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Helper to make authenticated API requests
export async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const authHeader = getAuthHeader();
  
  const headers = {
    ...options.headers,
    ...authHeader,
    'Content-Type': 'application/json',
  };
  
  return fetch(url, {
    ...options,
    headers,
  });
}

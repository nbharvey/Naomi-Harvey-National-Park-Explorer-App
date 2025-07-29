/**
 * Saves a value to localStorage after converting it to a JSON string.
 * Uses a generic type <T> to accept any kind of value.
 * @param key The key under which to store the value.
 * @param value The value to store. Can be of any type that is serializable.
 */
export function setItem<T>(key: string, value: T): void {
    try {
        // localStorage can only store strings, so we stringify the value.
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // It's better to use console.error for logging errors.
        console.error(`Error setting item with key "${key}" in localStorage:`, error);
    }
}

/**
 * Retrieves an item from localStorage and parses it from a JSON string.
 * Uses a generic type <T> so the caller can specify the expected return type.
 * @param key The key of the item to retrieve.
 * @returns The parsed item, or undefined if the key is not found or an error occurs.
 */
export function getItem<T>(key: string): T | undefined {
    try {
        const item = window.localStorage.getItem(key);
        // If an item is found, parse it from JSON. Otherwise, return undefined.
        // We cast the parsed result to the generic type T.
        return item ? (JSON.parse(item) as T) : undefined;
    } catch (error) {
        console.error(`Error getting item with key "${key}" from localStorage:`, error);
        // Return undefined if there's an error (e.g., malformed JSON).
        return undefined;
    }
}

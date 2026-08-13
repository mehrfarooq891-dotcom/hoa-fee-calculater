/**
 * Safely fetches JSON from an endpoint or API, validating HTTP status and Content-Type header.
 * Prevents "Unexpected token 'T', 'The page c'... is not valid JSON" errors caused by 404 HTML responses.
 */
export async function safeFetchJson<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<{ data: T | null; error: string | null }> {
  try {
    const response = await fetch(input, init);

    if (!response.ok) {
      const statusText = response.statusText || 'Unknown Status';
      console.warn(`Fetch request to ${input.toString()} failed with HTTP ${response.status}: ${statusText}`);
      return { data: null, error: `HTTP ${response.status}: ${statusText}` };
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const rawText = await response.text();
      const snippet = rawText.trim().substring(0, 60);
      console.warn(
        `Fetch request to ${input.toString()} returned non-JSON content-type '${contentType}'. Preview: "${snippet}"`
      );
      return {
        data: null,
        error: `Expected application/json but received '${contentType}' starting with: "${snippet}"`
      };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (err: any) {
    const message = err?.message || 'Network or parse error';
    console.error(`Error executing safeFetchJson for ${input.toString()}:`, err);
    return { data: null, error: message };
  }
}

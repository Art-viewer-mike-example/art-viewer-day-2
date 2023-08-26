export const fetchHandler = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    const { ok, status, statusText } = res;
    if (!ok) throw new Error(`Fetch failed: ${status}, ${statusText || 'no statusText'}`);

    const data = await res.json();
    return [null, data];
  } catch (error) {
    console.warn(error.message);
    return [error, null]
  }
}
export function getErrorMessage(err, fallback = "Something went wrong") {
  const msg =
    err?.response?.data?.message ||
    err?.response?.data?.error ||
    (Array.isArray(err?.response?.data?.errors) ? err.response.data.errors?.[0]?.msg : null) ||
    err?.message;

  if (typeof msg === "string" && msg.trim()) return msg.trim();

  const status = err?.response?.status;
  if (status === 500) return "Internal server error";
  if (status === 401) return "Unauthorized";
  if (status === 403) return "Forbidden";
  if (status === 404) return "Not found";
  if (status === 409) return "Conflict";
  return fallback;
}


export function firstZodErrorMessage(zodError) {
  const first = zodError?.errors?.[0];
  if (!first) return null;
  if (typeof first.message === "string") return first.message;
  return null;
}


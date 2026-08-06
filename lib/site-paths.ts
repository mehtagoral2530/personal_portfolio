const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function assetPath(path: `/${string}`) {
  return `${basePath}${path}`;
}

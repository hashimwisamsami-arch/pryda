// جلب كافة الصور المطابقة للنص
const wallpaperModules = import.meta.glob("../assets/WALLPAPER_*", {
  eager: true,
  query: "?url",
  import: "default",
});

/**
 *
 * @param {number} [limit] - عدد الصور المطلوب استخراجها (اختياري)
 */
export const getWallpapers = (limit) => {
  const slides = Object.entries(wallpaperModules)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .map(([path, image]) => ({
      id: path,
      image,
    }));

  return typeof limit === "number" ? slides.slice(0, limit) : slides;
};

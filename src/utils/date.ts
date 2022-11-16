export function makeDateString() {
  const date = new Date(Date.now() - 86400000 * 2);
  const H = date.getFullYear();
  const M = date.getMonth() + 1;
  const D = date.getDate();
  return (
    String(H) + (M < 10 ? `0${String(M)}` : String(M)) + (D < 10 ? `0${String(D)}` : String(D))
  );
}

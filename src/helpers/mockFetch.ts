export default function mockFetch() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2500);
  });
}


export function postBasket(items) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: {status:"SUCCESS"} }), 1000)
  );
}

export function action(type = '', payload = {}, config = {}) {
  return {
    type,
    payload,
    config,
  };
}

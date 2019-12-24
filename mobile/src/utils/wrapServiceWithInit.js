/**
 * wrapServiceWithInit - gracefully fails if
 * initiation fails for non essential services
 *
 * @param service
 * @param init
 * @returns {undefined}
 */
export default function(service, init) {
  try {
    init(service);
    return service;
  } catch (e) {
    console.info(e.message); //eslint-disable-line
  }
  return Object.keys(service).reduce(
    (newObj, key) => ({
      ...newObj,
      [key]: () => {},
    }),
    {},
  );
}

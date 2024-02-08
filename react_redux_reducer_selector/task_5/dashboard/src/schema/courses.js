import { normalize, schema } from 'normalizr';

// Define a course entity
const course = new schema.Entity('course');

// Define your normalization
export const courseNormalizer = (data) => {
  return normalize(data, [course]);
};

export default function getListStudentIds(obj) {
  const empty = [];

  if (Array.isArray(obj)) {
    const result = obj.map(({id}) => {
      return id;
    });
    return result;
  }

  return empty;
}

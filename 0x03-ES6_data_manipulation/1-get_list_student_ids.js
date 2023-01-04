export default function getListStudentIds(obj) {
  const emp = [];

  if (Array.isArray(obj)) {
    const res = obj.map(({id}) => {
      return id;
    });
    return res;
  }

  return emp;
}

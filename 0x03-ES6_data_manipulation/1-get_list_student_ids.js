const getListStudentIds = (listStudents) => {
    let listStudentIds = [];
    if (!(listStudents instance of Array)) {
        return listStudentIds;
    }
    listStudentIds = listStudents.map((student) => student.id);
    return listStudentIds;
};

export default getListStudentIds;
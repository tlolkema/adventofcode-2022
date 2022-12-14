const file = await Deno.readTextFile('./4/data.txt')

const getSectionAssignments = (file: string) => {
  return file.trim().split('\n')
}

const getSectionAssignmentsGroups = (assignments: string[]) => {
  return assignments.map((assignment) => assignment.split(',').map(String))
}

const sectionAssignments = getSectionAssignments(file)
const sectionAssignmentsGroups = getSectionAssignmentsGroups(sectionAssignments)

console.log(sectionAssignmentsGroups)

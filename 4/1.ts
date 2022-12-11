import { readFileSync } from 'fs'

const file = readFileSync(`${__dirname}/data.txt`, 'utf-8')

const getSectionAssignments = (file: string) => {
  return file.trim().split('\n')
}

const getSectionAssignmentsGroups = (assignments: string[]) => {
  return assignments.map((assignment) => assignment.split(',').map(String))
}

const sectionAssignments = getSectionAssignments(file)
const sectionAssignmentsGroups = getSectionAssignmentsGroups(sectionAssignments)

console.log(sectionAssignmentsGroups)

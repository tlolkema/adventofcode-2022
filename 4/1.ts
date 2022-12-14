const file = await Deno.readTextFile('./4/data.txt')

const sectionAssignments = file.trim().split('\n')

const sectionAssignmentsGroups = sectionAssignments.map((assignment) =>
  assignment.split(',').map(String),
)

const sectionAssignmentsIndividuals = sectionAssignmentsGroups.map((group) =>
  group.map((assignment) => assignment.split('-').map(Number)),
)

let total = 0

sectionAssignmentsIndividuals.forEach((group) => {
  const elfOne = group[0]
  const elfTwo = group[1]

  const hasFullOverlap =
    (elfOne[0] <= elfTwo[0] && elfOne[1] >= elfTwo[1]) ||
    (elfTwo[0] <= elfOne[0] && elfTwo[1] >= elfOne[1])

  hasFullOverlap ? total++ : null
})

console.log(total)

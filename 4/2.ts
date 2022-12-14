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
  const [elfOne, elfTwo] = [group[0], group[1]]

  const sectionsElfOne: number[] = []
  const sectionsElfTwo: number[] = []

  for (let i = elfOne[0]; i <= elfOne[1]; i++) {
    sectionsElfOne.push(i)
  }

  for (let i = elfTwo[0]; i <= elfTwo[1]; i++) {
    sectionsElfTwo.push(i)
  }

  const intersection = sectionsElfOne.find((x) => sectionsElfTwo.includes(x))

  intersection != undefined ? total++ : null
})

console.log(total)

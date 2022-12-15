const fileActions = await Deno.readTextFile('./5/actions.txt')
const fileCrates = await Deno.readTextFile('./5/crates.txt')

const actionsData = fileActions.trim().split('\n')
const cratesData = fileCrates.trim().split('\n')

const stacks = cratesData.map((stack) => stack.split(''))

actionsData.forEach((action) => {
  const actionSplitted = action.split(' ')
  const [numberOfCrates, fromStack, toStack]: [number, number, number] = [
    Number(actionSplitted[1]),
    Number(actionSplitted[3]),
    Number(actionSplitted[5]),
  ]

  const toMove = stacks[fromStack - 1].slice(0, numberOfCrates)

  stacks[fromStack - 1].splice(0, numberOfCrates)
  stacks[toStack - 1].unshift(...toMove)
})

const firstElements = stacks
  .map((stack) => stack[0])
  .reduce((acc, curr) => acc + curr)

console.log(firstElements)

const file = await Deno.readTextFile('./8/data.txt')

const rowsTrees = file.trim().split('\n')

const visibleTrees = (rowTrees: number[]): number[] => {
  const trees: number[] = []
  let highestTree = 0

  rowTrees.forEach((tree) => {
    if (tree > highestTree) {
      trees.push(tree)
      highestTree = tree
    }
  })

  return trees
}

let totalVisibleTrees = 0

for (const row of rowsTrees) {
  const rowTreesLeft = row.split('').map((tree) => Number(tree))
  const rowTreesRight = [...rowTreesLeft].reverse().map((tree) => Number(tree))
  const visibleLeft = visibleTrees(rowTreesLeft)
  const visibleRight = visibleTrees(rowTreesRight)

  totalVisibleTrees += visibleLeft.length + visibleRight.length
}

const treesPerColumn: number[][] = []

for (let i = 0; i < rowsTrees[0].length; i++) {
  treesPerColumn.push([])
}

for (const row of rowsTrees) {
  for (let i = 0; i < row.length; i++) {
    treesPerColumn[i].push(Number(row[i]))
  }
}

for (const column of treesPerColumn) {
  const visibleTop = visibleTrees(column)
  const visibleBottom = visibleTrees(column.reverse())

  totalVisibleTrees += visibleTop.length + visibleBottom.length
}

console.log(totalVisibleTrees)

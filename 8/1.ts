const file = await Deno.readTextFile('./8/data.txt')

const rowsTrees = file.trim().split('\n')

type Direction = 'left' | 'right' | 'top' | 'bottom'

const rowLength = rowsTrees[0].length
const invertedIndex = (index: number) => rowLength - index - 1

// returns the trees that are visible from the given direction, return as coordinates
const visibleTrees = (
  rowTrees: number[],
  index: number,
  direction: Direction,
): string[] => {
  const trees: string[] = []
  let highestTree = -1

  rowTrees.forEach((tree, itemIndex) => {
    if (tree > highestTree) {
      switch (direction) {
        case 'left':
          trees.push(`R${index}-C${itemIndex}`)
          break
        case 'right':
          trees.push(`R${index}-C${invertedIndex(itemIndex)}`)
          break
        case 'top':
          trees.push(`R${itemIndex}-C${index}`)
          break
        case 'bottom':
          trees.push(`R${invertedIndex(itemIndex)}-C${index}`)
      }

      highestTree = tree
    }
  })

  return trees
}

const visibleTreesSet = new Set<string>()

// find visible trees from left and right
rowsTrees.forEach((row, index) => {
  const rowTreesLeft = row.split('').map((tree) => Number(tree))
  const rowTreesRight = [...rowTreesLeft].reverse().map((tree) => Number(tree))
  const visibleLeft = visibleTrees(rowTreesLeft, index, 'left')
  const visibleRight = visibleTrees(rowTreesRight, index, 'right')

  visibleLeft.forEach((tree) => visibleTreesSet.add(tree))
  visibleRight.forEach((tree) => visibleTreesSet.add(tree))
})

const treesPerColumn: number[][] = []

for (let i = 0; i < rowsTrees[0].length; i++) {
  treesPerColumn.push([])
}

for (const row of rowsTrees) {
  for (let i = 0; i < row.length; i++) {
    treesPerColumn[i].push(Number(row[i]))
  }
}

// find visible trees from top and bottom
treesPerColumn.forEach((column, index) => {
  const visibleTop = visibleTrees(column, index, 'top')
  const visibleBottom = visibleTrees(column.reverse(), index, 'bottom')

  visibleTop.forEach((tree) => visibleTreesSet.add(tree))
  visibleBottom.forEach((tree) => visibleTreesSet.add(tree))
})

console.log(visibleTreesSet, visibleTreesSet.size)

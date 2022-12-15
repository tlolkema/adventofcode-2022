const dataStream: string = await Deno.readTextFile('./6/data.txt')

const dataIndividualChar: string[] = dataStream.split('')

for (let i = 0; i < dataIndividualChar.length; i++) {
  const setOfChars = new Set(
    dataIndividualChar[i] +
      dataIndividualChar[i + 1] +
      dataIndividualChar[i + 2] +
      dataIndividualChar[i + 3],
  )

  if (setOfChars.size === 4) {
    console.log(i + 4)
    break
  }
}

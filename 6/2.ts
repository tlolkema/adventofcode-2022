const dataStream: string = await Deno.readTextFile('./6/data.txt')

const dataIndividualChar: string[] = dataStream.split('')

for (let i = 0; i < dataIndividualChar.length; i++) {
  const setOfChars = new Set(
    dataIndividualChar[i] +
      dataIndividualChar[i + 1] +
      dataIndividualChar[i + 2] +
      dataIndividualChar[i + 3] +
      dataIndividualChar[i + 4] +
      dataIndividualChar[i + 5] +
      dataIndividualChar[i + 6] +
      dataIndividualChar[i + 7] +
      dataIndividualChar[i + 8] +
      dataIndividualChar[i + 9] +
      dataIndividualChar[i + 10] +
      dataIndividualChar[i + 11] +
      dataIndividualChar[i + 12] +
      dataIndividualChar[i + 13],
  )

  if (setOfChars.size === 14) {
    console.log(i + 14)
    break
  }
}

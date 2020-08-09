const alpha = ["a", "b", "c"]
const beta = [...alpha]
const gamma = alpha
beta.push('d')
gamma.push('z')

console.log(beta, gamma)
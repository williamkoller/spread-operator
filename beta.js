const alpha = ["a", "b", "c"]
const beta = ["*", ...alpha, "*"]

const alphas = ["a", "b", "c"]
const betas = ["d", "e"]
const gamma = [...alpha, ...beta]

console.log("alpha", alpha, "beta", beta, "alphas", alphas, "betas", betas, "gamma", gamma)
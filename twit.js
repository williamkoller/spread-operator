const twit = { name: 'Proful' }
const insta = { ...twit }
const count = { followers: 5165 }
const info = { ...twit, ...count }

console.log("info", info)
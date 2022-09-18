export const getUserAt = (url) => {
  const tokens = url.split('/')
  return getLastContentToken(tokens)
}

const getLastContentToken = (tokens) => {
  if (!tokens.length) return null;
  if (tokens[tokens.length - 1].length) {
    return tokens[tokens.length - 1]
  } else {
    return getLastContentToken(tokens.slice(0, tokens.length - 1))
  }
}
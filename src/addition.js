// перший приклад

export function add(a,b) {
    return a + b;
}


export function subtraction(a,b) {
    return a - b;
}



// другий приклад




export function average(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

export function maxScore(scores) {
  return Math.max(...scores);
}

export function minScore(scores) {
  return Math.min(...scores);
}

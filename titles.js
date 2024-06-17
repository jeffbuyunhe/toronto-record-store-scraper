import stringSimilarity from "string-similarity-js";

export function compareTitles(query, titles) {
    const scores = [];
    for (let i = 0; i < 3; i++) {
        scores[i] = stringSimilarity(query, titles[i]);
    }

    return titles[scores.indexOf(Math.max(...scores))];
}
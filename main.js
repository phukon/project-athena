import { showPopup } from "/popup.js"
import { fetchArticles } from "/fetchArticles.js";
import { typeValue } from "/typeValue.js";
import { queryQuestionPaper } from "/fetchQuestionPaper.js";

let PROJECT_ID = "jbb9mv51";
let DATASET = "production";

queryQuestionPaper(typeValue);
fetchArticles(PROJECT_ID, DATASET);
showPopup();

//url chahiye in queryQuestion paper
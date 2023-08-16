export function addReviewsToData(data) {
  data.forEach((eachBook) => {
    if (eachBook.review) {
    } else {
      eachBook.review = [];
    }
  });
}
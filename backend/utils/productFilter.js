class ProductFilter {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword, // arama yapılacak kelime
            $options: "i", // büyük-küçük harfe duyarsız
          },
        }
      : {};

    this.query = this.query.find(...keyword);
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    const deleteAre = ["keyword", "page", "limit"];
    deleteAre.forEach((item) => delete queryCopy[item]);

    const queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  pagination(resultPerPage) {
    const activePage = this.queryStr.page || 1;
    const skip = resultPerPage * (activePage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ProductFilter;

//bu sayfaya tekrar bak

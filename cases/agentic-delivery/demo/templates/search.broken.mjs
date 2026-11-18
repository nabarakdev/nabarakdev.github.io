export class SearchController {
  constructor(fetchResults) {
    this.fetchResults = fetchResults;
    this.results = [];
  }
  async search(query) {
    const results = await this.fetchResults(query);
    this.results = results;
    return results;
  }
}

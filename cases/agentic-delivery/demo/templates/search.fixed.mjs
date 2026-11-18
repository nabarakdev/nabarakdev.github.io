export class SearchController {
  constructor(fetchResults) {
    this.fetchResults = fetchResults;
    this.results = [];
    this.requestId = 0;
  }
  async search(query) {
    const requestId = ++this.requestId;
    const results = await this.fetchResults(query);
    if (requestId === this.requestId) this.results = results;
    return results;
  }
}

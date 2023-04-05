const api = {
  hostname: "https://www.ris.gov.tw/rs-opendata/api/v1/datastore",
  tagName: "ODRP019",
  async getData(year: string, county: string, district: string) {
    const url = `${this.hostname}/${this.tagName}/${year}?COUNTY=${county}&TOWN=${district}`;
    const response = await fetch(url);
    return response.json();
  },
};

export default api;

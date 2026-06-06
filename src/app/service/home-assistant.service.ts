
export default class HomeAssistantService {

  token: string;
  url: string;

  constructor(token: string, url: string) {
    this.token = token;
    this.url = url;
  }

  async api(): Promise<string> {
    return fetch(this.url + "/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    }
    ).then((res) => res.json()).then(data => data.message);
  }
}

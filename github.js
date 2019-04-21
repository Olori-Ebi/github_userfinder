class Github {
  constructor() {
    this.client_id = 'e27c12b88f073a609189';
    this.client_secret = 'a93008185640251432dc3dbadbcca0b14e032fbe';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
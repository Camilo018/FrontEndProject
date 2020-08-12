class Services {

    constructor() {
        this.URL = 'http://localhost:9100/'
    }

    async addUser(user) {
        const response = await fetch(this.URL+'test',{
            method: 'POST',
            body: user
        });

        const data = await response.json();
        console.log(data);
    }
}

export default Services;
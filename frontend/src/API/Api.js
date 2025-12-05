export class Api {
	static URI = "http://localhost:3000";
	constructor() {}

	static async reg(data) {
		try {
			const respons = await fetch("http://localhost:3000/registration", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const json = await respons.json();
			return json;
		} catch (err) {
			return new Error(err.message);
		}
	}

	static async loginin(data) {
		try {
			const respons = await fetch(`${this.URI}/loginin`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					userEmail: data.userEmail,
					userPassword: data.userPassword,
				}),
			});

			return respons;
		} catch (err) {
			throw new Error(err.message);
		}
	}
	static async getUser() {
		try {
			const respons = fetch(
				`${this.URI}/user/${localStorage.getItem("userId")}`,
				{
					method: "GET",
				}
			);
			return respons;
		} catch (err) {
			throw new Error(err);
		}
	}
	static async logout() {
		try {
			const respons = await fetch(`${this.URI}/logout`, {
				method: "GET",
				credentials: "include",
			});
			return respons;
		} catch (err) {
			throw new Error(err);
		}
	}
	static async check() {
		try {
			const respons = await fetch(`${this.URI}/check`, {
				method: "POST",
				credentials: "include",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			return respons;
		} catch (err) {
			throw new Error(err);
		}
	}

	static async getTasks(){
		try{
			const respons = fetch(`${this.URI}/tasks/${localStorage.getItem("userId")}`, {
				method: 'GET'
			})
			return respons 
		}catch(err){
			throw new Error(err)
		}
	}
	static async addTask(data){
		try{
			const respons = fetch(`${this.URI}/addtask/${localStorage.getItem("userId")}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			return respons 
		}catch(err){
			throw new Error(err)
		}
	}
}

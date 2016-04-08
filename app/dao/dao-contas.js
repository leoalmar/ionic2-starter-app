import {Storage, SqlStorage} from "ionic-angular";


export class DAOContas {

	constructor(){
		let storage = new Storage(SqlStorage);

		storage.query("CREATE TABLE IF NOT EXISTS contas(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)").then((data) => {
			console.log(data);
		},(error) => {
			console.log('Error ' + JSON.stringify(error.err));
		});
	}

	insert(conta, successCalback){
		let storage = new Storage(SqlStorage);

		storage.query("INSERT INTO contas(descricao) VALUES (?)",[conta.descricao]).then((data) => {

			conta.id = data.res.insertId;

			successCalback(conta);

			console.log(conta.id);

		},(error) => {
			console.log('Error ' + JSON.stringify(error.err));
		});
	}

	edit(conta, successCalback){
		let storage = new Storage(SqlStorage);

		storage.query("UPDATE contas SET descricao = ? WHERE id = ?",[conta.descricao, conta.id]).then((data) => {

			successCalback(conta);

		},(error) => {
			console.log('Error ' + JSON.stringify(error.err));
		});
	}

	delete(conta, successCalback){
		let storage = new Storage(SqlStorage);

		storage.query("DELETE FROM contas WHERE id = ?",[conta.id]).then((data) => {

			successCalback(conta);

		},(error) => {
			console.log('Error ' + JSON.stringify(error.err));
		});
	}

	getList(successCalback){
		let storage = new Storage(SqlStorage);

		storage.query("SELECT * FROM contas").then((data) => {
			let lista = [];

			for (var i =0; i < data.res.rows.length; i++) {

				let item = {};

				item.id = data.res.rows.item(i).id;
				item = data.res.rows.item(i);

				lista.push(item);
			}

			successCalback(lista);

		},(error) => {
			console.log('Error ' + JSON.stringify(error.err));
		});
	}

}
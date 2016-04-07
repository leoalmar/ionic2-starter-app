export class DAOContas {

	constructor(){
		this.list = [];
	}

	insert(conta){
		this.list.push(conta);
	}

	edit(conta){

	}

	delete(conta){
		let pos = this.list.indexOf(conta);

		this.list.splice(pos,1);
	}

	getList(){

		this.list = [
			{descricao: "Alimentação"},
			{descricao: "Saúde"},
			{descricao: "Lazer"},
			{descricao: "Transporte"}
		];

		return this.list;
	}


}
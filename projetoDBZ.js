class guerreirosZ {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "Saiyajin":
        ataque = "o kamehameha";
        break;

      case "Android":
        ataque = "Execução Aurora";
        break;

      case "Shenlong":
        ataque = "Colera do Dragão";
        break;

      case "Kaiohshin":
        ataque = "Expansão de Domínio";
        break;
    }

    const mensagem = `O(a) ${this.nome}, idade: ${this.idade} anos, da raça ${this.tipo}, atacou usando ${ataque}!`;
    console.log(mensagem);
  }
}

const heroi1 = new guerreirosZ("Goku", 36, "Saiyajin");
heroi1.atacar();

const heroi2 = new guerreirosZ("Android 18", 25, "Android");
heroi2.atacar();

const heroi3 = new guerreirosZ("Dragão", 10000, "Shenlong");
heroi3.atacar();

const heroi4 = new guerreirosZ("Kaioh do Leste", 500, "Kaiohshin");
heroi4.atacar();

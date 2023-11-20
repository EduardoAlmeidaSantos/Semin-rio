class Login {
  constructor(id, senha) {
    this._id = id;
    this._senha = senha;
  }

  get id() {
    return this._id;
  }

  set id(novoId) {
    this._id = novoId;
  }

  validarSenha(senhaDigitada) {
    return this._senha === senhaDigitada;
  }
}

let p1 = new Login(1);
p1.senha = 1009;
console.log(`Id: ${p1.id} Senha: ${p1.senha}`);

class Diretoria extends Login {
  constructor(nome, id, senha) {
    super(id, senha);
    this.nome = nome;
  }

  mostrarInf() {
    console.log(`Nome: ${this.nome}`);
  }
}

let diretor = new Diretoria('João', '123', 'senha123');

try {
  const senhaDigitada = 'senha123';
  if (!diretor.validarSenha(senhaDigitada)) {
    throw new Error('Senha incorreta!');
  } else {
    alert('Senha correta!');
    diretor.mostrarInf();
  }
} catch (error) {
  alert(error.message);
}

class Funcionario extends Login {
  constructor(nome, id, senha) {
    super(id, senha);
    this.nome = nome;
  }

  mostrarInf() {
    console.log(`Nome: ${this.nome}`);
  }
}

const func = new Funcionario('Tiago', '1232', 'senha1232');

try {
  const senhaDigitada = 'senha1232';
  if (!func.validarSenha(senhaDigitada)) {
    throw new Error('Senha incorreta!');
  } else {
    alert('Senha correta!');
    func.mostrarInf();
  }
} catch (error) {
  alert(error.message);
}

class Administrador extends Login {
  constructor(nome, id, senha) {
    super(id, senha);
    this.nome = nome;
  }

  mostrarInf() {
    console.log(`Nome: ${this.nome}`);
  }
}

let adm = new Administrador('Rafael', '1057', 'senha1057');

try {
  const senhaDigitada = 'senha1057';
  if (!adm.validarSenha(senhaDigitada)) {
    throw new Error('Senha incorreta!');
  } else {
    alert('Senha correta!');
    adm.mostrarInf();
  }
} catch (error) {
  alert(error.message);
}

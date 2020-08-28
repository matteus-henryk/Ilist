<h2>Ilist - lista de tarefas</h2>

<p>Ilist é uma lista de tarefas desenvolvida para fins educacionais, pondo em pratica
os aprendizados de javascript manipulação da DOM, que aprendi em cursos da Alura</p>

<h3>Funções da lista de tarefas</h3>

<ul>
  <li>Criar item de lista</li>
  <li>Concluir item de lista</li>
  <li>Deletar item de lista</li>
</ul>


<h4>Criar item de lista</h4>
<p>
  Através da função do JavaScript <em>.querySelector</em> tenho acesso a o  input e o botão,
  adiciono um ouvidor de eventos <em>.addEventListener</em> no botão para capiturar o valor 
  do input e criar os itens de lista
</p>

<h4>Concluir item de lista</h4>
<p>
  Todo item de lista é criado com dois botões, um para concluir a tarefa e outro para detelar.
  Com um ouvidor de eventos adcionado ao botão de concluir é possivel adicionar uma classe para
  criar um efeito de riscar o item de lista, utilizei a função <em>.classlist.toggle() </em> para
  criar esse efeito.
</p>

<h4>Deletar item de lista</h4>
<p>
  Da mesma forma como o botão concluir, o botão deleta tem acesso ao seu pai(.parentElement)
  e com a função <em>.remove()</em> ele remove seu parente acima, no caso a 'li'.
</p>

<h5>Conclusão</h5>

<p>
  Desenvolvi essa aplicação simples para treinar manipulaçâo da DOM em javaScript,
  me diverti bastante construindo os códigos .js aqui presentes e ficaria muito grato
  por feedbacks sobre esse projeto.
</p>


<h4>Me siga em minhas redes sociais</h4>

<a href="https://www.instagram.com/matteusfrancischini/?hl=pt-br"> <img width="50" height="50" src="./social/instagram.svg"> </a>
<a href="https://www.linkedin.com/in/matteus-henryk-086451196/"> <img  src="./social/linkedin.svg"> </a>
<a href="https://app.rocketseat.com.br/me/matteus-henryk-1590455615"> <img  src="./social/rocket.svg"> </a>
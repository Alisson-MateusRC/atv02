export default function Projetos() {
  const projetos = [
    {
      nome: "Conexão Escolar",
      desc: "O Conexão Escolar é um projeto em desenvolvimento por mim e meu grupo de projeto integrador onde estamos criando um site de gestão escolar para escolas privadas. O projeto tem como finalidade o gerenciamento de escolas da rede particular e ele atuará na modernização e otimização do trabalho de cadastro e gerenciamento de informações como boletins, cadastros de alunos e professores, açém de facilitar a comunicação entre escola e responsáveis. Através de automatização de relatórios e boletins, sendo possível também o envio de notificações periódicas por e-mail e whatsapp aos pais ou responsáveis.",
    },
    {
      nome: "Hunter Job",
      desc: "Hunter Job é um projeto teórico desenvolvido por mim onde o site iria mostrar vagas de emprego, opções para enviar currículo e marcar entrevistas, além de filtrar empregos mais perto de casa, valores de salários desejados e vincular o quadro de vagas das empresas nele.",
    },
  ];

  return (
    <div>
      <h2>Meus Projetos</h2>
      {projetos.map((p, i) => (
        <div key={i}>
          <h3>{p.nome}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}


function Title(){

    let nome = "aluno FIAP"
    const urlImg = "https://conexaopanvel.faccat.br/wp-content/uploads/2020/05/react-js-800x450.png"
   
    return (
    <div>
    <h1>Aqui é um {nome} e este é um titulo {nome}</h1>
    <img width = {100} src={urlImg}/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure vero ratione
   accusantium corporis, ullam voluptatibus! Fugit, consectetur provident esse quos voluptatibus
   praesentium, expedita ipsa temporibus culpa molestiae in sit?</p>
    </div>
    );
    }
export default Title;
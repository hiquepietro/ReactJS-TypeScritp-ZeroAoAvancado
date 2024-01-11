import { Header } from "./components/header";
import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";

export default function App(){
  return(
    <div>
      <Header title="Aprendendo do zero ao avançado!"/>
        <Aluno nome="Pedro" idade={20}/>
        <Aluno nome="João" idade={25}/>
        <Aluno nome="Maria" idade={30}/>
      <Footer/>
    </div>
  )
}

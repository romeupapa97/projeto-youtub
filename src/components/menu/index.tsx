import { useContext } from "react";
import {
  ButtonIcon,
  Container,
  MenuItem,
 // Divider
  //Invisível,
  //Visível

} from "./styles";
import NotificationIcon from '../../assets/sino.png';
import Inicio from '../../assets/home-inicio.png';
import Alta from '../../assets/fogo-Em alta.png';
import Inscrição from '../../assets/inscrever.png';
import Bibiloteca from '../../assets/biblioteca.png';
import Historic from '../../assets/historico.png';
import Later from '../../assets/Assistir later.png';
import Video from '../../assets/icone-video.png';
import Gostei from '../../assets/gostei.png';
import Shopping from '../../assets/shopping.png';
import Musica from '../../assets/musica.png';
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
 
  const items=[
    {name:'Inicio', link:'/', icon:Inicio},
    {name:'Shorts', link:'/shorts', icon:NotificationIcon},
    {name:'Inscrições', link:'/inscrições', icon:Inscrição},
    {name:'Bibliotecas', link:'/biblioteca', icon:Bibiloteca},
    {name:'Histórico', link:'/historico', icon:Historic},
    {name:'SeusVideos', link:'/seusVideos', icon:Video},
    {name:'AssistirMaisTarde', link:'/assistirTarde', icon:Later},
    {name:'VideoComGostei', link:'/vidosGostei', icon:Gostei},
    {name:'Em alta', link:'/emAlta', icon:Alta},
    {name:'Shopping', link:'/shopping', icon:Shopping},
    {name:'Música', link:'/musica', icon:Musica},
    {name:'Filmes', link:'/filme', icon:NotificationIcon},
    {name:'YouTubePremium', link:'/youtubePremium', icon:NotificationIcon},
    {name:'YouTubeStudio', link:'/youtubeStudio', icon:NotificationIcon},
    {name:'YouTubeMusic', link:'/YoutubeMusic', icon:NotificationIcon},
    {name:'YouTubeKids', link:'/youtuebeKids', icon:NotificationIcon},
    {name:'Configurações', link:'/configuração', icon:NotificationIcon},
    {name:'HistóricoDeDenúncias', link:'/denuncias', icon:NotificationIcon},
    {name:'Ajuda', link:'/ajuda', icon:NotificationIcon},
    {name:'EnviarFeedback', link:'/feedback', icon:NotificationIcon},
  ]
  
  
  
  function Menu(){
    const navigate  = useNavigate();
    const {openMenu}= useContext(UserContext);
    return(
      <Container openMenu={openMenu}>
       
          {items.map((item)=>(
            //<Link key={index} to={item.link} onClick={()=>setOpenMenu(false)}>
              <MenuItem openMenu={openMenu} onClick={()=>navigate(item.link)}>
                <ButtonIcon alt="" src={item.icon}/>
                <span>{item.name}</span>
              </MenuItem>
           // </Link>
          ))}        
      </Container>
    )  
  }
  
  export default Menu;
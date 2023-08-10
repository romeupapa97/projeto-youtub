import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer} from "./styles";


function VideoComponent(){
 
  return(
    <Container>
      <ImageBanner src="https://th.bing.com/th/id/OIP.qAp_CAkGmPe5rExYQ1ieQQHaDs?w=306&h=174&c=7&r=0&o=5&pid=1.7"/>
      <TitleContainer>
        <ChannelImage>
          PV
        </ChannelImage>
        <TextContainer>
          <Title>SINACH | WAY MAKER-OFFICIAL VIDEO</Title>
          <TextContainer>SINACH</TextContainer>
          <TextCard>236 mi de visualizações há 7 ano</TextCard>
        </TextContainer>

      </TitleContainer>
          
    </Container>
  )  
}
export default VideoComponent;
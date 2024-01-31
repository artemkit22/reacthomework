import Simpsons from './Characters/Simpsons'
import RickAndMorty from './Characters2/rickAndMorty'
import rickAndMorty from "./Characters2/rickAndMorty";
function App() {
  return (
    <div>
        <div>
      <Simpsons name={'bart'} img={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}/>
      <Simpsons name={'alice'} img={'https://w7.pngwing.com/pngs/990/365/png-transparent-lisa-simpson-bart-simpson-homer-simpson-maggie-simpson-marge-simpson-simpsons-heroes-fictional-character-cartoon.png'}/>
      <Simpsons name={'ghomer'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdp57vBOIvie-hFeTDKRnEYkjsWAESLHghVI9ALuk2w1siZn4GqWZSj_OWYIMKi8koTo&usqp=CAU'}/>
      <Simpsons name={'megi'} img={'https://static.wikia.nocookie.net/simpsons/images/8/8b/Maggie.jpg'}/>
      <Simpsons name={'cloun'} img={'https://nastya-simpson.narod.ru/krasti.jpg'}/>
        </div>
        <div>
                <RickAndMorty id={'1'} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} img={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
                <RickAndMorty id={'2'} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'} img={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
                <RickAndMorty id={'3'} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} img={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
                <RickAndMorty id={'4'} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'} img={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
                <RickAndMorty id={'5'} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} img={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
                <RickAndMorty id={'6'} name={'Jerry Smith'} status={'Alive'} species={'Alien'} gender={'Female'} img={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
        </div>
    </div>



  );
}

export default App;

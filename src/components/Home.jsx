import { useState, useEffect, useRef} from 'react'
import '../App.css';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

import chatgpt1 from './images/chatgpt7.jpg'
import chatgpt2 from './images/chatgpt4.jpg'
import chatgpt4 from './images/chatgpt1.jpg'
import chatgpt5 from './images/chatgpt5.png'
import chatgpt6 from './images/chatgpt6.png'


const images = [chatgpt2, chatgpt1, chatgpt5, chatgpt6, chatgpt4]

function Home() {
const carousel = useRef();
const [width, setWidth] = useState(0)

useEffect(() => {
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])

  return (
    <div className="App">

<div>
      <h2 className='titulo'>
        Vamos entender um pouco sobre o ChatGPT!
      </h2>
    </div>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div
        className="inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width}}
        initial={{ x:100}}
        animate={{x: 0}}
        transition={{ duration: 0.8}}
        >

          {images.map(chatgpt => (
            <motion.div className='item' key={chatgpt}>
              <img src={chatgpt} alt="Text alt"/>
            </motion.div>  
          ))}
        </motion.div>
      </motion.div>
    <div>
      <h2>
        O ChatGPT é um chatbot que utiliza inteligência artificial, variante do modelo de linguagem GPT-3, desenvolvido pela startup OpenAI. O GPT-3 foi treinado com uma enorme quantidade de dados de texto, e o ChatGPT é uma variante desse modelo otimizado para gerar texto em estilo de conversação, ou seja, gerar respostas de maneira natural e humana.
      </h2>
    </div>
      <Link className='link' to='/Home2'>Acesse o ChatGPT</Link>
    
    </div>
  );
}

export default Home;
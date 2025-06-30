import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowInfo from './components/showInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MPopWork from './components/MPopWork';
import NoPage from './components/NoPage';

const artistWorks = [
  {
    title: "Портрет душі",
    publishYear: 1988,
    technique: "акрил, пльонтанізм",
    desc: "Один із найбільш знакових творів художника, що відображає глибоке внутрішнє самопізнання. У картині Марчук використовує свою характерну техніку мікроскопічних ліній, що створюють враження динаміки й руху."
  },
  {
    title: "Вітряки",
    publishYear: 1990,
    technique: "акрил, комбінована техніка",
    desc: "Картина, що відображає важливу частину української культури — сільське життя. Вітряки у роботі Марчука не просто механізми, а й символи боротьби людини з природними стихіями."
  },
  {
    title: "Міраж",
    publishYear: 1993,
    technique: "акрил, пльонтанізм",
    desc: "Вражаючий абстрактний твір, де на перший погляд хаотичні лінії створюють образи, що змінюються залежно від перспективи. Картина має глибокий філософський підтекст про сприйняття реальності."
  },
  {
    title: "Світло і тіні",
    publishYear: 1995,
    technique: "олія, пльонтанізм",
    desc: "У цій картині Марчук знову звертається до теми світла і тіні, розглядаючи взаємодію цих елементів в контексті людської душі та її боротьби."
  },
  {
    title: "Ідея",
    publishYear: 1997,
    technique: "акрил, змішана техніка",
    desc: "Абстрактна композиція, де художник намагається передати ідею творчості як процес, в якому особливу роль відіграють інтуїція і глибоке розуміння суті."
  },
  {
    title: "Тінь вітру",
    publishYear: 2001,
    technique: "олія, акрил",
    desc: "Ця робота є поєднанням абстракції та сюрреалізму, де вітри і тіні відображаються у вигляді виразних фігур і символів."
  },
  {
    title: "Я і ти",
    publishYear: 2005,
    technique: "акрил, комбінована техніка",
    desc: "Робота, що символізує взаємозв’язок між людиною і світом. Це своєрідна метафора для відносин між людиною і природою, де кожен елемент є частиною цілого."
  },
  {
    title: "Дерево життя",
    publishYear: 2009,
    technique: "олія, змішана техніка",
    desc: "Відображає цикл життя через символ дерева. Робота є оригінальним трактуванням універсальної теми — від народження до смерті, від початку до кінця."
  },
  {
    title: "Безсмертя",
    publishYear: 2011,
    technique: "акрил, змішана техніка",
    desc: "Витончена й глибока метафора про безсмертя духу, художник використовує символічні образи для передачі цієї теми."
  }
];



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mostpopularwork" element={<MPopWork />} />
          <Route path="works" element={<ShowInfo artists={artistWorks} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

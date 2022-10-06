import triviaImg from '../images/TriviaApp.png'
import trybewalletImg from '../images/trybewallet.png'
import shoppingCartImg from '../images/shoppingCart.png'
import solarSystemImg from '../images/solar-system-react-app.png'
import pixelArtImg from '../images/pixel-art.png'

export const mockData = [{
  id: 1,
  name: 'Trivia Game',
  src: triviaImg,
  resume: 'The Trivia App is a game application, where the user can log in, and then they will be directed to the game page. On this page, the player must answer the correct option within 30 seconds. 5 questions will be asked and at the end the score won by the player is shown.',
  stacks: ["JavaScript", "Styled-Components", "React", "Redux", "RTL"],
  vercel: 'https://react-trivia-eta.vercel.app/'
}, {
  id: 2,
  name: 'TrybeWallet',
  src: trybewalletImg,
  resume: 'TrybeWallet is an application that simulates an expense control wallet. After logging in on the home screen, the user is directed to the expense control page, where he can edit the expense, the expense amount, and choose, among the options, the currency he would like to convert the value to. A request is made to a currency API, returning the exact value of the currency chosen at that moment. After selecting all the options, we have the amount converted to BRL in the header, as well as the entire description of the expense in the application table lines. A great app to control expenses.',
  stacks: ["JavaScript", "CSS", "React", "Redux", "RTL"],
  vercel: 'https://trybe-wallet-lac.vercel.app/'
}, {
  id: 3,
  name: 'Shopping Cart',
  src: shoppingCartImg,
  resume: 'TrybeWallet is an application that simulates an expense control wallet. After logging in on the home screen, the user is directed to the expense control page, where he can edit the expense, the expense amount, and choose, among the options, the currency he would like to convert the value to. A request is made to a currency API, returning the exact value of the currency chosen at that moment. After selecting all the options, we have the amount converted to BRL in the header, as well as the entire description of the expense in the application table lines. A great app to control expenses.',
  stacks: ["HTML", "JavaScript", "CSS"],
  vercel: 'https://shopping-cart-projectjs.vercel.app/'
}, {
  id: 4,
  name: 'Solar System',
  src: solarSystemImg,
  resume: 'Solar System is an application dedicated to the great missions carried out in space, in search of answers and more knowledge about the planets of our solar system.',
  stacks: ["JavaScript", "CSS", "React"],
  vercel: 'https://solar-system-info.vercel.app/'
}, {
  id: 5,
  name: 'Pixels Art',
  src: pixelArtImg,
  resume: 'Pixels Art is a simple application that allows the user to click on the colors, which are generated automatically and randomly when the page is loaded. It is possible to paint and create pixelated images, with pixels-art!',
  stacks: ["HTML", "JavaScript", "CSS"],
  vercel: 'https://pixels-art-cql3.vercel.app/'
}];

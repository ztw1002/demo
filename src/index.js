import ReactDOM from 'react-dom/client'
import App from './App'
import Vote from './demo/Vote_Func/Vote'
import VoteFooter from './demo/Vote_Func/VoteFooter'
import VoteMain from './demo/Vote_Func/VoteMain'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
      <Vote>
        <VoteMain supNum=""/>
        <VoteFooter />
      </Vote>
  </div>
)
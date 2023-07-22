import ReactDOM from 'react-dom/client'
import Dialog from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
      <Dialog title="友情提示"  content="出门注意安全">
        <button>确定</button>
        <button>好的</button>
      </Dialog>

  </div>
)
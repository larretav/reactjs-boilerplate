import DefaultLayout from '@/app/default-layout'
import { TodoList } from './components/TodoList'
import { NewToDoModal } from './components/NewToDoModal'

export const WelcomePage = () => {

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center gap-3">
        <div className="sticky top-20 z-20 text-right">
          <NewToDoModal />
        </div>
        <TodoList />
      </div>
    </DefaultLayout>
  )
}

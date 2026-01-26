import DefaultLayout from '@/app/default-layout'
import { TodoList } from './components/TodoList'

export const WelcomePage = () => {

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center">
        <TodoList />
      </div>
    </DefaultLayout>
  )
}

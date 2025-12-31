import DefaultLayout from '@/app/default-layout'

export const WelcomePage = () => {
  return (
    <DefaultLayout>
      <div className="w-screen h-screen flex justify-center">
        <div className="max-w-[300px] h-fit bg-red-100 rounded-small shadow-small p-4 mt-10 ">
          WelcomePage
        </div>
      </div>
    </DefaultLayout>
  )
}

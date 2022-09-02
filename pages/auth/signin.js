import {getProviders, signIn} from "next-auth/react"

export default function signin({providers}) {
  return (
    <div>
        <h1>signin page</h1>
    </div>
  )
}

export async function getServerSideProps(context){
    const providers = await getProviders();
    return{
        props: {providers}
    }
}
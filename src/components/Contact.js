
export default function Contact () {

    const config = {
        email : 'eniyaa20@gmail.com',
        phone: '+5794313980'
    }

    return <section id='contact' className='md:flex-row flex flex-col bg-secondary px-5 py-32 font-project-font'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4 border-black border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <div className="flex flex-col ">
            <p className='pb-5'>Feel free to reach out to me via Email or through Phone for any inquiries </p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
            </div>
        </div>
    </section>
}
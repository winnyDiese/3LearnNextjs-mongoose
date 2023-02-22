
import connectMongo from '@/utils/connectMongo'
import Test from '@/models/test'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponset} res
 */


export default async function addTest(req,res){

    try {

        // const name = req.body.name
        // const email = req.body.email

        
        const {name, email} = req.body
        const  user = {name, email}


        console.log('CONNECTING TO MONGO')
        await connectMongo()
        console.log('CONNECTED TO MONGO')



        console.log('CREATING DOCUMENT')
        // const test = await Test.create({name, email})
        // await test.save()
        // .then(console.log('Document saved'))
        // .catch(error => console.log(error.message))
        // console.log('CREATED DOCUMENT')


        const test = new Test(user)
        await test.save()
        console.log('CREATED DOCUMENT')

        res.json({test})

    } catch (error) {
        console.log(error)
        res.json({error})
    }
}


import { Schema, model, models} from 'mongoose'

const testSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

// const Test = models.Test || model.Schema('Test', testSchema)

try {

    const Test = model.Schema('Test', testSchema)
    // export default Test
    console.log(Test)
    
} catch (error) {
    console.log(error)
}

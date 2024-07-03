// require mongo
import  mongoose from "mongoose";

// DB Connection
const connectDB= async ()=>{

    try {
        const conn=await mongoose.connect("mongodb+srv://ayushskt001:1234567890@testing.qvgyhtv.mongodb.net/?retryWrites=true&w=majority&appName=testing", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
        // catch response error        
    } catch (error) {  
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}
export default connectDB
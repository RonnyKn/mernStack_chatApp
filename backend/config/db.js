import mongoose from "mongoose"

export const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(
      `mongoDb Connected Successfully ${conn.connection.host}`.cyan.underline
    )
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold)
    process.exit()
  }
}

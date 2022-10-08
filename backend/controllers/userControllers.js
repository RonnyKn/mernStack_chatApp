import asyncHandler from "express-async-handler"
import { User } from "../model/userModel.js"
import { generateToken } from "../config/generateToken.js"

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error("Please enter all the fields")
  }

  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error("user already exist")
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      password: user.password,
      pic: user.pic,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Fail to create new User")
  }
})

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      pic: user.pic,
      token: generateToken(user._id),
    })
  } else {
    throw new Error("Invalid Email or Password")
  }
})

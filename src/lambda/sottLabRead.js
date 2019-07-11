import db from './server'
import mongoose from 'mongoose'
import Sottlab from './product.model'

exports.handler= async (event, context)

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    
    try {
      // Use Product.Model to find all products
      const sottlab = await Sottlab.find(),
            response = {
              msg: "Products successfully found",
              data: sottlab
            }
      
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
      
    } catch (err) {
      console.log(err) // output to netlify function log
      return {
        statusCode: 500,
        body: JSON.stringify({msg: err.message})
      }
    }
  }
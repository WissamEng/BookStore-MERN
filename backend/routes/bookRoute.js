import express from 'express';
import { Book } from '../models/bookModel.js';

const Router = express.Router();



  Router.post("/", async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: "all fields are required",
        });
      }
  
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };
  
      const book = await Book.create(newBook);
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  Router.get('/', async (request, response)=>{
      try{
          const books  = await Book.find({});
          return response.status(200).send(books);
      }catch(error){
          console.log(error.message);
          response.status(500).send({ message: error.message });
      }
  
  });
  
  Router.get('/:id', async (request, response)=>{
      try{
          const {id} = request.params;
          const book  = await Book.findById(id);
          return response.status(200).send(book);
      }catch(error){
          console.log(error.message);
          response.status(500).send({ message: error.message });
      }
  
  });
  
  Router.put('/:id', async (request, response) =>{
      try{
          if (
              !request.body.title ||
              !request.body.author ||
              !request.body.publishYear
            ) {
              return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
              });
            }
  
            const {id} = request.params;
            const result = await Book.findByIdAndUpdate(id,request.body);
  
            if (!result){
              return response.status(404).json({message:'book not found'});
            }
            return response.status(200).send({message: 'book has been updated succesfully'});
  
      }catch (error){
          console.log(error.message);
          response.status(500).send({ message: error.message });
      }
  });

  export default Router;
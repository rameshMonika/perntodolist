const express=require("express");


const app=express();

const cors=require("cors")
const pool=require("./db");

//middleware
app.use(cors());
app.use(express.json());


//ROUTES

//CREATE A TO DOS

app.post("/todos", async(req,res)=>{
    //await

    try{

        const {description}=req.body;
        const newTodo=await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);

        res.json(newTodo.rows[0])

    }
   catch(err){
       console.error(err.message);

   }
})


//GET ALL TO DO

app.get("/todos", async(req,res)=>{
    //await

    try{

      
        const allToDos=await pool.query("SELECT * FROM todo");

        res.json(allToDos.rows)

    }
   catch(err){
       console.error(err.message);

   }
})


//GET A TODO


app.get("/todos/:id", async(req,res)=>{
    //await

    try{

       
        console.log(req.params)

        const {id}=req.params;
      
        const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);

        res.json(todo.rows)

    }
   catch(err){
       console.error(err.message);

   }


})


//UPDATE A TODO




app.put("/todos/:id", async(req,res)=>{
    //await

    try{


        console.log(req.params)

        const {id}=req.params;
        const {description}=req.body;
      
        const updateTodo=await pool.query("UPDATE todo SET description =$1 WHERE todo_id=$2",[description,id]);

        res.json("to do updated")


    }
   catch(err){
       console.error(err.message);

   }
})

//DELETE A TODO


app.delete("/todos/:id", async(req,res)=>{
    //await

    try{

       
        console.log(req.params)

        const {id}=req.params;
      
        const todo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);

        res.json("TO do was deleted")

    }
   catch(err){
       console.error(err.message);

   }


})





app.listen(5000, ()=>{
    console.log(`server has started on port 5000`)
});



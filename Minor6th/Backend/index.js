import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
try {
  mongoose
    .connect(
      "mongodb+srv://prakharbhawsar:prakhar51@cluster0.ump5jpf.mongodb.net/DineInsight?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(console.log("DB Connected"))
    .catch((err) => console.log("Error: ", err));
} catch (error) {
  console.log("DB not Connected");
}

const userSchema = mongoose.Schema({
  FullName:{
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const RestruantTableRequestSchema = mongoose.Schema({
  resdate:{type:String},
  people:{type:String},
  tableNo:{type:Number},
  RestaurantId:{type:String},
  UserId:{type:String},
  ResStatus:{type:String}
});

const RestruantRegistationSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  restiming: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  category: {
    type: String,
  },
  rating: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: String,
  },
  resdisimg: {
    type: String,
  },
  resmenu: {
    type: String,
  },
});

const User = new mongoose.model("users", userSchema);
const RestruantTableRequest = new mongoose.model("RestruantTableRequest", RestruantTableRequestSchema);
const RestruantRegistation = new mongoose.model(
  "RestruantRegistation",
  RestruantRegistationSchema
);

app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("I am here");
});

app.get("/getData", async(req, res) => {
  try{
    const ads = await RestruantRegistation.find();

    return res.status(200).json({
      success: true,
      count: ads.length,
      data: ads,
    });
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
  }
  res.status(200).send("I am here");
});

app.post('/login', async(req,res)=>{
  try {
    // check if the user exists
   User.findOne({ email: req.body.email }).then((user)=>
        res.json({     
        status:"success",
        message:"Login Successfull",
        data:{
            user
        }
      }))
  } catch (error) {
    res.status(400).json({ error });
  }
})

app.post("/register", function (req, res) {
  var data = req.body;
  const user = new User({
    FullName: data.FullName,
    email: data.email,
    password: data.password,
  });
  user.save()
    .then((item) => {
      console.log("Registration Success", item);
      res.status(200).send({message:"Registration Success",item});
    })
    .catch((err) => {
      console.log("unable to save to db", err);
      res.status(402).send({message:"Error in register"});
    });
});

app.put('/updateResData',function(req,res){
  const {resid,msz} = req.body; 
  const _id = resid;
  RestruantTableRequest.findByIdAndUpdate({ _id },{
    $set: 
    {
      ResStatus: msz,
    }
  }
).then((item)=>{
  res.status(201).send(item)
})
})

app.post('/restaurantreserve',function(req,res){
 const {
  resdate,
  people,
  tableNo,
  RestaurantId,
  UserId,
} = req.body;
const ResStatus = "Pending"; 
const ResTableRequest = new RestruantTableRequest({
  resdate,
  people,
  tableNo,
  RestaurantId,
  UserId,
  ResStatus,
});

ResTableRequest.save()
  .then((item) => {
    console.log("Registration Success", item);
    res.status(201).send({ message: "Table Request Send"});
  })
  .catch((err) => {
    console.log("unable to save to db", err);
    res.status(402).send("unable to save to database");
  });
})

app.post("/sendRequest", function (req, res) {
  const {
    fullname,
    email,
    mobile,
    password,
    address,
    restiming,
    cuisine,
    category,
    rating,
    location,
    price,
    resdisimg,
    resmenu,
  } = req.body;

  const ResRequest = new RestruantRegistation({
    fullname,
    email,
    mobile,
    password,
    address,
    restiming,
    cuisine,
    category,
    rating,
    location,
    price,
    resdisimg,
    resmenu,
  });
  ResRequest.save()
    .then((item) => {
      console.log("Registration Success", item);
      res.status(200).send({ message: "Registration Success" ,item});
    })
    .catch((err) => {
      console.log("unable to save to db", err);
      res.status(402).send("unable to save to database");
    });
});

app.post('/reslogin', async(req,res)=>{
  try {
    // const {email} = req.body;
    const user = await RestruantRegistation.find({email:req.body.email});
    console.log(user);
    res.json({     
        status:"success",
        message:"Login Successfull",
        data:{
            user
        }
      })
  } 
  catch (error) {
    res.status(400).json({ error });
  }
})

app.get("/getData/:id", getData, (req, res) => {
  res.send(res.data);
});

app.get("/getResData/:id", getResData, (req, res) => {
  res.send(res.data);
});
app.get("/getnotification/:id", getnotification, (req, res) => {
  res.send(res.data);
});

async function getnotification(req, res, next) {
  let data;
  try {
    data = await RestruantTableRequest.find({UserId : req.params.id});
    if (data == null) {
      console.log("unable to save to db");
      res.status(404).send({ message: "cannot find this Id" });
    }
  } catch (e) {
    console.log("unable to save to db: ", e);
    res.status(500).send({ message: "unable to save to db" });
  }
  res.data = data;
  next();
}
async function getResData(req, res, next) {
  let data;
  try {
    data = await RestruantTableRequest.find({RestaurantId : req.params.id});
    if (data == null) {
      console.log("unable to save to db");
      res.status(404).send({ message: "cannot find this Id" });
    }
  } catch (e) {
    console.log("unable to save to db: ", e);
    res.status(500).send({ message: "unable to save to db" });
  }
  res.data = data;
  next();
}



async function getData(req, res, next) {
  let data;
  try {
    data = await RestruantRegistation.findById(req.params.id);
    if (data == null) {
      console.log("unable to save to db");
      res.status(404).send({ message: "cannot find this Id" });
    }
  } catch (e) {
    console.log("unable to save to db: ", e);
    res.status(500).send({ message: "unable to save to db" });
  }
  res.data = data;
  next();
}


app.listen(PORT, function () {
  console.log(`Backend is running on Port: ${PORT}`);
});

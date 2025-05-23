import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import  CompanyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";



dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// const corsOptions = {
//     origin: 'http://localhost:5173',
//     credentials: true,
// }

const corsOptions ={
  origin: ['https://job-portal-alpha-sooty.vercel.app'],
  credentials: true
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/company/", CompanyRoute);
app.use("/api/v1/job/", jobRoute);
app.use("/api/v1/application", applicationRoute);



"http://localhost:8000/api/v1/user/register"
"http://localhost:8000/api/v1/user//login"
"http://localhost:8000/api/v1/user/profile/update"


app.listen(PORT, () => {
    connectDB();
    console.log(`server running at port ${PORT}`);
})






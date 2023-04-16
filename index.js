import express, { request, response } from "express";
import { engine } from "express-handlebars";
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const students = [
  {
    name: "Nouran",
    id: 1,
    city: "cairo",
  },
  {
    name: "Mohamed",
    id: 2,
    city: "cairo",
  },
  {
    name: "Eman",
    id: 3,
    city: "tanta",
  },
  {
    name: "Ahmed",
    id: 4,
    city: "sheibin",
  },
  {
    name: "Mahmoud",
    id: 5,
    city: "sheibin",
  },
  {
    name: "Wessam",
    id: 6,
    city: "sheibin",
  }
];

const studentsFunction = (request, response) => {
  response.render("students", { layout: false, students });
};

app.get("/students", studentsFunction);

app.get("/students/:id", (request, response) => {
  const id = request.params.id;
  const student = students.find((item) => {
    return item.id == id;
  });
  response.render("student", { layout: false, student: student }); //template=>student //ابعت داتا لhtml(من ملف ال js)
});

app.listen(5000);

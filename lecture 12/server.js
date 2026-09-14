const express = require('express');
const employeesroute = require("./routes/employeesroute");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", employeesroute);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
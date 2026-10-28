use("HospitalDB")

// db.doctors.insert({
//     name: "Dr. Smith",
//     specialty: "Cardiologist",
//     yearsOfExperience: 10,
//     fees: 200,
//     salary: 150000,
//     department: "Cardiology",
// })

// db.doctors.insertMany([
//     {
//         name: "Dr. Johnson",
//         specialty: "Neurologist",
//         yearsOfExperience: 15,   
//         fees: 250,
//         salary: 180000,
//         department: "Neurology",
//     },
//     {
//         name: "Dr. Rakesh",
//         specialty: "Orthopedic Surgeon",
//         yearsOfExperience: 12,
//         fees: 300,
//         salary: 200000,
//         department: "Orthopedics",
//     },
//     {
//         name: "Dr. Abhijeet",
//         specialty: "Pediatrician",
//         yearsOfExperience: 8,
//         fees: 150,
//         salary: 120000,
//         department: "Pediatrics",
//     }
// ])

// Read Operations 1.find(), 2.findOne()
// db.doctors.find()
// db.doctors.findOne();
// db.doctors.find({ name: "Abhijeet" });
// db.doctors.find({ specialty: "Cardiologist" });

db.doctors.updateMany(
    { name: "Dr. Rakesh" },
    {
         $set: { 
            fees: 300,
            appointments: 12
        }
    }
)

db.doctors.deleteMany(
    { name: "Dr. Rakesh" }
)


db.doctors.find({ fees:{ $gte: 200 } })



// db.doctors.find(
//     {
//         $or:[
//             {department:"cardiology"},
//             {fees:{$eq: 1000}}
//         ]
//     }   
// )   
// db.doctors.find({},{name:1,department:1,fees:1,_id:0}) 
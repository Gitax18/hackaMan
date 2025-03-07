const connectDB = require("../db/connection");
const { Success, Error } = require("../responseStructure/responseStructures");

exports.postCollegeList = async (req, res, next) => {
  try {
    const conn = await connectDB();
    const db = await conn.db;
    const response = await db.collection("universities");
    const result = await response.find({}).toArray();

    const data = result.map((college) => {
      return {
        _id: college._id,
        college: college.college_name,
      };
    });

    return res
      .status(200)
      .json(Success("Data Fetched Successfully", data, true));
  } catch (error) {
    return res
      .status(500)
      .json(Error("Error fetching colleges data", error, false));
  }
};

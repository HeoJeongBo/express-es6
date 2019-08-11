import Schedule from "db/schemas/schedule";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

async function create(req, res, next) {
  const { id, date, text } = req.body;

  const newSchedule = new Schedule({
    id,
    date,
    text
  });
  try {
    await newSchedule.save();
    res.status(200).json({
      newSchedule,
      message: "성공적으로 생성"
    });
  } catch (e) {
    res.status(500).json({
      message: "데이터베이스 오류 발생"
    });
  }
}

async function list(req, res, next) {
  const { userId } = req.params;
  try {
    const scheduleList = await Schedule.find({ id: userId });
    console.log(scheduleList);
    res.status(200).json({
      scheduleList
    });
  } catch (e) {
    res.status(500).json({
      message: "db error"
    });
  }
}

async function remove(req, res, next) {
  const { id } = req.params;
  try {
    await Schedule.findByIdAndRemove(id);
    res.status(200).json({
      message: "remove success"
    });
  } catch (e) {
    res.status(500).json({
      message: "db error"
    });
  }
}

export { create, list, remove };

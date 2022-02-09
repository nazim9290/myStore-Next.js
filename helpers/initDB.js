import mongoose from "mongoose";

const initDb = () => {
  //ডাটাবেস কে একজায়গা থেকে শুধু নয় বিভিন্ন জায়গা থেকে কল করা হতে পারে তাই একটা কন্ডিশনের মাধ্যমে বুজিয়ে দিতে হিবে ডাটা বেস রানিনং আছে কি না নেই /

  if (mongoose.connections[0].readyState) {
    console.log("all ready connected");
    return;
  }

  //this main connection code
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bug5j.mongodb.net/storeDb?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("connected to mongo", err);
  });
};

export default initDb;

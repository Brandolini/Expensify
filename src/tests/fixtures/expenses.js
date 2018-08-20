import moment from "moment";

export default [
  {
    id: "1",
    description: "Pet Rock",
    note: "",
    amount: 3050,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Guitar",
    note: "",
    amount: 90099,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Cocaine",
    note: "",
    amount: 77500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

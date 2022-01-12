// import moment from "moment";
// Get visible expenses
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ expenses, filters }) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((expense) => {
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(expense.createdAt, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(expense.createdAt, "day")
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt <= b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount <= b.amount ? 1 : -1;
      } else {
        return false;
      }
    });
};

import { useEffect, useState } from "react";
import { Container, Heading, VStack } from "@chakra-ui/react";
import ExpenseForm from "./components/ExpenseForm";
import SummaryCard from "./components/SummaryCard";
import ExpenseList from "./components/ExpenseList";
import CategoryPieChart from "./components/charts/categoryPieChart";

export default function App() {
  const [expenses, SetExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || [],
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  const addExpense = (Newexpenses) => {
    SetExpenses((prev) => [...prev, Newexpenses]);
  };
  const deleteExpense = (id) => {
    SetExpenses(expenses.filter((e) => e.id !== id));
  };
  return (
    <Container maxW={Container.md} py={6}>
      <VStack spacing={6}>
        <Heading>Expense Tracker</Heading>
        <SummaryCard expenses={expenses} />
        <ExpenseForm addExpense={addExpense} />
        <CategoryPieChart expenses={expenses} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </VStack>
    </Container>
  );
}

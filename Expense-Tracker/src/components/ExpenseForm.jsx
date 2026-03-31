import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [title, SetTitle] = useState("");
  const [category, SetCategory] = useState("Food");
  const [amount, SetAmount] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !amount) return alert("please Enter your Expenses ");
    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date: new Date(),
    });
    SetTitle("");
    SetAmount("");
  }
  return (
    <Box as="form" onSubmit={handleSubmit} w="50%">
      <Input
        placeholder="Expense-Title"
        value={title}
        mb={2}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount"
        mb={2}
        value={amount}
        onChange={(e) => SetAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => SetCategory(e.target.value)}>
        <option value="">Food</option>
        <option>travel</option>
        <option>Bills</option>
        <option>Shopping</option>
      </select>
      <Button colorScheme="teal" w="100%" type="submit">
        Add Expense
      </Button>
    </Box>
  );
}

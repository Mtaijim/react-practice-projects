import { Box, HStack, Text, Button } from "@chakra-ui/react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <Box>
      {expenses.map((e) => (
        <HStack key={e.id} justify="space-between" p={3} mb={2}>
          <Text>
            {e.title}-{e.amount} ({e.category})
          </Text>
          <Button
            size="sm"
            colorScheme="red"
            onClick={() => deleteExpense(e.id)}
          >
            Delete
          </Button>
        </HStack>
      ))}
    </Box>
  );
}

export default ExpenseList;

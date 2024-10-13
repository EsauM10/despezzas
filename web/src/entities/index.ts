type ExpenseDTO = {
  id: string;
  title: string;
  status: string;
  category: CategoryDTO;
  value: number;
  date: string;
};

type CategoryDTO = {
  id: string;
  title: string;
  imageUrl: string;
};

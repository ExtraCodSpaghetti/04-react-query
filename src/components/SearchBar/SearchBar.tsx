import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

// src/components/OrderForm.tsx
// interface OrderFormProps {
//   onSubmit: (value: string) => void;
// }

// export default function OrderForm({ onSubmit }: OrderFormProps) {
//   const handleSubmit = (formData: FormData) => {
//     const username = formData.get("username") as string;
//     onSubmit(username);
//   };

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Place order</button>
//     </form>
//   );
// }

interface SearchBarProps {
  action: (formData: FormData) => void;
}

export default function SearchBar({ action }: SearchBarProps) {
  const handleFormAction = (formData: FormData) => {
    const query = (formData.get("query") as string)?.trim();
    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }
    action(formData);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handleFormAction} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
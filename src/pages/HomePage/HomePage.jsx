import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <h2 className={css.title}>
        {isLoggedIn ? (
          <>
            <span>Welcome back, {user.name}!</span>
          </>
        ) : (
          <>
            <span>Welcome to the Phonebook App</span>
          </>
        )}
      </h2>
      {isLoggedIn && <p className={css.greeting}>Hello, {user.name}!</p>}
      <p className={css.description}>
        This is a simple application to manage your contacts.
      </p>
    </div>
  );
}

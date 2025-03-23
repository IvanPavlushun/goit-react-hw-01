import s from "./App.module.css";
import { Profile } from "./component/Profile/Profile";
import userData from "./assets/userData.json";
import friends from "./assets/friends.json"
import FriendList from "./component/FriendList/FriendList";
import transactions from "./assets/transactions.json"
import TransactionHistory from "./component/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>User</h2>
        <Profile user={userData} />
      </section>
      <section className={s.section}>
        <h2 className={s.title}>Friends</h2>
        <FriendList friends={friends} />
      </section>
      <section className={s.section}>
        <h2 className={s.title}>Transaction</h2>
        <TransactionHistory transactions={transactions} />
      </section>
    </>
  );
};

export default App;

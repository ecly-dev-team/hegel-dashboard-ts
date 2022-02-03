import { Ref, ref } from "vue";
import { User } from "./interface/user.interface";

interface State {
  user: Ref<User | null>;
}

class store {
  state: State;
  constructor() {
    this.state = {
      user: ref(null),
    };
  }
  loginUser(user: User): void {
    this.state.user.value = user;
    const userString = JSON.stringify(user);
    localStorage.setItem("user", userString);
  }
  logoutUser(): void {
    this.state.user.value = null;
    localStorage.removeItem("user");
    location.reload();
  }
  getUser(): Ref<User | null> {
    return this.state.user;
  }
  loggedIn() {
    return !!this.state.user.value;
  }
}

export default new store();

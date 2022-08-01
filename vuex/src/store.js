import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      name: "Ali",
      lastName: "Yıldız",
      password: "12345",
    },
    userList: ["Gökhan", "Tayfun", "İlker"],
    FullName: "Ali Yıldız",
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
    ],
  },
  //stateden verileri geri döner.
  getters: {
    woodItems: (state) => state.itemList.filter((i) => i.type == "mobilya"),
    //password alanını göstermek istemediğimizde state'deki değeri bir değişkene atayıp onun üzerinden
    //gösterilmeyecek alan silinir.İlgili yeni veri geri dönülür.
    activeUser(state) {
      const user = {
        ...state.person,
      };
      delete user.password;
      return user;
    },
  },
  //mutations state set etmek,güncellemek için kullanılır.
  //anlık olarak hızlı şekilde state güncellenir.Senkron çalışır
  //küçük bir gecikme olması durumunda verinin set edileceği garantisi yok.
  mutations: {
    //item değeri bu metoda gönderilecek veriyi alan değişken ismi. istenen anlamlı isim verilebilir.
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  //mutations'lara göre daha güclüler. Asenkron çalışırlar.
  //context değişkeni bir objedir.
  //asekron çalışırlar.
  actions: {
    //newItem-{context, item}-  commit işlemini kullanacağını belirtip direkt commit yazıp işlem yapılabilir.
    //dispatch isşlemleri de aynı şekilde içerisnde yapılabilir.
    newItem({commit}, item) {
      setTimeout(() => {
        //context.commit("newItem", item);
        commit("newItem", item);
      }, 2000);
    },
  },
});

export default store;

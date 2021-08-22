import { firebase } from '@firebase/app'
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCiXhTDanUDCIo0aWjHXnL4g5YQfC57fCo",
  authDomain: "expensify-4e88f.firebaseapp.com",
  projectId: "expensify-4e88f",
  storageBucket: "expensify-4e88f.appspot.com",
  messagingSenderId: "548961280543",
  appId: "1:548961280543:web:a0a8401edf02f6059feb2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();

database.collection("test").add({ a: "bb" }).then((ref) => {
  console.log("test id", ref.id)
});

/*db.collection("notes")
  //.where('body', '==', 'testetss')
  .get()
  .then((querySnapshot) => {
    const expenses = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      expenses.push({
        id: doc.id,
        ...doc.data()
      })
    });
    console.log(expenses)
  });


db.collection("notes").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      console.log("New: ", change.doc.data());
    }
    if (change.type === "modified") {
      console.log("Modified: ", change.doc.data());
    }
    if (change.type === "removed") {
      console.log("Removed: ", change.doc.data());
    }
  })
})*/

/*const notes = [
  {
    title: 'first note',
    body: "this is a note"
  },
  {
    title: 'second note',
    body: "testetss"
  },
]

db.collection("notes").add(notes[0])
db.collection("notes").add(notes[1])*/

/*db.collection("cities").doc("LA").set({
  name: "Los Angeles!",
  state: "CA",
  weather: "awesome",
  population: 1000000,
  arrayExample: [5, true, "hello"],
  nested: {
    data: true,
    leaveThisField: "hehe"
  }
}).then(() => {
  console.log("data saved")
}).catch((error) => {
  console.log("FIREBASE ERROR CAUGHT:\n ", error)
});

db.collection("cities").doc("LA").get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("FIREBASE ERROR CAUGHT:\n ", error)
});

const unsubscribe = db.collection("cities").doc("LA").onSnapshot((doc) => {
  console.log("Current data:", doc.data());
});

setTimeout(() => {
  db.collection("cities").doc("LA").update({
    population: 1000000
  })
}, 2000)
setTimeout(() => {
  db.collection("cities").doc("LA").update({
    population: 2000000
  })
}, 3000)
setTimeout(() => {
  unsubscribe();
}, 3500)
setTimeout(() => {
  db.collection("cities").doc("LA").update({
    population: 3000000
  })
}, 4000)*/

/*db.collection("cities").doc("LA").update({
  population: firebase.firestore.FieldValue.increment(50)
})

db.collection("cities").doc("LA").update({
  "nested.data": "updated value"
}).then(() => {
  console.log("data saved")
}).catch((error) => {
  console.log("FIREBASE ERROR CAUGHT:\n ", error)
});*/

/*db.collection("cities").doc("LA").update({
  test: firebase.firestore.FieldValue.delete()
}).then(() => {
  console.log("field removed")
}).catch((error) => {
  console.log("FIREBASE ERROR CAUGHT:\n ", error)
});*/

/*db.collection("test").doc("trst").delete().then(() => {
  console.log("collection removed")
}).catch((error) => {
  console.log("FIREBASE ERROR CAUGHT:\n ", error)
});*/
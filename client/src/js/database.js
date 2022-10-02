import { openDB } from "idb";

//initialize db
export const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });


//update db
export const putDb = async (content) => {
  console.log("PUT to the database");

  // Create a connection to the database and specify the version to be used
  const contactDb = await openDB("jate", 1);

  // Create a new transaction and specify the store and data privileges.
  const tx = contactDb.transaction("jate", "readwrite");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .add() method on the store and pass in the content.
  const request = store.put({
    id: 1,
    content: content,
  });

  // Get confirmation of the request.
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};


// read db
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the IndexedDB database 
  const contactDb = await openDB('jate', 1);

  // Create a new transaction and specify the store and data privileges.
  const tx = contactDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result.value;
};

initdb();

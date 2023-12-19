const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
    },
    actions: {
      fetchPeople: async () => {
        const resp = await fetch("https://swapi.tech/api/people/");
        const data = await resp.json();
        setStore({ people: data.results });
      },
      fetchOnePerson: async () => {
        const resp = await fetch("https://swapi.tech/api/people/1");
        const data = await resp.json();
        setStore({ people: data.result });
      },
    },
  };
};

export default getState;

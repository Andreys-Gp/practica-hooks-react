import { useFecth } from "../hooks/useFecth";

export const UsuariosComponent = () => {
  const { state, data, isLoading, errors } = useFecth(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h2 className="ListUse">Lista de Usuarios</h2>
      {isLoading ? (
        <h4>Cargando...........</h4>
      ) : errors ? (
        <p>Ha osurrido un error:{errors}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

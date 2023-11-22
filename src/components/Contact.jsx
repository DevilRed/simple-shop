import { useForm } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit } = useForm();
  const sendData = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h1 className="main-title">Contact</h1>
      <form className="formulario" onSubmit={handleSubmit(sendData)} noValidate>
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "name is required",
          })}
        />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
        />
        <input type="phone" placeholder="phone number" {...register("phone")} />
        <textarea
          name="body"
          cols="30"
          rows="10"
          {...register("body", {
            required: "text body is required",
          })}
        ></textarea>
        <button type="submit" className="enviarx">
          Send
        </button>
      </form>
    </div>
  );
};

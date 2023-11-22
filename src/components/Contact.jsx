import { useForm } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit } = useForm();
  const sendData = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h1 className="main-title">Contact</h1>
      <form className="formulario" onSubmit={handleSubmit(sendData)}>
        <input type="text" placeholder="name" {...register("name")} />
        <input type="email" placeholder="email" {...register("email")} />
        <input type="phone" placeholder="phone number" {...register("phone")} />
        <textarea
          name="body"
          cols="30"
          rows="10"
          {...register("body")}
        ></textarea>
        <button type="submit" className="enviarx">
          Send
        </button>
      </form>
    </div>
  );
};

import { useForm } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const sendData = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h1 className="main-title">Contact</h1>
      <form className="formulario" onSubmit={handleSubmit(sendData)} noValidate>
        <div className="form-control">
          <input
            type="text"
            placeholder="name"
            {...register("name", {
              required: "name is required",
            })}
          />
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              required: "email is required",
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <input
            type="phone"
            placeholder="phone number"
            {...register("phone")}
          />
          <p className="error">{errors.phone?.message}</p>
        </div>
        <div className="form-control">
          <textarea
            name="body"
            cols="30"
            rows="10"
            {...register("body", {
              required: "text body is required",
            })}
          ></textarea>
          <p className="error">{errors.body?.message}</p>
        </div>
        <div className="form-control">
          <button type="submit" className="enviarx">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

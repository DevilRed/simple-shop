import { useForm } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const sendData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="container">
        <div className="col-md-6 mx-auto">
          <h1 className="main-title">Contact</h1>
          <form
            className="formulario d-flex justify-content-center"
            onSubmit={handleSubmit(sendData)}
            noValidate
          >
            <div className="form-group w-100">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                {...register("name", {
                  required: "name is required",
                })}
              />
              <p className="error">{errors.name?.message}</p>
            </div>
            <div className="form-group w-100">
              <input
                type="email"
                className="form-control"
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
            <div className="form-group w-100">
              <input
                type="phone"
                className="form-control"
                placeholder="phone number"
                {...register("phone")}
              />
              <p className="error">{errors.phone?.message}</p>
            </div>
            <div className="form-group w-100">
              <textarea
                name="body"
                className="form-control"
                cols="30"
                rows="10"
                {...register("body", {
                  required: "text body is required",
                })}
              ></textarea>
              <p className="error">{errors.body?.message}</p>
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

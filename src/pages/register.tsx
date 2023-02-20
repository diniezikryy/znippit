import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../common/utils/supabaseClient";
import { useState } from "react";

type Inputs = {
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  password: String;
  confirmPassword: String;
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      console.log(formData);
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            username: formData.username,
          },
        },
      });
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Register for an account to start writing and sharing code snippets
          </p>
        </div>

        <form
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="card-body">
            {/* Username Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                {...register("username")}
              />
            </div>

            {/* First Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                {...register("firstName")}
              />
            </div>

            {/* Last Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                {...register("lastName")}
              />
            </div>

            {/* Last Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="Password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password")}
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="Password"
                placeholder="Re-enter password"
                className="input input-bordered"
                {...register("confirmPassword")}
              />
            </div>

            {/* Button to trigger login */}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

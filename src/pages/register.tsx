import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../common/utils/supabaseClient";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(1, "Your first name is required."),
  lastName: z.string().min(1, "Your last name is required."),
  username: z
    .string()
    .min(5, { message: "Must be at least 5 characters long!" }),
  email: z.string().email().min(2),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

type formValues = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<formValues> = async (formData, e) => {
    e?.preventDefault();
    /* if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
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

      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    } */
    console.log("register user request sent!");
  };

  console.log(errors);

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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`input w-full max-w-xs input-bordered`}
                {...register("username", { required: true })}
              />
              {errors?.username?.message !== null && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors?.username?.message}
                  </span>
                </label>
              )}
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
                {...register("firstName", { required: true })}
              />
              {errors?.firstName?.message !== null && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors?.firstName?.message}
                  </span>
                </label>
              )}
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
                {...register("lastName", { required: true })}
              />
              {errors?.lastName?.message !== null && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors?.lastName?.message}
                  </span>
                </label>
              )}
            </div>

            {/* Last Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors?.email?.message !== null && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors?.email?.message}
                  </span>
                </label>
              )}
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
                {...register("password", { required: true })}
              />
              {errors?.password?.message !== null && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors?.password?.message}
                  </span>
                </label>
              )}
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
                {...register("confirmPassword", {
                  required: true,
                })}
              />
              {errors?.confirmPassword?.message !== null && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors?.confirmPassword?.message}
                  </span>
                </label>
              )}
            </div>

            {/* demo input to show what the error looks like */}

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

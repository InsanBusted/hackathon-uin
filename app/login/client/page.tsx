import Login from "@/components/auth/login/Login";

const page = () => {
  return (
    <div>
      <Login loginAsText="Log In As Client" loginAsLink="Log In As User" />
    </div>
  );
};

export default page;

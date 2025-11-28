import Login from "@/components/auth/login/Login";

const page = () => {
  return (
    <div>
      <Login emailPlaceholder="Company Email:" loginAsText="Log In As Company" hideLinks={true} />
    </div>
  );
};

export default page;

import Users from "@/components/Users";

export const metadata = {
  title: "Mi página especial Home",
};

function page() {
  return (
    // server component
    <>
      {/* cliente component */}
      <Users />
    </>
  );
}

export default page;

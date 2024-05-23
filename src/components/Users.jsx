"use client";

import { useEffect } from "react";

function Users() {
  useEffect(() => {
    console.log("useEffect ejecutado");
  }, []);
  return <div>Users</div>;
}

export default Users;

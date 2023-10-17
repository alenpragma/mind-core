import React from "react";

const MyAffilates = () => {
  // Define fake data
  const data = [
    {
      id: 1,
      fullName: "John Doe",
      username: "johndoe123",
      email: "johndoe@example.com",
      joinDate: "2023-10-17",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      username: "janesmith456",
      email: "janesmith@example.com",
      joinDate: "2023-10-16",
    },
    // Add more data entries as needed
  ];

  return (
    <div className="relative mt-10 z-0 w-full h-full pt-3 pl-3 pr-3 !top-0 text-white">
      <h3 className="text-2xl font-bold">My Affiliates</h3>
      <div className="w-full overflow-x-scroll">
        <table className="min-w-full glass-container table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">FULLNAME</th>
              <th className="border px-4 py-2">USERNAME</th>
              <th className="border px-4 py-2">EMAIL</th>
              <th className="border px-4 py-2">JOINDATE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.fullName}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAffilates;

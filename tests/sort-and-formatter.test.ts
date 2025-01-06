import { sortAndFormatUsers } from "@/utils/user-mapper";

describe("sortAndFormatUsers", () => {
  const mockUsers = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
  ];

  it("should sort users with first name starting with 'G' or last name starting with 'W' first", () => {
    const result = sortAndFormatUsers(mockUsers);

    expect(result).toEqual([
      {
        id: 1,
        email: "george.bluth@reqres.in",
        firstName: "George",
        lastName: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        firstName: "Janet",
        lastName: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        firstName: "Emma",
        lastName: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        firstName: "Eve",
        lastName: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
    ]);
  });

  it("should format user fields correctly", () => {
    const result = sortAndFormatUsers(mockUsers);

    result.forEach((user: any) => {
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("firstName");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("avatar");
    });
  });

  it("should handle an empty array", () => {
    const result = sortAndFormatUsers([]);

    expect(result).toEqual([]);
  });
});

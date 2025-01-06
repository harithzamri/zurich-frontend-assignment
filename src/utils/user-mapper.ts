export function sortAndFormatUsers(users: User[]): FormattedUser[] {
  const sortedUsers = users.sort((userA, userB) => {
    const userAMatches =
      userA.first_name.startsWith("G") || userA.last_name.startsWith("W");
    const userBMatches =
      userB.first_name.startsWith("G") || userB.last_name.startsWith("W");

    return Number(userBMatches) - Number(userAMatches);
  });

  return sortedUsers.map((user) => ({
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
  }));
}

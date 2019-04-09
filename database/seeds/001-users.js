exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("users").insert([
    { username: "sem", password: "limi", department: "Full Stack Web" },
    { username: "shaun", password: "carmody", department: "Data Science" },
    { username: "arshak", password: "asryan", department: "iOS Development" }
  ]);
};

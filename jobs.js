class Job {
  constructor(jobTitle, location, salary) {
    this.title = jobTitle;
    this.place = location;
    this.pay = salary;
  }
}

const developer = new Job("designer", "Nairobi", "200000");
const artist = new Job("painter", "Nakuru", "100000");

console.log(developer);
console.log(artist);

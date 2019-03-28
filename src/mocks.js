const post1 = {
  meetupId: 1,
  topicName: "topicName1",
  created: "2015-03-25T12:00:00Z",
  organizer: "ldb",
  interested: ["csciavol", "jzhao"],
  description: "a description",
  location: "a location"
};

const post2 = {
  meetupId: 2,
  topicName: "topicName2",
  created: "2015-03-26T12:00:00Z",
  organizer: "csciavol",
  interested: ["jzhao"],
  description: "a description",
  location: "a location"
};

const post3 = {
  meetupId: 3,
  topicName: "topicName3",
  created: "2015-03-27T12:00:00Z",
  organizer: "jzhao",
  interested: [],
  description: "a description",
  location: "a location"
};

const posts = [post1, post2, post3];

export default posts;

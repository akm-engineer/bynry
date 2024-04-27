const profiles = [
  {
    id: 1,
    name: "Ashish Mishra",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    email: "alo@email.com",
    phone: "12345678890",
    location: "Pune",
    interest: "Playing",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5747316001493!2d73.93961207393767!3d18.59320186695406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c40498b446f1%3A0x34121963019350ea!2sKarmabhumi%20developers!5e0!3m2!1sen!2sin!4v1709829880369!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Sunny Mishra",
    image:
      "https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    email: "one@email.com",
    location: "Bengaluru",
    phone: "78645678890",
    interest: "Cricket",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.847938435558!2d73.95421826697995!3d18.598279194014385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c47b19d18e39%3A0x237c1ce6981cde0a!2sMotilal%20Dhoot%20Infra%20Quarry!5e0!3m2!1sen!2sin!4v1714136044687!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "Sunny Mishra",
    image:
      "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    email: "one@email.com",
    location: "Bengaluru",
    phone: "78645678890",
    interest: "Cricket",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.847938435558!2d73.95421826697995!3d18.598279194014385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c47b19d18e39%3A0x237c1ce6981cde0a!2sMotilal%20Dhoot%20Infra%20Quarry!5e0!3m2!1sen!2sin!4v1714136044687!5m2!1sen!2sin",
  },
  {
    id: 4,
    name: "Sunny Mishra",
    image:
      "https://as1.ftcdn.net/v2/jpg/01/88/77/70/1000_F_188777023_l0BzfxSZL3QfXa24dHX3SbxZUBOx0chb.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    email: "one@email.com",
    location: "Bengaluru",
    phone: "78645678890",
    interest: "Cricket",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.847938435558!2d73.95421826697995!3d18.598279194014385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c47b19d18e39%3A0x237c1ce6981cde0a!2sMotilal%20Dhoot%20Infra%20Quarry!5e0!3m2!1sen!2sin!4v1714136044687!5m2!1sen!2sin",
  },
  {
    id: 5,
    name: "Sunny Mishra",
    image:
      "https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    email: "one@email.com",
    location: "Bengaluru",
    phone: "78645678890",
    interest: "Cricket",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.847938435558!2d73.95421826697995!3d18.598279194014385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c47b19d18e39%3A0x237c1ce6981cde0a!2sMotilal%20Dhoot%20Infra%20Quarry!5e0!3m2!1sen!2sin!4v1714136044687!5m2!1sen!2sin",
  },
  {
    id: 6,
    name: "Sunny Mishra",
    image:
      "https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644880-stock-illustration-man-avatar-icon-of-vector.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    email: "one@email.com",
    location: "Bengaluru",
    phone: "78645678890",
    interest: "Cricket",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.847938435558!2d73.95421826697995!3d18.598279194014385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c47b19d18e39%3A0x237c1ce6981cde0a!2sMotilal%20Dhoot%20Infra%20Quarry!5e0!3m2!1sen!2sin!4v1714136044687!5m2!1sen!2sin",
  },
  // Add more profiles as needed
];

export default profiles;

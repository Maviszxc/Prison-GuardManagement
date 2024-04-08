const guards = [
  {
    id: 1,
    name: "William",
    rank: "Officer",
    yearsOfService: 1,
    isActive: true,
  },

  {
    id: 2,
    name: "Alexa",
    rank: "General",
    yearsOfService: 10,
    isActive: true,
  },

  {
    id: 3,
    name: "Hannah",
    rank: "Chief",
    yearsOfService: 5,
    isActive: true,
  },
];

module.exports.guards = (req, res) => {
  res.json({ GUARDS: guards });
};

module.exports.guard = (req, res) => {
  const { id } = req.params;

  const matchingGuard = guards.find((guard) => guard.id === parseInt(id));

  if (!matchingGuard) {
    res.status(404).json({ error: `Guard with ID ${id} not found` });
  } else {
    res.status(200).json({ guard: matchingGuard });
  }
};

module.exports.searchGuard = (req, res) => {
  const { id, rank, yearsOfService } = req.query;

  const matchingGuard = guards.find(
    (guard) =>
      guard.id === parseInt(id) &&
      guard.rank === rank &&
      guard.yearsOfService === parseInt(yearsOfService)
  );

  if (!matchingGuard) {
    res.status(404).json({
      error: `Guard with id ${id}, rank ${rank}, and ${yearsOfService} years of service not found.`,
    });
  } else {
    // Constructing a response object with only id, rank, and yearsOfService
    const response = {
      id: matchingGuard.id,
      rank: matchingGuard.rank,
      yearsOfService: matchingGuard.yearsOfService,
    };
    res.status(200).json({ found: response });
  }
};

module.exports.deleteGuardById = (req, res) => {
  const { id } = req.params;
  const index = guards.findIndex((g) => g.id === parseInt(id));
  if (index !== -1) {
    guards.splice(index, 1);
    res
      .status(200)
      .json({ message: `Guard with ID ${id} deleted successfully` });
  } else {
    res.status(404).json({ error: `Guard with ID ${id} not found` });
  }
};


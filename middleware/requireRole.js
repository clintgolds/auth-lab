const requireRole = (role) => {
  return (req, res, next) => {
    // req.user is set by the auth middleware
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
};

module.exports = requireRole;
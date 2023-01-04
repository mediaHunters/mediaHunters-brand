server.get("/sitemap.xml", (req, res) => {
  const filePath = path.join(__dirname, "../sitemap.xml");
  res.sendFile(filePath);
});

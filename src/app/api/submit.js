export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      return res
        .status(200)
        .json({ message: "Form submitted successfully", data: req.body });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error in submission", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

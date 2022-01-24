export default function handler(req, res) {
    if (req.method == "GET") {
        res.json({ message: "This is a GET request response" })
    }
    if (req.method === "POST") {
        res.json({ message: "This is a POST request response" })
    }
}

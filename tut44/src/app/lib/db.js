const { username, pwd } = process.env
export const connectionSrc = `mongodb+srv://${username}:${pwd}@cluster0.kv2yuuf.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=AtlasApp`
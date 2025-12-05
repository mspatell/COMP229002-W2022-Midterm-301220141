const mongoose = require('mongoose');

class Database {
    constructor() {
        this.isConnected = false;
    }

    async connect(uri) {
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000,
                maxPoolSize: 10,
                bufferCommands: false
            });
            
            this.isConnected = true;
            console.log('Connected to MongoDB...');
            
            mongoose.connection.on('error', (err) => {
                console.log('Connection Error:', err.message);
                this.isConnected = false;
            });
            
            mongoose.connection.on('disconnected', () => {
                console.log('MongoDB disconnected');
                this.isConnected = false;
            });
            
        } catch (err) {
            console.log('MongoDB connection failed:', err.message);
            console.log('Running in demo mode without database...');
            this.isConnected = false;
        }
    }

    getConnectionStatus() {
        return this.isConnected;
    }
}

module.exports = new Database();
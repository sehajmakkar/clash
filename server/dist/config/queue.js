export const redisConnection = {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
};
export const defaultQueueOptions = {
    removeOnComplete: {
        count: 20,
        age: 60 * 60, // 1 hour
    },
    attempts: 3,
    backoff: {
        type: "exponential",
        delay: 3000,
    },
};

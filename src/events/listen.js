const amqplib = require('amqplib');
const {PrismaClient} = require('@prisma/client');
const logger = require('../utils/winston');

const prisma = new PrismaClient();

var amqp_url = process.env.RABBIT_MQ;

async function listen(queueName) {
    var conn = await amqplib.connect(amqp_url, "heartbeat=60");
    var ch = await conn.createChannel()
    var q = queueName;
    await conn.createChannel();
    await ch.assertQueue(q, {durable: true});
    while (1){
        await ch.consume(q, async function (msg) {
            logger.info(`Message received on ${queueName}: ` + msg.content.toString());
            const booking = await prisma.bookings.findUnique({
                where:{
                    id: parseInt(msg.content.toString())
                }
            });
            if (booking.paid === false){
                await prisma.bookings.delete({where:{id: booking.id}});
            }
            ch.ack(msg);
            });
    }
    setTimeout( function()  {
        ch.close();
        conn.close();},  10000 );
}

module.exports = listen;
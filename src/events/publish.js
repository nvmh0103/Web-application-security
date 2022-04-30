const amqplib = require('amqplib');
const logger = require('../utils/winston');
var amqp_url = process.env.RABBIT_MQ;

async function publish(exchangeName, queueName, rkey, msg, delay){
    logger.info("Publising message to queue: " + queueName);
    var conn = await amqplib.connect(amqp_url, "heartbeat=60");
    var ch = await conn.createChannel()
    var exch = exchangeName;
    var q = queueName;
    var rkey = rkey;
    var msg = msg;
    await ch.assertExchange(exch, "x-delayed-message", {durable: true,arguments: {'x-delayed-type':  "direct"}}).catch(console.error);
    await ch.assertQueue(q, {durable: true});
    await ch.bindQueue(q, exch, rkey);
    await ch.publish(exch, rkey, Buffer.from(msg),{headers:{"x-delay": parseInt(delay)}});
    setTimeout( function()  {
        ch.close();
        conn.close();},  500 );
}
module.exports = publish;
import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 mx-20 p-5'>
            <div className=''>
                <h1 className='text-2xl text-center'>Difference between SQL and NoSQL?</h1>
                <p><span className='font-bold w-1/2'>SQL Database:</span> <br />
                <li>SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database</li>
                <li>Use of SQL queries and syntax to analyse and get further data insights. Used for OLAP systems</li>
                <li>Database, here is in table format</li>
                <li>They are scalable vertically</li>
                <li>Schema used is pre-defined</li>
                <li>SQL uses specialized DB hardware to enhance performance</li>
                <li>Total focus on ACID (Atomicity, Consistency, Isolation and Durability) properties</li>
                <li>Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL</li>
                </p>
                <br />
                <p><span className='font-bold w-1/2 '>NoSQL Database:</span> <br />
                <li>NoSQL is a distributed or Non-relational Database</li>
                <li>Apply different types of database technologies</li>
                <li>NoSQL databases are document based with key-value pairs and graph databases.</li>
                <li>These are horizontally scalable</li>
                <li>Dynamic schema is used for unstructured or disorganised data</li>
                <li>NoSQL uses commodity hardware</li>
                <li>Makes use of the Brewer’s CAP theorem (Consistency, Availability and Partition Tolerance)</li>
                <li>Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb</li>
                </p>
            </div>
            <br /><br />
            <div>
                <h2 className='text-2xl text-center'>What is JWT, and how does it work?</h2>
                <p className='text-justify'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            </div>
            <br /> <br />
            <div>
                <h2 className='text-2xl text-center'>What is the difference between javascript and NodeJS?</h2>
                <p className='text-justify'>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br /> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br /> Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
            </div>
            <br /><br />
            <div>
                <h2 className='text-2xl text-center'>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-justify'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;
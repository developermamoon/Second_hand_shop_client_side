import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl font-semibold text-center mb-8'>Blogs</h2>

            <div className='mx-20'>

                <div className='mb-10'>
                    <li className='text-2xl font-semibold my-3'>What are the different ways to manage a state in a React application?</li>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">

                            <thead>
                                <tr className="hover">
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="hover">
                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td>Non-relational or distributed database system.</td>
                                </tr>

                                <tr className="hover">
                                    <td>These databases have fixed or static or predefined schema</td>
                                    <td>They have dynamic schema</td>
                                </tr>

                                <tr className="hover">
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>
                                </tr>
                                <tr className="hover">
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>
                                </tr>
                                <tr className="hover">
                                    <td>Vertically Scalable</td>
                                    <td>Horizontally scalable</td>
                                </tr>
                                <tr className="hover">
                                    <td>Follows ACID property</td>
                                    <td>Follows CAP(consistency, availability, partition tolerance)</td>
                                </tr>
                                <tr className="hover">
                                    <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                    <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="mb-10">
                    <li className='text-2xl font-semibold my-3'>How does prototypical inheritance work?</li>
                    <p className='text-justify'>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br />

                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </p>
                </div>


                <div className="mb-10">
                    <li className='text-2xl font-semibold my-3'>What is a unit test? Why should we write unit tests?</li>
                    <div className="">
                        <table className="table-zebra">

                            <thead>
                                <tr>
                                    <th>Javascript</th>
                                    <th>NodeJS</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                                    <td>NodeJS is a Javascript runtime environment.</td>
                                </tr>

                                <tr>
                                    <td>Javascript can only be run in the browsers.</td>
                                    <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                                </tr>

                                <tr>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>
                                </tr>
                                <tr>
                                    <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>
                                </tr>
                                <tr>
                                    <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                                </tr>
                                <tr>
                                    <td>Javascript is used in frontend development.</td>
                                    <td>Nodejs is used in server-side development.</td>
                                </tr>
                                <tr>
                                    <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                                    <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                                </tr>
                                <tr>
                                    <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                                    <td>Nodejs is written in C, C++ and Javascript.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="mb-10">
                    <li className='text-2xl font-semibold my-3'>React vs. Angular vs. Vue?</li>
                    <div className="flex justify-center">
                        <table className="table-zebra">

                            <thead>
                                <tr>
                                    <th className='border-2 border-black'>Attributes</th>
                                    <th className='border-2 border-black'>Angular</th>
                                    <th className='border-2 border-black'>React</th>
                                    <th className='border-2 border-black'>Vue</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className='font-bold border-2 border-black'>Rendering</td>
                                    <td>Client Side</td>
                                    <td>Server Side</td>
                                    <td>Server Side</td>
                                </tr>

                                <tr>
                                    <td className='font-bold border-2 border-black'>Model</td>
                                    <td>MVC</td>
                                    <td>Virtual</td>
                                    <td>Virtual</td>
                                </tr>

                                <tr>
                                    <td className='font-bold border-2 border-black'>Code Reusability</td>
                                    <td>Yes</td>
                                    <td>No. only CSS</td>
                                    <td>Yes. CSS and HTML</td>
                                </tr>
                                <tr>
                                    <td className='font-bold border-2 border-black'>When to use</td>
                                    <td>Production, esp, enterprise apps with Material UI</td>
                                    <td>Production, custom UI apps</td>
                                    <td>Startups, production</td>
                                </tr>
                                <tr>
                                    <td className='font-bold border-2 border-black'>Performance</td>
                                    <td>Tik</td>
                                    <td>Tik</td>
                                    <td>Tik</td>
                                </tr>
                                <tr>
                                    <td className='font-bold border-2 border-black'>Startup Time</td>
                                    <td>Longer due to its codebase</td>
                                    <td>Quick</td>
                                    <td>Quick</td>
                                </tr>
                                <tr>
                                    <td className='font-bold border-2 border-black'>Complete web apps</td>
                                    <td>Can be used on standalone basis</td>
                                    <td>Needs to be integrated with many other tools</td>
                                    <td>Requires third party tools</td>
                                </tr>
                                <tr>
                                    <td className='font-bold border-2 border-black'>Type</td>
                                    <td>JS framework</td>
                                    <td>Open source JS library</td>
                                    <td>Progressive JS framework</td>
                                </tr>
                                <tr>
                                    <td className='font-bold border-2 border-black'>Coding speed</td>
                                    <td>Slow</td>
                                    <td>Normal</td>
                                    <td>Fast</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;
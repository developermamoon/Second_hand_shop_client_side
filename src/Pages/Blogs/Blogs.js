import React from 'react';
import './Blogs.css'
import { FaCheck } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl font-semibold mb-8 text-center'>Blogs</h2>

            <div className='mx-20'>

                <div className='mb-10'>
                    <li className='text-2xl text-start font-semibold my-3'>What are the different ways to manage a state in a React application?</li>
                    <p>
                        There are at least seven ways to handle the state in React application.
                        <p><br /> <b>URL:</b> <br /></p>
                        <p className='pl-8'>
                            
                                We can use URL to store some data e.g. <br />
                                <li>The id of the current item, being viewed</li>
                                <li>Filter parameters</li>
                                <li>Pagination offset and limit</li>
                                <li>Sorting data</li>
                                <br /> Keeping such data in the URL allows users to share deep links with others. <br />
                                It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change <br />
                                React Router is a great tool to handle routes and manage the params. <br />
                                <br /> We do not need to store the id in a state or pass it as props to the ProductDetails component instead, it can be fetched using <mark>useParams()</mark>. br
                        </p>
                    </p>


                    <p>
                        <p><br /> <b>Web Storage:</b> <br /></p>
                        <p className='pl-8'>
                            
                        <p>
                            The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                        </p>
                        <p>
                            Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.
                        </p>
                        <p>
                            We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.
                        </p>
                        <p>
                            Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components.
                        </p>

                        </p>
                    </p>



                    <p>
                        <p><br /> <b>Local State:</b> <br /></p>
                        <p className='pl-8'>
                            
                        <p>
                            The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.
                        </p>

                        </p>
                    </p>



                    <p>
                        <p><br /> <b>Lifted State:</b> <br /></p>
                        <p className='pl-8'>
                            
                        <p>
                            The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.
                        </p>

                        </p>
                    </p>



                    <p>
                        <p><br /> <b>Derived State:</b> <br /></p>
                        <p className='pl-8'>
                            
                        <p>
                                The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling <mark>.length</mark> on an array to determine the number of records instead of storing a separate <mark>numItems</mark> variable in the state or deriving an <mark>errorsExist</mark> boolean by checking if the errors array is empty.
                        </p>
                        <p>
                                So, why bother deriving the state? Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.
                        </p>
                        <p>
                                For example, we can calculate the items added to the cart and show it on the cart icon like this, <mark>this.state.cart.items.length</mark> and pass it as a prop to Badge Component. We do not need to store the <mark>itemsCount</mark> key in a cart state. Each time the cart state gets changed, the count on the Badge will be calculated automatically.
                        </p>

                        </p>
                    </p>
                </div>



                <div className="mb-10">
                    <li className='text-2xl font-semibold my-3'>How does prototypical inheritance work?</li>
                    <p className='text-justify'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>


                <div className="mb-10">
                    <li className='text-2xl font-semibold my-3'>What is a unit test? Why should we write unit tests?</li>
                    <p className='text-justify'>
                        <b>Unit testing</b> is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p> <br />

                    <p><b>Why Should we write unit test</b></p>
                    
                        
                            <li>Any bugs are found easily and quicker</li>
                            <li>Unit testing saves time and money</li>
                            <li>Unit testing is an Integral part of extreme programming</li>
                            <li>Unit testing provides documentation</li>
                            <li>Reusable and Reliable</li>
                            <li>Unit testing helps gauge performance</li>
                            <li>Unit testing improves code coverage </li>
                            <li>Unit testing reduces code complexity</li>
                        
                </div>


                <div className="mb-10">
                    <li className='text-2xl font-semibold my-3'>React vs. Angular vs. Vue?</li>
                    <div className="flex justify-center">
                        <table className="table-zebra custom-table-border">

                            <thead>
                                <tr>
                                    <th>Attributes</th>
                                    <th>Angular</th>
                                    <th>React</th>
                                    <th>Vue</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Rendering</td>
                                    <td>Client Side</td>
                                    <td>Server Side</td>
                                    <td>Server Side</td>
                                </tr>

                                <tr>
                                    <td>Model</td>
                                    <td>MVC</td>
                                    <td>Virtual</td>
                                    <td>Virtual</td>
                                </tr>

                                <tr>
                                    <td>Code Reusability</td>
                                    <td>Yes</td>
                                    <td>No. only CSS</td>
                                    <td>Yes. CSS and HTML</td>
                                </tr>
                                <tr>
                                    <td>When to use</td>
                                    <td>Production, esp, enterprise apps with Material UI</td>
                                    <td>Production, custom UI apps</td>
                                    <td>Startups, production</td>
                                </tr>
                                <tr>
                                    <td>Performance</td>
                                    <td><FaCheck className='mx-auto'></FaCheck></td>
                                    <td><FaCheck className='mx-auto'></FaCheck></td>
                                    <td><FaCheck className='mx-auto'></FaCheck></td>
                                </tr>
                                <tr>
                                    <td>Startup Time</td>
                                    <td>Longer due to its codebase</td>
                                    <td>Quick</td>
                                    <td>Quick</td>
                                </tr>
                                <tr>
                                    <td>Complete web apps</td>
                                    <td>Can be used on standalone basis</td>
                                    <td>Needs to be integrated with many other tools</td>
                                    <td>Requires third party tools</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>JS framework</td>
                                    <td>Open source JS library</td>
                                    <td>Progressive JS framework</td>
                                </tr>
                                <tr>
                                    <td>Coding speed</td>
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
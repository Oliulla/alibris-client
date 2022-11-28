import React from "react";

const Blogs = () => {
  return (
    <div className="my-10 mx-auto px-4 md:px-8 lg:px-10">
      <h2 className="text-3xl font-semibold border-b border-info mb-2">
        All blogs
      </h2>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold">
          1. What are the different ways to manage a state in a React
          application?
        </h2>
        <p className="text-accent text-2xl mt-2">
          The Four Kinds of React State to Manage
        </p>
        <p className="text-blue-500">Ans:</p>
        <p>
          There are four main types of state you need to properly manage in your
          React apps:
        </p>
        <ol className="text-xl">
          <li>1. Local state</li>
          <li>2. Global state</li>
          <li>3. Server state</li>
          <li>4. URL state</li>
        </ol>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold">
          2. How does prototypical inheritance work?
        </h2>
        <p className="text-blue-500">Ans:</p>
        <p>
          Prototypal Inheritance is that an object can point to another object
          and inherit all its properties. The main purpose is to allow multiple
          instances of an object to share common properties, hence, the
          Singleton Pattern.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold">3. What is a unit test?</h2>
        <p className="text-blue-500">Ans:</p>
        <p>
          Unit testing involves the testing of each unit or an individual
          component of the software application. It is the first level of
          functional testing. The aim behind unit testing is to validate unit
          components with its performance.
        </p>
        <p>
          A unit is a single testable part of a software system and tested
          during the development phase of the application software. The purpose
          of unit testing is to test the correctness of isolated code. A unit
          component is an individual function or code of the application. White
          box testing approach used for unit testing and usually done by the
          developers.
        </p>
        <p>
          Whenever the application is ready and given to the Test engineer,
          he/she will start checking every component of the module or module of
          the application independently or one by one, and this process is known
          as Unit testing or components testing.
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          Why should we write unit tests?
        </h2>
        <li>
          Unit testing helps tester and developers to understand the base of
          code that makes them able to change defect causing code quickly.
        </li>
        <li>Unit testing helps in the documentation.</li>
        <li>
          Unit testing fixes defects very early in the development phase that's
          why there is a possibility to occur a smaller number of defects in
          upcoming testing levels.
        </li>
        <li>
          It helps with code reusability by migrating code and test cases.
        </li>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold">4. React vs Angular vs Vue</h2>
        <p className="text-blue-500">Ans:</p>
        <div className="card bg-[#F1F1F1]">
          <div className="card-body">
            <h2 className="card-title text-primary text-2xl">
              Angular vs React
            </h2>
            <p>
              If the choice you’re making is based on Angular vs React alone,
              then you’ll simply need to consider the pros and cons discussed
              for those libraries in this post. But overall, keep in mind that
              both libraries can be used for mobile and web apps, while Angular
              is generally better for more complex apps that are
              enterprise-ready.
            </p>
            <p>
              React often requires extra modules and components, which keeps the
              core library small, but means there’s extra work involved when
              incorporating outside tools. Angular, on the other hand, is more
              of a full-fledged solution that doesn’t require extras like React
              often does, though it does have a steeper learning curve for its
              core compared to React.
            </p>
            <p>
              React is more suitable for intermediate to advanced JavaScript
              developers who are familiar with concepts from ES6 and up, while
              Angular favors those same developers who are also familiar with
              TypeScript.
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title text-primary text-2xl">React vs Vue</h2>
            <p>
              The choice between React vs Vue is often debated and it’s not an
              easy one. Vue has a vibrant and ever-growing community and has
              taken over popularity vs. React in many respects. React developers
              are still churning out lots of new components and extras, so
              there’s no sign that React is on the decline either.
            </p>
            <p>
              Vue is generally more suited to smaller, less complex apps and is
              easier to learn from scratch compared to React. Vue can be easier
              to integrate into new or existing projects and many feel its use
              of HTML templates along with JSX is an advantage.
            </p>
            <p>
              Overall, Vue might be the best choice if you’re a newer developer
              and not as familiar with advanced JavaScript concepts, while React
              is quite well suited for experienced programmers and developers
              who have worked with object-oriented JavaScript, functional
              JavaScript, and similar concepts.
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title text-primary text-2xl">Angular vs Vue</h2>
            <p>
              In most cases, you probably wouldn’t be deciding between only
              Angular and Vue. They are vastly different libraries with very
              different feature sets and learning curves. Vue is the clear
              choice for less experienced developers, and Angular would be
              preferred for those working on larger apps.
            </p>
            <p>
              A large library like Angular would require more diligence in
              keeping up with what’s new, while Vue would be less demanding in
              this regard and the fact that the two most recent major releases
              of Vue are in separate repositories helps.
            </p>
            <p>
              It should also be noted that Vue was created by a developer who
              formerly worked on Angular for Google, so that’s another thing to
              keep in mind, though that wouldn’t have a huge impact on your
              decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

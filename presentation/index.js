// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Notes,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Table, TableBody, TableRow, TableItem,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
const images = {
  bg: require('../assets/fire-bg.gif'),
  enzyme: require('../assets/enzyme.gif'),
  hudlHQ: require('../assets/hudl-hq.jpg'),
  hudlBG: require('../assets/hudl-bg.jpg'),
  hudlV1: require('../assets/hudl-v1.png'),
  hudlV2: require('../assets/hudl-v2.png'),
  hudlV3: require('../assets/hudl-v3.png'),
  integrationTests: require('../assets/integration-tests.jpg'),
  me: require('../assets/me.png'),
  moduleBoundaries: require('../assets/module-boundaries.jpg'),
  myLibPrescription: require('../assets/my-lib-prescription.png'),
  myPrescription: require('../assets/my-prescription.png'),
  react: require('../assets/react.png'),
  roi: require('../assets/roi.jpg'),
  testingReact: require('../assets/testing-react.png'),
  triangleDetails: require('../assets/triangle-details.png'),
  triangleDx: require('../assets/triangle-dx.png'),
  v3SharedHighlight: require('../assets/v3-shared-highlights.png'),
};
require("spectacle/lib/utils/preloader").default(images);

import theme from "../theme/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../theme/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const imageStyle = (img:string) => ({
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  backgroundSize: 'cover',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="none"
        controls={false}
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        <Slide style={imageStyle(images.bg)}>
          <Notes>
            Hey Guys, thanks so much for making it out. I hope everyone is enjoying the conference so far. Welcome to the last talk on the last day.  I hope your minds aren’t too fried and that you still have the capacity to stretch your brains a little more.
          </Notes>
          <Heading textFont="monospace" margin="auto auto 5em auto">
            Hot React Testing Practices
          </Heading>
        </Slide>

        <Slide style={imageStyle(images.me)}>
          <Notes>My name is Blaine Kasten.</Notes>
          <Heading size={3} textFont="monospace" style={{color: '#fff', margin: 'auto auto 5em auto'}}>
            @blainekasten
          </Heading>
        </Slide>

        <Slide style={imageStyle(images.hudlHQ)}>
          <Notes>and I work at a company called Hudl in Lincoln, NE. It’s a really great company and if anyone has any interest in learning more about how we’re using machine learning and computer vision to help coaches and athletes win, come talk to me after.</Notes>
        </Slide>

        <Slide style={imageStyle(images.bg)}>
          <Notes>So for our last talk of this conference we’re going to talk about some Hot React Testing Practice to scale an application.</Notes>
        </Slide>

        <Slide>
          <Notes>But I don’t just want to give you the 3 tips to writing strong tests, Because then my presentaiton would be over in 5 minutes and we'd have to pretend we were learning for the next 30 minutes.</Notes>
          <Heading textFont="monospace" style={{color: 'red', textDecoration: 'line-through', fontSize: '20rem'}}>
            3
          </Heading>
        </Slide>

        <Slide>
          <Notes>No instead I want to talk about the fundamental reasonings beneath testing and the react testing practices I have for you.</Notes>
          <Heading textFont="monospace" style={{color: 'red', textDecoration: 'underline', fontSize: '20rem'}}>
            TEST
          </Heading>
          <Heading textFont="BioRhyme" style={{color: 'white', marginTop: '2rem'}}>
            fundamentals
          </Heading>
        </Slide>

        <Slide style={imageStyle(images.react)}>
          <Notes>If you don’t know already, testing React is super dang easy for a javascript framework.</Notes>
        </Slide>

        <Slide>
          <Notes>{"And since React is just a representation of your DOM {f(d) => view} a unit test on a component gets you much further than any other frameworks. React’s encapsulation has innovated a world of possibilities."}</Notes>
          <Heading textFont="BioRhyme">
            f(d) => view
          </Heading>
        </Slide>

        <Slide style={imageStyle(images.testingReact)}>
          <Notes>On top of that, React has an incredible ecosystem of tools to simplify testing within React. If you gave me a component and just said to write a test for this, I could literally set up the entire tooling and write a test for it in</Notes>
        </Slide>

        <Slide>
          <Notes> 1 minute. I’ve timed myself. I would install jest, enzyme and jest-enzyme. Import the component, wrap it in an enzyme object and assert a snapshot. That satisfies the technical requirements to have a unit test around a component.</Notes>
          <Heading textFont="monospace" style={{fontSize: '20rem'}}>1</Heading>
        </Slide>

        <Slide style={imageStyle(images.testingReact)}>
          <Notes>So the tools in the ecosystem make writing tests really easy. Really easy.</Notes>
        </Slide>

        <Slide>
          <Notes>but would that test really provide us with what we are wanting? And what are we actually wanting out of a test? We know writing tests is a good thing, but have we ever stopped to think about why? And if we’re actually getting what we want out of them?</Notes>
          <Heading textFont="monospace" style={{fontSize: '20rem'}}>?</Heading>
        </Slide>

        <Slide>
          <Notes>----pause. Doing the easy approach is not always the best approach. Let me tell you a story.</Notes>
          <Heading textFont="monospace" style={{fontSize: '20rem', textDecoration: 'line-through'}}>easy</Heading>
        </Slide>

        <Slide style={imageStyle(images.hudlBG)}>
          <Notes>For the last 2 years at Hudl, I’ve been working on a completely Greenfield project. We’ve been redesigning the next version of the web application.</Notes>
        </Slide>

        <Slide>
          <Notes>These are the 3 versions of Hudl that exist currently.</Notes>
          <Image src={images.hudlV1} width="33%" />
          <Image src={images.hudlV2} width="33%" />
          <Image src={images.hudlV3} width="33%" />
        </Slide>

        <Slide style={imageStyle(images.hudlV1)}>
          <Notes>Version 1 was designed for football and is still widely used by our football coaches.</Notes>
        </Slide>

        <Slide style={imageStyle(images.hudlV2)}>
          <Notes>Version 2 was our attempt to get into the flow based sports market, like Basketball and Soccer.</Notes>
        </Slide>

        <Slide style={imageStyle(images.hudlV3)}>
          <Notes>
            <div>
              Version 3 is the project I lead where we are trying to blend the two past versions in an extensible architecture in hopes this is the last version we have to build ground up.
            </div>
            <hr />
            <div>
              Like any Greenfield project, you want to set it up with all the best tools and frameworks to increase it’s chances to succeed. We setup unit testing and enforced a 90% test coverage. It seemed like it was going to be a very stable application. But complexity grew, there were over 10 developers contributing to this codebase routinely and we were constantly pushing bugs to production.
            </div>
          </Notes>
        </Slide>


        <Slide>
          <Notes>This happened because we weren't thinking through our testing strategy. We just did what was easy. We didn't even think about what a unit test is.</Notes>
          <Heading textFont="monospace" style={{fontSize: '20rem', textDecoration: 'line-through'}}>brain</Heading>
        </Slide>

        <Slide>
          <Notes>
            By definition, a unit is a small unit of an application. When you are testing units you are usually trying to find the smallest unit you can test in isolation. This requires mocking out other modules and designing APIs that can be tested in isolation. Which are all smart things to do for your unit tests.
            <hr />
            The hope in this approach is that testing each part means you've tested the entire app.
          </Notes>
          <div style={{textAlign: 'start', whiteSpace: 'nowrap'}}>
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hexagon-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon unit" />
          </div>
        </Slide>

        <Slide>
          <Notes>
            But learn from my mistakes. 1000 unit tests do not mean each unit interacts as expected.
          </Notes>
          <div style={{textAlign: 'start', whiteSpace: 'nowrap'}}>
            <div className="hexagon red" />
            <div className="hexagon red" />
            <div className="hexagon red" />
          </div>
          <div className="hexagon-row">
            <div className="hexagon red" />
            <div className="hexagon red" />
            <div className="hexagon unit red" />
          </div>
        </Slide>

        <Slide>
          <Notes>
            The main reason why our unit tests failed was because there was so much imperative code that modules communicated between. And when mocking out imperative code, you are almost guaranteed bugs if that’s your only line of defense.
          </Notes>
          <div style={{textAlign: 'start', whiteSpace: 'nowrap'}}>
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon blue" />
          </div>
          <div className="hexagon-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon unit" />
          </div>
        </Slide>

        <Slide>
          <Notes>
            So if unit tests can let us down are there other approaches we could have taken? 
            <hr />
            Sure, there are integration tests
            <hr />
            E2E Tests.
            <hr />
            and type checking. We could have used type checking and that might have given us some other reassurances. It breaks module boundaries and ensures an entire system is statically sound. But unfortunately type checking doesn’t prevent bugs. You can have a completely proper set of code instructions, that doesn’t do what the user expects.
          </Notes>
          <Appear><Heading>Integration</Heading></Appear>
          <Appear><Heading>E2E</Heading></Appear>
          <Appear><Heading>Type Checking</Heading></Appear>
        </Slide>

        <Slide>
          <Notes>So could we have written integration tests? Well for a react application it doesn’t 100% make sense as there isn’t really a public API. But I would consider rendering your entire App into a test a sort of integration test. The hard part is knowing what to assert. Do we just make sure it doesn’t error? Or do we dive in and have it simulate functionality? That can get difficult as your app might require network interactions which would need to be mocked. So how much value is an integration style test actually going to get us in an application? In reality? Nothing.</Notes>
          <Heading>Integration</Heading>
          <Appear>
            <Heading textFont="monospace">
              joke
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Notes>So what about e2e tests? In our application, we’ve started to write e2e tests and we have had so many deploys saved by the failures in those tests. For us at Hudl, we’ve found them to be hugely valuable, and are now working them into the company’s culture to always be writing e2e tests during development. E2E tests are when you run your assertions against the actual rendered application in a real browser, in a real environment. It’s 100% real, nothing mocked. And this typically follows user workflows, the important things that can’t break.</Notes>
          <Heading>E2E</Heading>
        </Slide>

        <Slide>
          <Notes>
            pause
            <hr />
            So we have a whole toolbox of options for writing tests. Some seem to have more value than others, but it’s still can be vague on what approach you should take.
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            pause
            <hr />
            So we have a whole toolbox of options for writing tests. Some seem to have more value than others, but it’s still can be vague on what approach you should take.
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            I want to emphasize right now, that it’s extremely important to plan your testing strategy. I mean, spend at least 2 weeks, maybe a month on researching and deciding what strategy will best serve this applications needs longterm. It’s a serious important question for any project that intends to be long term.
          </Notes>
          <Heading textFont="monospace">!!!</Heading>
        </Slide>

        <Slide>
          <Notes>
            There are a lot of questions to consider when planning out your testing strategy. Questions like:
          </Notes>
          <Heading textFont="monospace">???</Heading>
          <Appear><Text>How big will the team for this be?</Text></Appear>
          <Appear><Text>How long will the project last?</Text></Appear>
          <Appear><Text>How complex is it expected to become?</Text></Appear>
          <Appear><Text>What are wanting out of our tests?</Text></Appear>
        </Slide>

        <Slide>
          <Notes>
            There are a lot of questions to consider when planning out your testing strategy. Questions like:
          </Notes>
          <Heading textFont="monospace">???</Heading>
          <Appear><Text>Faster development?</Text></Appear>
          <Appear><Text>Deployment security?</Text></Appear>
          <Appear><Text>Less bugs?</Text></Appear>
          <Appear><Text>Smoother developer onboarding?</Text></Appear>
        </Slide>

        <Slide>
          <Notes>
            Every one of those questions help inform an approach you should take. For example, if your application is short term and not that complex, it is probably only worth writing e2e tests for the primary user workflows.
          </Notes>
          <Appear><Heading>E2E ONLY</Heading></Appear>
        </Slide>

        <Slide>
          <Notes>
            If the project is only ever going to be you working on it, then you can decide if testing is worth it at all
          </Notes>
          <Appear><Heading>NO TESTS</Heading></Appear>
        </Slide>

        <Slide>
          <Notes>
             If there will be a team of 10+ engineers working on this and the life of this project is going to be more than 2 years, then you definitely need to think about all the benefits you want in your tests.
          </Notes>
          <Appear><Heading>BRAIN</Heading></Appear>
        </Slide>

        <Slide style={imageStyle(images.triangleDetails)}>
          <Notes>
            I personally find this triangle really helpful in evaluating what I’m wanting.
          </Notes>
        </Slide>

        <Slide style={imageStyle(images.triangleDx)}>
          <Notes>
            See a unit test being small and focused will give you the best developer experience. Because when you change code that breaks a test, you often get a stack trace leading right to the broken path of code. This makes fixing really easy.
            <hr />
            On the other end, an E2E test, while it tests the whole application and gives you the most confidence, a breakage gives you the least helpful message and often requires you to dive and manually find where the bug is coming from.
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            So that highlights more aspects to consider.
            <li>What sort of development experience do you want?</li>
            <li>Do you want self-documenting code?</li>
          </Notes>
          <Heading textFont="monospace">???</Heading>
          <Appear><Text>What sort of development experience do you want?</Text></Appear>
          <Appear><Text>Do you want self-documenting code?</Text></Appear>
        </Slide>

        <Slide style={imageStyle(images.roi)}>
          <Notes>
            And lastly the important thing to think about is the return on investment. I could stand up here and tell you guys the best thing to do is 100% coverage in unit tests, integration tests, type checking and e2e tests. But in reality, no project has the time for that, and no developers want to spend all of their time writing tests. I don’t even think that would be a good idea because if you break something in development, you’re going to have 4 or more tests yelling at you for breaking something and it will just confuse the problem. But even the smallest amount of testing requires time and money, and if it doesn’t help you with what you are trying to get out of tests, you really aren’t getting your return on your investment. So it’s important to consider Time as another variable in your testing process.
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            So I just highlighted a lot of questions that I think are important. You have to consider Time, Complexity, Scalability, and Helpfulness. Time it takes to write your tests, and how Helpful they will be. How complex the setup will be and if your team can adhere to it longterm. And how the tests will scale with your application to continue giving you security as your application grows. 
          </Notes>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>Time</TableItem>
                <TableItem>Complexity</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Helpfulness</TableItem>
                <TableItem>Scalability</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide style={imageStyle(images.hudlV3)}>
          <Notes>Given my experience of 2 years of trials and failures in finding helpfulness in testing</Notes>
          <Heading style={{background: "#000"}}>2 Years</Heading>
        </Slide>

        <Slide style={imageStyle(images.enzyme)}>
          <Notes>being part of the Enzyme core team</Notes>
          <Heading style={{background: '#00002c', fontWeight: 'bold'}}>Enzyme Core</Heading>
        </Slide>

        <Slide>
          <Notes>and working with many industry leaders and what testing should look like</Notes>
          <Heading>Industry Leaders</Heading>
        </Slide>

        <Slide style={imageStyle(images.bg)}>
          <Notes>So I want to share what I’ve found as an answer to the questions I’m highlighting. I want to differentiate and give answers to both what I think is strong testing for Applications and Libraries as they can and should be treated differently. First let’s talk about applications as most of us are probably application developers</Notes>
          <Appear><Heading textFont="monospace">Applications</Heading></Appear>
        </Slide>

        <Slide>
          <Notes>My prescription for applications is to focus 90% efforts on writing important E2E tests, putting unit tests in shared, reused functionality, and use type systems. That’s it.</Notes>
          <Heading textFont="monospace">My Prescription</Heading>
        </Slide>

        <Slide>
          <Notes>E2E tests, unit tests on shared functionality, and type systems.</Notes>
          <Text>E2E Tests (90%)</Text>
          <Appear><Text>Unit Tests on Shared functionality</Text></Appear>
          <Appear><Text>Type Systems (flow/typescript)</Text></Appear>
        </Slide>

        <Slide style={imageStyle(images.v3SharedHighlight)}>
          <Notes>When I think about applications, there is usually a lot of one-off product code, and a subset of shared functionality. Shared functionality might be common reusable components like a Sidebar, or Buttons. Something more complex but yet reusable like a ProgressBar. </Notes>
        </Slide>

        <Slide>
          <Notes>Or even utility level things like a network helper, or string parsers.</Notes>
          <CodePane
            lang="javascript"
            source={`
export default function createAbbreviation(teamName) {
  if (!teamName) return '';

  const teamNameArray = teamName.split(/[\s,-]+/);
  if (!teamNameArray || !teamNameArray.length) {
    return '';
  }

  if (teamNameArray.length === 1) {
    return teamNameArray[0].substring(0, 3).toUpperCase();
  }

  return teamNameArray.map(n => n.charAt(0).toUpperCase()).join('');
}
            `}
          />
        </Slide>

        <Slide style={imageStyle(images.moduleBoundaries)}>
          <Notes>I see a lot of value in keeping unit tests on these because generally they are easily testable. They are often or should be pure functions. Not depending on imperative modules from your app, or even many other dependencies in general.</Notes>
        </Slide>

        <Slide>
          <Notes>The return on investment is often really strong here since they are reused elements, changing them has a higher chance to break something. If a component is used in 1 place, then there is only 1 QA workflow to make sure it works.</Notes>
          <div style={{textAlign: 'start', whiteSpace: 'nowrap'}}>
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hexagon-row">
            <div className="hexagon" />
            <div className="hexagon blue" />
            <div className="hexagon unit" />
          </div>
        </Slide>

        <Slide>
          <Notes>But if a component is used in 10 places, then there are 10 QA workflows to make sure are safe.</Notes>
          <div style={{textAlign: 'start', whiteSpace: 'nowrap'}}>
            <div className="hexagon blue" />
            <div className="hexagon" />
            <div className="hexagon blue" />
          </div>
          <div className="hexagon-row">
            <div className="hexagon" />
            <div className="hexagon blue" />
            <div className="hexagon unit" />
          </div>
        </Slide>

        <Slide>
          <Notes>One thing that makes your tests stronger is well defined public APIs. If you create a module with a stable set of APIs and document them with type systems, you will get a better development experience when making changes at any level of your codebase, but specifically when you are making changes to reusable modules. Type systems are going to raise issues before you even load up your app which saves so much time!</Notes>
          <div className="hexagon blue" />
        </Slide>

        <Slide>
          <Notes>And as I’ve already highlighted, E2E tests are truly going to get you the most bang for you buck. It’s going to test your application in it’s true environment, and protect your user workflows.</Notes>
          <div style={{textAlign: 'start', whiteSpace: 'nowrap'}}>
            <div className="hexagon green" />
            <div className="hexagon green" />
            <div className="hexagon green" />
          </div>
          <div className="hexagon-row">
            <div className="hexagon green" />
            <div className="hexagon green" />
            <div className="hexagon unit" />
          </div>
        </Slide>

        <Slide style={imageStyle(images.bg)}>
          <Notes>
            So that’s my suggestion. That’s the Hot React Testing Practices for an application.
          </Notes>
          <Heading textFont="monospace" margin="auto auto 5em auto">
            Hot React Testing Practices
          </Heading>
        </Slide>

        <Slide style={imageStyle(images.bg)}>
          <Notes>Library authors also get their own list. For Library authors, I would focus on Integration Tests and Types for your code. If you have extra time, I would say adding in Unit tests is healthy for the library. Especially if it’s open sourced as it will help contributors to understand where and why things have broke.</Notes>
          <Appear><Heading textFont="monospace">Libraries</Heading></Appear>
        </Slide>

        <Slide style={imageStyle(images.bg)}>
          <Notes>Some final tips when writing unit tests. Use anything tool you can to simplify your tests</Notes>
          <Appear><Heading textFont="monospace">Final Tips</Heading></Appear>
        </Slide>

        <Slide>
          <Notes>.</Notes>
          <CodePane
            lang="javascript"
            source={`
const React = require('react');
const ShallowRenderer = require('react-test-renderer/shallow')
const MyComponent = require('../');
const Subcomponent = require('../Subcomponent');

it('renders a heading and a Subcomponent', function() {
  const renderer = new ShallowRenderer();
  renderer.render(<MyComponent />);

  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual([
    <span className="heading">Title</span>,
    <Subcomponent foo="bar" />
  ]);
});
            `}
          />
        </Slide>

        <Slide>
          <Notes>.</Notes>
          <CodePane
            lang="javascript"
            source={`
const React = require('react');
const { shallow } = require('enzyme')
const MyComponent = require('../');
const Subcomponent = require('../Subcomponent');

it('renders a heading and a Subcomponent', function() {
  const wrapper = shallow(<MyComponent />);

  expect(wrapper).toHaveTagName('div');
  expect(wrapper.find('.heading')).toMatchElement(<span className="heading">Title</span>);
  expect(wrapper.find(Subcomponent)).toHaveProp('foo', 'bar');
});
            `}
          />
        </Slide>

        <Slide>
          <Notes>.</Notes>
          <Heading>UI  •   UX</Heading>
          <Appear>
            <CodePane
              source={`
                Component/index.js
                Component/__tests__/ComponentUI.js
                Component/__tests__/ComponentUX.js
              `}
            />
          </Appear>
        </Slide>

        <Slide style={imageStyle(images.bg)}>
          <Notes>Let me just re-iterate it all really quick. The 2 minute tl;dr. If you fell asleep during the whole talk, you can get all the details right here right now. It is:</Notes>
          <Heading>tl;dr</Heading>
        </Slide>

        <Slide>
          <Notes>
            Your project deserves an intentional testing plan. You need to answer important questions to inform your testing plan. Questions like,
            <li>What do I want out of my tests? Self Documentation, Deployment Security, Less Bugs.</li>
            <li>What will the development of the application be like? Team size, Time line, complexity.</li>
            <li>How much time can I invest in testing? Return on Investment</li>
            From there, make a decision on your testing plan and implement it
          </Notes>

          <Text>Be Intentional</Text>
          <Appear><Text>Create a Testing Plan</Text></Appear>
        </Slide>

        <Slide style={imageStyle(images.myPrescription)}>
          <Notes>
            My suggestion is for applications to focus on this order:
            <li>E2E Tests. Bang for your buck.</li>
            <li>Unit Tests on shared functionality. Less bugs.</li>
            <li>Type’s. Development Experience. Move Quick.</li>
          </Notes>
        </Slide>

        <Slide style={imageStyle(images.myLibPrescription)}>
          <Notes>
            For Library Authors, this focus:
            <li>Integration Tests. Bang for your buck.</li>
            <li>Type’s. Development Experience. Move Quick.</li>
            <li>Unit Tests if you have time. Self documenting. Dev Exp. Helps contributions</li>
          </Notes>
        </Slide>
          
        <Slide style={imageStyle(images.me)}>
          <Notes>Thank you all for coming out. Have safe travels home and add me on twitter so we can keep talking</Notes>
          <Heading size={3} textFont="monospace" style={{color: '#fff', margin: 'auto auto 5em auto'}}>
            @blainekasten
          </Heading>

          <Heading size={1}style={{color: '#fff', margin: '-3em -4em 0 auto'}}>
            BYE
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

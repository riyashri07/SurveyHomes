let Awareness = document.querySelector("#btn-employees");
let Purchase = document.querySelector("#btn-customer");
let Retention = document.querySelector("#btn-market");
let Loyalty = document.querySelector("#btn-other");

Awareness.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#awness");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
        <div>
            <h3>
                Learn more about potential and existing<br>
                customers
            </h3>
            <h3>
                Better understand your consumers
            </h3>
            <p>
                Survey your target market to better understand their<br>
                behaviors, perceptions, and attitudes.
            </p>
            <h3>Measure brand awareness and sentiment</h3>
            <p>Find out what people think about your brand and<br>
                discover new growth opportunities.
            </p>
            <h3>Better connect with customers</h3>
            <p>Use feedback to tailor your communications, website<br>
                experience, and even A/B test campaigns.
            </p>
            <h3>Want to talk to consumers or prospects?</h3>
            <p>Our plans and Audience panel makes it easy to check in with<br>
                your market early and often.
            </p>
        </div>
        <div id="awness_img">
            <p>“We are able to correlate improvement in our NPS to higher<br>
                revenue and retention of our customers”</p>
            <p>—Simon Lindsay, CEO of Progressive <br>
                Direct</p>
            <img src="./Solution_Page_Logo/customerfeedback-tab1.png"
                alt="awreness_gchild">
        </div>
    `
})


Purchase.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#awness");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
        <div>
            <h3>
                Get actionable feedback at every transaction
            </h3>
            <h3>
                Learn what influences purchasing
            </h3>
            <p>
                Quickly identify what informs your customers’ buying <br>
                decisions and see purchasing patterns. <br>
            </p>
            <h3>Identify pain points in your purchase flow</h3>
            <p>From design to price points, find out what’s stopping <br>
                people from becoming your customers.
            </p>
            <h3>Monitor post-purchase sentiment</h3>
            <p>Track how customers value your product or service over<br>
                time and how to improve satisfaction ratings. <br>
            </p>
            <h2 id="dash">__</h2>
            <h3>Want to talk to consumers or prospects?</h3>
            <p>Want to close the loop with customers? Learn more about how <br>
                to monitor your NPS and follow up with your customers.
            </p>
        </div>
        <div id="awness_img">
            <p> 53% of US online adults are likely to abandon their <br>
            online purchase if they can’t find a quick answer to <br>
            their question
            </p>
            <p>
                Source: Forrester, Kate Leggett: Your Customers Don’t Want To Call You<br>
                For Support
            </p>
            <img src="./Solution_Page_Logo/purchase.png" alt="awreness_gchild">
        </div>
    `
})


Retention.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#awness");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
        <div>
            <h3>
                Give your customers extraordinary experiences
            </h3>
            <h3>
                Delight new customers early and often
            </h3>
            <p>
                Gather feedback to better onboard, nurture, and<br>
                enhance your new customer experiences.<br>
            </p>
            <h3>Improve your offering with real-time feedback</h3>
            <p>Learn what customers want from your products and<br>
                services, and proactively make improvements.
            </p>
            <h3>Optimize your customer service</h3>
            <p>Ensure a great experience for everyone with customer<br>
                service surveys at multiple touchpoints.<br>
            </p>
            <h2 id="dash">__</h2>
            <h3>Want a multi-touch NPS program? Start understanding the</h3>
            <p>drivers behind your customer satisfaction <br>
                with SurveyMonkey CX.
            </p>
        </div>
        <div id="awness_img">
            <p> 54% of people who had a bad customer experience<br>
            shared that information with more than 5 people
            </p>
            <p>
                Source: Zendesk
            </p>
            <img src="./Solution_Page_Logo/retetion.png" alt="awreness_gchild">
        </div>
    `
})


Loyalty.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#awness");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
        <div class="awness_child1">
            <h3>
                Turn your customers into loyal advocates
            </h3>
            <h3>
                Find new ways to increase customer loyalty
            </h3>
            <p>
                Monitor your Net Promoter Score over time to<br>
                understand what drives your customer loyalty.
            </p>
            <h3>Close the loop with customers</h3>
            <p>Let your customers know they’ve been heard—and<br>
                proactively respond as feedback comes in.
            </p>
            <h3>Give your results context</h3>
            <p>Compare yourself to relevant competitors using the<br>
                world's largest NPS benchmark dataset.
            </p>
            <h2 id="dash">__</h2>
            <h3>Want to learn what will make your customers stay?</h3>
            <p>Create a survey today to find out what customers value most  <br>
                about your service and product.
            </p>
        </div>
        <div  id="awness_img">
            <p> On average, an industry’s Net Promoter leader outgrew<br>
            its competitors by a factor greater than 2x
            </p>
            <p>
                Source: Net Promoter System
            </p>
            <img id="awness_img" src="./Solution_Page_Logo/loyalty.png" alt="awreness_gchild">
        </div>
    `
})
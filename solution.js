let Awareness = document.querySelector("#btn-employees");
let Purchase = document.querySelector("#btn-customer");
let Retention = document.querySelector("#btn-market");
let Loyalty = document.querySelector("#btn-other");

Awareness.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#awness");
    console.log("working")
    // redndering_div.innerHTML = "";
    redndering_div.innerHTML = `

    <div class="awness_child1">
    <h3>
        Learn more about potential and <br>
        existing customers
    </h3>
    <h3>
        Better understand your consumers
    </h3>
    <p>
        Survey your target market to better <br>
        understand their behaviors, <br>
        perceptions, and attitudes. <br>
    </p>
    <h3>Measure brand awareness and sentiment</h3>
    <p>Find out what people think about <br>
        your brand and discover new growth <br>
        opportunities.</p>
    <h3>Better connect with customers</h3>
    <p>Use feedback to tailor your <br>
        communications, website <br>
        experience, and even A/B test <br>
        campaigns.</p>
    <h2 id="dash">__</h2>
    <h3>Want to talk to consumers or prospects?</h3>
    <p>Our plans and Audience panel makes it <br>
        easy to check in with your market early <br>
        and often.</p>

</div>
<div class="awness_child2">
    <div class="awness_gchild1">
       <p> “We are able to correlate <br>
        improvement in our NPS to higher <br>
        revenue and retention of our <br>
        customers”</p>
        <p>
            —Simon Lindsay, CEO of Progressive <br>
             Direct
        </p>
    </div>
    <div class="awness_gchild2">
<img id="awness_img" width="80%" src="./Solution_Page_Logo/customerfeedback-tab1.png" alt="awreness_gchild">
    </div>
</div>
        `
})
Purchase.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#awness");
    console.log("working")
    // redndering_div.innerHTML = "";
    redndering_div.innerHTML = `

    <div class="awness_child1">
    <h3>
        Learn more about potential and <br>
        existing customers
    </h3>
    <h3>
        Better understand your consumers
    </h3>
    <p>
        Survey your target market to better <br>
        understand their behaviors, <br>
        perceptions, and attitudes. <br>
    </p>
    <h3>Measure brand awareness and sentiment</h3>
    <p>Find out what people think about <br>
        your brand and discover new growth <br>
        opportunities.</p>
    <h3>Better connect with customers</h3>
    <p>Use feedback to tailor your <br>
        communications, website <br>
        experience, and even A/B test <br>
        campaigns.</p>
    <h2 id="dash">__</h2>
    <h3>Want to talk to consumers or prospects?</h3>
    <p>Our plans and Audience panel makes it <br>
        easy to check in with your market early <br>
        and often.</p>

</div>
<div class="awness_child2">
    <div class="awness_gchild1">
       <p> “We are able to correlate <br>
        improvement in our NPS to higher <br>
        revenue and retention of our <br>
        customers”</p>
        <p>
            —Simon Lindsay, CEO of Progressive <br>
             Direct
        </p>
    </div>
    <div class="awness_gchild2">
<img id="awness_img" width="50%" src="./Solution_Page_Logo/mp-customerfeedback-tab2.png" alt="awreness_gchild">
    </div>
</div>
        `
})

<template>

  <div>

    <div class="header"><h2>Retweet graph</h2></div>

    <hr />

    <figure class="image">

      <img src="@/assets/retweet-graph.png" alt="" />

      <figcaption style="text-align:center;font-size:14px;font-style:italic;">
        A sample of 10K retweets
      </figcaption>

    </figure>

    <div class="header"><h2>Twitter user and tweets statistics</h2></div>

    <hr />

    <div>

      <h3>Most retweeted users</h3>

      <table>

        <thead>

          <tr>

            <th>Ranking</th>

            <th>Retweets (in dataset)</th>

            <th>User</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>38210</td>

            <td>@JoeBiden</td>

          </tr>

          <tr>

            <td>2</td>

            <td>12539</td>

            <td>@KamalaHarris</td>

          </tr>

          <tr>

            <td>3</td>

            <td>6220</td>

            <td>@PeteButtigieg</td>

          </tr>

          <tr>

            <td>4</td>

            <td>5478</td>

            <td>@BernieSanders</td>

          </tr>

          <tr>

            <td>5</td>

            <td>5282</td>

            <td>@ProjectLincoln</td>

          </tr>

          <tr>

            <td>6</td>

            <td>4766</td>

            <td>@kylegriffin1</td>

          </tr>

          <tr>

            <td>7</td>

            <td>4682</td>

            <td>@mmpadellan</td>

          </tr>

          <tr>

            <td>8</td>

            <td>4666</td>

            <td>@donwinslow</td>

          </tr>

          <tr>

            <td>9</td>

            <td>3998</td>

            <td>@MeidasTouch</td>

          </tr>

          <tr>

            <td>10</td>

            <td>3789</td>

            <td>@DonaldJTrumpJr</td>

          </tr>

        </tbody>

      </table>

      <h3>Most retweeted tweets</h3>

      <table>

        <thead>

          <tr>

            <th>Ranking</th>

            <th>Retweets (in dataset)</th>

            <th>Retweets (true)</th>

            <th>User</th>

            <th>Tweet</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>845</td>

            <td>317.6K</td>

            <td>@KamalaHarris</td>

            <td>
              While I may be the first woman in this office, I will not be the
              last—because every little girl watching tonight sees that this is
              a country of possibilities.
            </td>

          </tr>

          <tr>

            <td>2</td>

            <td>578</td>

            <td>221.1K</td>

            <td>@JoeBiden</td>

            <td>Keep the faith, guys. We’re gonna win this.</td>

          </tr>

          <tr>

            <td>3</td>

            <td>545</td>

            <td>178.6K</td>

            <td>@JoeBiden</td>

            <td>
              I won't be president until January 20th, but my message today to
              everyone is this: wear a mask.
            </td>

          </tr>

          <tr>

            <td>4</td>

            <td>538</td>

            <td>315K</td>

            <td>@JoeBiden</td>

            <td>
              I’m Joe Biden and I approve this message. https://t.co/TuRZXPE5xK
            </td>

          </tr>

          <tr>

            <td>5</td>

            <td>426</td>

            <td>148.3K</td>

            <td>@JoeBiden</td>

            <td>
              I’m happy to report that Jill and I have tested negative for
              COVID. Thank you to everyone for your messages of concern. I hope
              this serves as a reminder: wear a mask, keep social distance, and
              wash your hands.
            </td>

          </tr>

          <tr>

            <td>6</td>

            <td>415</td>

            <td>130.1K</td>

            <td>@BarackObama</td>

            <td>
              The fires across the West Coast are just the latest examples of
              the very real ways our changing climate is changing our
              communities. Protecting our planet is on the ballot. Vote like
              your life depends on it—because it does. https://t.co/gKGegXWxQu
            </td>

          </tr>

          <tr>

            <td>7</td>

            <td>407</td>

            <td>150.9K</td>

            <td>@JoeBiden</td>

            <td>America is back.</td>

          </tr>

          <tr>

            <td>8</td>

            <td>404</td>

            <td>120.5K</td>

            <td>@JoeBiden</td>

            <td>One month until Election Day. Let’s do this, America.</td>

          </tr>

          <tr>

            <td>9</td>

            <td>389</td>

            <td>139.1K</td>

            <td>@JoeBiden</td>

            <td>Count every vote.</td>

          </tr>

          <tr>

            <td>10</td>

            <td>369</td>

            <td>97.6K</td>

            <td>@JoeBiden</td>

            <td>
              Mr. President, if you don’t respect our troops, you can’t lead
              them. https://t.co/hcX9hGgdm5
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</template>

<script>
 export default { }
</script>

<style scoped>
h2 {
  margin: 50px 0 0 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
}
h3 {
  text-align: center;
  margin: 20px 0 20px 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  margin: 0 auto;
}
hr {
  width: 95%;
  color: rgb(80, 80, 80);
  margin-bottom: 30px;
  height: 1px;
  background-color: rgb(80, 80, 80);
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 3px solid rgb(146, 146, 146);
  border-radius: 4px;
}
table {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<template>
    <div class="parent">
        <div class="textbox">
            <div class="text">
                <div>This web application was built to supplement a project for the MSc Data and Web Science by the Aristotle University of Thessaloniki's
                Department of Informatics.</div><br>
                <div>Our team collected data from Twitter and CrowdTangle to build and train Machine Learning models in order to predict demographic features
                of Twitter users that talk about US politics and to detect the emerging/trending topics in the months leading up to the election and a 
                few weeks after it.</div><br>
                <div>The results of our study can be seen in this site. If you want to access our code, please click 
                    <a target="_blank" href="https://github.com/stergiosbamp/us-politics-analysis">here</a>.
                </div>
            </div>
        </div> 
        <div>
            <img src="@/assets/twitter.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.parent {
    height: 50%;
}

.textbox {
    border: 2px solid rgb(4, 84, 255);
    border-radius:10px;
    background-color:rgb(252, 249, 249);
    opacity: 1;
    width: 30%;
    padding: 50px;
    margin: 150px 50px 50px 150px;
    float: left;
    height: 100%;
}

.text {
    color: rgb(34, 34, 34);
    font-size: 18px;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    float: right;
    margin: 150px 200px 0 10px;
    height: 100%;
    border: 2px solid rgb(4, 84, 255);
    border-radius:10px;
}

</style>
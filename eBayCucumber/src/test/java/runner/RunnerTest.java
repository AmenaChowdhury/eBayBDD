package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"/Users/animesh/Downloads/eBayBDD/eBayCucumber/src/test/java/feature/Register.feature"},
        glue = {"stepDefinations"},  //step defination path, package name
        format = {"pretty","json:report/cucumber.json", "html:report/cucumber-pretty"},   //format for report
        strict = false,       //it will check if any steps are not defied/ordered
        monochrome = true,    //it will give u the access in console, readable format
        tags = {"@FunctionalTest"},
        dryRun = false  //maping system between the feature file and defination
    )

public class RunnerTest {
    }

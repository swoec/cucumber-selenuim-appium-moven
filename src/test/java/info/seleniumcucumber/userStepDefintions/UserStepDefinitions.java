package info.seleniumcucumber.userStepDefintions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import env.DriverUtil;



public class UserStepDefinitions implements BaseTest {
	
	protected WebDriver driver = DriverUtil.getDefaultDriver();
	
	@Given("^I should get logged-in$")
	public void should_logged_in() throws Throwable {
		
		By selection = By.id("flash");
        (new WebDriverWait(driver, 30)).until(
                ExpectedConditions.visibilityOfElementLocated(selection));
		String msg = driver.findElement(By.id("flash")).getText();
		if(!msg.isEmpty())
			msg = msg.split("\n")[0].trim();
		Assert.assertEquals("You logged into a secure area!", msg);
	}

	@When("^I click on element having id \"(.*?)\"$")
	public void i_click_on_element_having_id(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//		WebElement element = driver.findElement(By.id(arg1));
//		element.click();
	   
	}

	@Then("^element having xpath \"(.*?)\" should have text as \"(.*?)\"$")
	public void element_having_xpath_should_have_text_as(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//		WebElement element = driver.findElement(By.name("arg2"));
//		element.sendKeys(arg1);
//		Assert.assertTrue(element.isDisplayed());
	  
	}

	@Given("^I navigate to \"(.*?)\"$")
	public void i_navigate_to(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(arg1);
		Assert.assertEquals("The Internet", driver.getTitle());
	    
	}
	
	

	@Given("^I enter \"(.*?)\" into input field having id \"(.*?)\"$")
	public void i_enter_into_input_field_having_id(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement element = driver.findElement(By.id(arg2));
		element.sendKeys(arg1);
		
	    
	}

	@When("^I click on element having class \"(.*?)\"$")
	public void i_click_on_element_having_class(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement element = driver.findElement(By.className(arg1));
		element.click();
	    
	}

	@Then("^I close browser$")
	public void i_close_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.close();
	    
	}

	@Then("^I Login out$")
	public void i_Login_out() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//WebElement element = driver.findElement(By.cssSelector(""));
		//element.click();
	    
	}

	
}

package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on Login page$")
	public void user_already_login_page(){
	
		 System.setProperty("webdriver.chrome.driver","I:\\Automation\\chromedriver\\New folder\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("https://www.freecrm.com/index.html");
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	@When("^title of login page is Free CRM$")
	
	public void title_login_page(){
		
		String title= driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}
	
	/*@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
		driver.findElement(By.name("username")).sendKeys("Naveenk");
		driver.findElement(By.name("password")).sendKeys("test@123");
	}*/
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws InterruptedException  {
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password); 
		Thread.sleep(2000);
	}
	
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		
		driver.findElement(By.xpath("//input[@class='btn btn-small']")).submit();
	}
	
	@And("^user is on home page$")
	public void user_is_on_home_page() {
		
		 String title1 = driver.getTitle();
		 System.out.println("Home Page title ::"+ title1);
		 Assert.assertEquals("CRMPRO", title1);
	}
	
	@Then("^close the browser$")
	public void close_the_browser(){
		driver.close();
	}

}

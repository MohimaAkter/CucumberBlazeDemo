package Step_Defination_Four;

//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.support.ui.Select;

import Pages.ChooseFlights;
import Pages.Home;
import Pages.PassengerInfo;
import Step_Defination_Four.Hooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BookingFlights {
	 String url = "http://blazedemo.com";
	   
	   public WebDriver driver;
	   public Home hm;
	   public ChooseFlights cf;
	   public PassengerInfo pi;
	   
	   {
		   driver = Hooks.driver;
	   }
	   
	@Given("^Launch The Browser$")
	   public void Launch_The_Browser() throws InterruptedException
	   {
		//System.setProperty("Webdriver.chrome.driver", "C:\\chromedriver.exe");
		   //driver = new ChromeDriver();
		  // String url = "http://blazedemo.com";
		  //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  // driver.manage().window().maximize();
		   driver.get(url);
		   Thread.sleep(5000);
	   }
	@And("^Choose your departureanddestinationcity:$")
	public void Choose_your_departure_city()
	{
		cf = new ChooseFlights(driver);
		cf.DepartcureAndDestinationCity();
	}
	@When("^Click On Find Flights$")
	public void Click_On_FindFlights()
	{
		hm = new Home(driver);
		hm.FindFlights();
	}
	@Then("^Choose This Flights$")
	public void Choose_This_Flight()
	{
	    cf = new ChooseFlights(driver);
	    cf.Choosethisflight();
	}
	@And("^Enter \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\"$")
	public void Entervalues(String value1,String value2,String value3,String value4,String value5)
	{
	    pi = new PassengerInfo(driver);
	    pi.PassengerInformation(value1, value2, value3, value4, value5);	    		
	}
	@And("^Select DropDown Button$")
	public void Selest_DropDown_Button()
	{
		pi = new PassengerInfo(driver);
		pi.CardType();
	}
	@And("^Enter \"(.*?)\",\"(.*?)\",\"(.*?)\",\"(.*?)\"$")
public void CardInformation(String value6,String value7,String value8,String value9)
{
		pi = new PassengerInfo(driver);
		pi.CardInformation(value6, value7, value8, value9);
}
	@And("^Click On Purchase Flight$")
	public void Card_On_Purchase_Flight()
	{
		hm = new Home(driver);
		hm.PurchaseFlight();
	}
	@And("^Close The Browser$")
	public void Close_The_Browser()
	{
		driver.close();
	}
	
}

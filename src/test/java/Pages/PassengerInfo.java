package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class PassengerInfo {

WebDriver driver;
	
public PassengerInfo(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
@FindBy(xpath="//*[@id=\"inputName\"]")
WebElement inputNametxt;
@FindBy(xpath="//*[@id=\"address\"]")
WebElement Addresstxt;
@FindBy(xpath="//*[@id=\"city\"]")
WebElement Citytxt;
@FindBy(xpath="//*[@id=\"state\"]")
WebElement Statetxt;
@FindBy(xpath="//*[@id=\"zipCode\"]")
WebElement zipCodetxt;
@FindBy(xpath="//*[@id=\"cardType\"]")
WebElement cardTypedrp;
@FindBy(xpath="//*[@id=\"creditCardNumber\"]")
WebElement creditCardNumbertxt;
@FindBy(xpath="//*[@id=\"creditCardMonth\"]")
WebElement creditCardMonthtxt;
@FindBy(xpath="//*[@id=\"creditCardYear\"]")
WebElement creditCardYeartxt;
@FindBy(xpath="//*[@id=\"nameOnCard\"]")
WebElement nameOnCardtxt;

public void PassengerInformation(String value1,String value2,String value3,String value4,String value5)
{
	inputNametxt.sendKeys("Mohima Akter");
	Addresstxt.sendKeys("25-35,178street");
	Citytxt.sendKeys("Jamaica");
	Statetxt.sendKeys("New York");
	zipCodetxt.sendKeys("12345");
}
public void CardType()
{
	Select drp = new Select(cardTypedrp);
	drp.selectByVisibleText("American Express");
}

public void CardInformation(String value6,String value7,String value8,String value9)
{
	creditCardNumbertxt.sendKeys("345678912");
	creditCardMonthtxt.sendKeys("12");
	creditCardYeartxt.sendKeys("2022");
	nameOnCardtxt.sendKeys("Mohima");
}

}


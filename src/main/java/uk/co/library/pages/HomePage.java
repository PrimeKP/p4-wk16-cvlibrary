package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

/**
 * Created by Jay Vaghani
 */
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitle;
    @FindBy(xpath = "//input[@id='location']")
    WebElement location;

    //@FindBy(id = "location")
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;

    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptAllBtn;

    public void enterJobTitle(String enterjobTitle) {
        sendTextToElement(jobTitle,enterjobTitle);
    }

    public void enterLocation(String enterLocation) {
        sendTextToElement(location,enterLocation);

    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distanceDropDown,distance);
    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin,minSalary);
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax,maxSalary);
    }

    public void selectSalaryType(String salaryType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown,salaryType);
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    }

    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);
    }

    public void acceptIFrameAlert() throws InterruptedException {
        Thread.sleep(2000);
        driver.switchTo().frame("gdpr-consent-notice");
        clickOnElement(acceptAllBtn);
    }

}

package org.sonatype.mavenbook.cucumber.steps;

import static org.junit.Assert.assertThat;

import java.util.List;

import org.hamcrest.CoreMatchers;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TodoSteps {
	
	private WebDriver driver;
	private static final String appURL = "http://localhost/todo-mvc/client/";

	@Given("^I am on the main todos page$")
	public void visitMainTodosPage() throws Throwable {
		driver = new FirefoxDriver();
		driver.navigate().to(appURL);
	}

	@When("^I enter \"([^\"]*)\" into the new todo box$")
	public void enterTextIntoTodoBox(String text) throws Throwable {
		WebElement todo = driver.findElement(By.cssSelector("#new-todo"));
		todo.sendKeys(text);
	}

	@When("^press enter in the todo box$")
	public void pressEnter() throws Throwable {
		WebElement todo = driver.findElement(By.cssSelector("#new-todo"));
		todo.sendKeys(Keys.RETURN);
	}

	@Then("^a new todo is added with \"([^\"]*)\"$")
	public void verifyNewTodoAddedWithText(String text) throws Throwable {
		final List<WebElement> todos = driver.findElements(By.cssSelector("ul.todo-list li"));
		WebElement lastLabel = todos.get(todos.size() - 1).findElement(By.cssSelector("label"));
        assertThat(lastLabel.getText(), CoreMatchers.equalTo(text));
	}
}

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Firefox()
driver.get("http://localhost:5000")  # Change to your particular URL this was mine


def test_home_page():
    print("Testing Home Page")
    assert "Health Care Center" in driver.title


def test_navigation():
    print("Testing Navigation")
    about_link = driver.find_element(By.LINK_TEXT, "About")
    about_link.click()
    assert "About" in driver.title

    contact_link = driver.find_element(By.LINK_TEXT, "Contact")
    contact_link.click()
    assert "Contact" in driver.title

    home_link = driver.find_element(By.LINK_TEXT, "Home")
    home_link.click()
    assert "Health Care Center" in driver.title


def test_symptom_prediction():
    print("Testing Symptom Prediction Form")
    symptoms_input = driver.find_element(By.ID, "symptoms")
    symptoms_input.send_keys("itching, rash")

    predict_button = driver.find_element(By.XPATH, '//button[@type="submit"]')
    predict_button.click()

    # Wait for the result to be displayed
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "results-section"))
    )
    results_section = driver.find_element(By.CLASS_NAME, "results-section")
    assert results_section.is_displayed()


def test_modals():
    print("Testing Modals for Results")
    disease_button = driver.find_element(
        By.XPATH, '//button[@data-bs-target="#diseaseModal"]'
    )
    disease_button.click()

    # Wait for the modal to be displayed
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "diseaseModal"))
    )

    disease_modal = driver.find_element(By.ID, "diseaseModal")
    assert disease_modal.is_displayed()


# Run Tests
try:
    test_home_page()
    test_navigation()
    test_symptom_prediction()
    test_modals()
finally:
    time.sleep(5)
    driver.close()

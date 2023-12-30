@webTest
Feature: Dailymail web application for videos and sports news

Scenario: Verify the video player functionality. 
    Given I navigate to dailymail video pages
    And I select on the speaker icon to mute the video
    And I select on the speaker icon to unmute the video
    And I select video in page to begin playback 
    And I select the video to pause
    And I select on the forward arrow to change to the next video
    And I select on the backward arrow to change to the previous video
    When I see the video is finished
    Then I should see the next video autoplay


Scenario: Get the Position and Points for the given team from the Premier League table.  
    Given I navigate to dailymail home pages
    And I navigate sports section
    And I select and navigate to premier league section 
    When I retrieve any 4 teams postition and points
    Then I should display in report


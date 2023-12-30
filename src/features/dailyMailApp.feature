Feature: Daily Mail Christmas edition

  @androidTest
  Scenario: Verify the Newspaper edition is downloadable
    Given I launch the app
    When I navigate to home page 
    When I navigate recent issue on home page
    When I select see more section in recent issues tab
    Then I should be on archive page in all issues screen
    When I select download icon in dec 27 edition
    Then I navigate to signIn page
    When I open the downloaded edition in pdf mode
    And I navigate and select the 3rd page image
    Then I should see the camera icon
    And I select the camera icon and navigate to full view
    When I navigate and select the close button in last image 
    Then I should be in article light box page

  @iOSTest
  Scenario: Verify the Newspaper edition is downloadable
    Given I launch the app
    When I navigate to home page 
    When I navigate recent issue on home page
    When I select see more section in recent issues tab
    Then I should be on archive page in all issues screen
    When I select download icon in dec 27 edition
    Then I navigate to signIn page
    
    # ***************// The edition which I choose has reached the maximum number of devices criteria.

    # When I open the downloaded edition in pdf mode
    # And I navigate and select the 3rd page image
    # Then I should see the camera icon
    # And I select the camera icon and navigate to full view
    # When I navigate and select the close button in last image 
    # Then I should be in article light box page

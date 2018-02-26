# Weather-app
Application that retrieves weather data by city name from external API(OpenWeatherMap.org)

# Prerequisites 

npm, nodejs, git

# Installing Dependencies
1. Run your bash tool.
2. Go to "your/whole/path/weatherapp/" project folder
3. Run 'npm install' to install all needed dependencies.

## Development server

Run 'npm start' for a dev server. Navigate to `http://localhost:3000/`.

## Live app
There is a live version of the weather app deployed on heroku. You can find it here:
https://radiant-lowlands-60546.herokuapp.com/

## Testing app
To test the app type in city name you want to get weather forecast for.
1. You can try with: Rome, Toronto, Lviv, Winnipeg.
2. Reload page to see if the session was created and previously inquired cities are saved on the page.
3. Also, open new tab in browser to see if user searched cities are stored in the session.
4. (BUG) There is a bug regarding the session. When page is reloaded or new tab is opened, one of the previously inquired cities is added two times to the content.
This bug is yet to be fixed.

## Thank you for using Weather-App
May there be more often good weather in your life!

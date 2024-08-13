# Collaborative Story Writing Platform

Welcome to the Collaborative Story Writing Platform! This project is a React-based application that allows users to contribute to stories, upvote/downvote contributions, and view popular stories. It leverages advanced React features like custom hooks and the Context API to manage state effectively.

## Features

- **User Authentication:** Log in and out of the platform.
- **Story Contributions:** Add contributions to ongoing stories.
- **Upvote/Downvote Contributions:** Vote on contributions to influence story development.
- **View Popular Stories:** See the most popular stories based on user votes.
- **Dark/Light Theme Toggle:** Switch between dark and light themes.

## Technologies Used

- **React:** Core library for building the user interface.
- **Context API:** For global state management.
- **Custom Hooks:** Encapsulate reusable logic.
- **Braid Design System:** For consistent and accessible UI components.
- **LocalStorage:** For persisting data across sessions.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/renaldig/collaborative-story-platform.git
   cd collaborative-story-platform
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

## Usage

### Adding a Contribution

1. Log in to the platform using the test credentials.
2. Select a story to view its details.
3. Add your contribution using the form at the bottom of the story details.
4. Your contribution will be added to the story and stored in `localStorage`.

### Voting on Contributions

1. Navigate to a story with existing contributions.
2. Use the upvote or downvote buttons next to each contribution to cast your vote.
3. The votes are stored in `localStorage` and will persist across sessions.

### Viewing Popular Stories

1. Click on the "Popular Stories" section in the main interface.
2. The stories are ranked based on the total votes received by their contributions.

### Toggling Themes

1. Use the theme toggle button to switch between dark and light themes.
2. The selected theme is applied across the entire application.

## Project Structure

- **`src/`**: Contains all the source code for the application.
  - **`components/`**: Reusable UI components.
  - **`context/`**: Context providers for managing global state.
  - **`hooks/`**: Custom hooks for encapsulating logic.
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point for the React application.

## Responsive Design

The application is designed to be responsive and adapts to different screen sizes:

- **Desktop:** Full-featured interface with easy navigation.
- **Tablet:** Adjusted layout with slightly reduced padding and font sizes.
- **Mobile:** Compact layout with full-width buttons and smaller text for better readability.

## Testing

This project includes tests for complex state management:

### Testing Custom Hooks

We use Jest to test the functionality of custom hooks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions to this project! If you have any ideas, suggestions, or bug fixes, feel free to submit an issue or create a pull request.

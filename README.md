# Whac-a-Mole Game

A classic arcade-style Whac-a-Mole game implemented in vanilla JavaScript, HTML, and CSS. Players must click on moles as they randomly pop up from holes to score points.

## Features

- Real-time score tracking
- Custom cursor (hammer)
- Animated mole appearances
- Sound effects on successful hits
- Responsive grid-based layout
- End game functionality

## Game Mechanics

- Moles randomly appear from holes at regular intervals
- Click on a mole to score a point
- Each mole stays visible for 800ms
- Custom hammer cursor follows mouse movement
- Hitting a mole plays a sound effect and shows a "whacked" animation

## File Structure

```
whac-a-mole/
│
├── index.html
├── style.css
├── main.js
└── assets/
    ├── mole.png
    ├── mole-whacked.png
    ├── hammer.png
    └── smash.mp3
```

## Setup

1. Clone the repository
2. Ensure all assets are in the correct directory
3. Open `index.html` in a modern web browser

## Dependencies

- No external libraries required
- Modern web browser with JavaScript enabled
- Audio support for sound effects

## Controls

- Move the mouse to aim the hammer
- Click to whack moles
- Use the "END GAME" button to stop the current game

## Technical Details

- Built with vanilla JavaScript
- CSS Grid for game board layout
- CSS animations for mole movements
- Custom cursor implementation
- Event-driven game mechanics

## Browser Compatibility

- Works on all modern browsers
- Requires CSS Grid support
- JavaScript ES6+ features used



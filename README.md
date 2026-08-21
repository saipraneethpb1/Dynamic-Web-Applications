# Dynamic Web Applications

A collection of **30 small, self-contained web apps** built with vanilla HTML, CSS, and JavaScript
while working through the CCBP *Dynamic Web Applications* track.

Every app is plain front-end code — no build step, no framework, no `npm install`. Each one focuses
on a single JavaScript idea (event handlers, timers, arrays, JSON, `localStorage`, DOM creation) and
keeps the surrounding markup deliberately simple so the JS is the interesting part.

## Getting Started

Clone the repo and open any project's `index.html` in a browser:

```bash
git clone git@github.com:saipraneethpb1/Dynamic-Web-Applications.git
cd Dynamic-Web-Applications
xdg-open Tip-Calculator/index.html   # macOS: open, Windows: start
```

Or serve the whole folder and browse the directory listing:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

A local server is the nicer option — `localStorage` behaves consistently across the projects that
use it, instead of being scoped to `file://`.

## Project Structure

Each project is a folder with the same three files:

```
Project-Name/
├── index.html   # markup + Bootstrap CDN links
├── style.css    # project-specific styling
└── script.js    # the behaviour
```

The `Todo-Application/` folder is a nested group: nine exercises that build up to a full todo app.

## The Projects

### DOM & Events

| Project | What it does |
| --- | --- |
| [Traffic-Light](Traffic-Light/) | Three buttons switch which signal is lit, recolouring both the light and the active button. |
| [Toggle-like-and-unlike](Toggle-like-and-unlike/) | A like button that flips state — swaps the image, icon colour, and button styling on each click. |
| [Seasons-Switcher](Seasons-Switcher/) | Swaps `img.src` between four seasonal images, with separate small and medium assets. |
| [Color-Picker](Color-Picker/) | Four swatches set the container background and display the selected hex code. |
| [Tabs](Tabs/) | A three-tab layout for a travel page — shows one panel at a time by toggling a `d-none` class. |
| [Sizing-an-Image](Sizing-an-Image/) | Increment/decrement an image's width in 5px steps, with warnings at the 100px and 300px bounds. |
| [Button-Maker](Button-Maker/) | Live-styles a preview button from six inputs: colours, font size and weight, padding, border radius. |
| [Random-Color-Generator](Random-Color-Generator/) | Picks a random background colour from a fixed palette on every click. |

### Forms & Input Handling

| Project | What it does |
| --- | --- |
| [Tip-Calculator](Tip-Calculator/) | Calculates tip and total from a bill amount and percentage, validating for empty fields. |
| [Addition-Game](Addition-Game/) | Generates two random numbers, checks the user's sum, and restarts with a fresh pair. |
| [Chatbot](Chatbot/) | Appends the user's message to the chat, then a canned reply picked at random. |
| [Greeting-Card](Greeting-Card/) | Renders a greeting card from a JSON string parsed with `JSON.parse`. |

### Timers & Intervals

| Project | What it does |
| --- | --- |
| [Clear-the-counter-timer](Clear-the-counter-timer/) | A counter ticking every second, stopped with `clearInterval`. |
| [Custom-range-counter](Custom-range-counter/) | Counts from a user-supplied *from* value up to a *to* value, one step per second. |
| [Peace-Timer](Peace-Timer/) | A countdown with 20s / 30s / 40s / 1min presets; starting a new one cancels the previous. |

### Arrays & JSON

| Project | What it does |
| --- | --- |
| [Find-the-Index-of-the-Numbers](Find-the-Index-of-the-Numbers/) | Looks up a number's position in an array with `findIndex`. |
| [Splice-Playground](Splice-Playground/) | An interactive `Array.splice` sandbox — supply start index, delete count, and an item to insert. |
| [Word-cloud](Word-cloud/) | Renders words at random font sizes and lets you add your own. |
| [JSON-Stringify](JSON-Stringify/) | Shows `JSON.stringify` output for an array, an object, and an array of objects. |

### localStorage

| Project | What it does |
| --- | --- |
| [local-storage](local-storage/) | Saves a textarea's contents and restores them on reload. |
| [Remove-item-ls](Remove-item-ls/) | Same idea, plus a default seed value and `removeItem` to clear the key. |

### Todo Application

A progression from creating a single DOM element to a persisted todo list.

| Project | What it does |
| --- | --- |
| [Checkbox-and-label](Todo-Application/Checkbox-and-label/) | Creates a linked checkbox and label entirely from JavaScript. |
| [Toggle-the-strike-through](Todo-Application/Toggle-the-strike-through/) | Adds a class toggle so checking the box strikes the label through. |
| [User-Profile](Todo-Application/User-Profile/) | Builds a profile card — image, name, age — from an object. |
| [Grocery-List](Todo-Application/Grocery-List/) | Renders a styled list from an array, styling applied in JS. |
| [Recipe-Page](Todo-Application/Recipe-Page/) | Fills in a recipe's title, image, and ingredient list from an object. |
| [Mark-your-skills](Todo-Application/Mark-your-skills/) | A checkbox list generated from objects, each wired to its own toggle handler. |
| [Your-ordered-items](Todo-Application/Your-ordered-items/) | An order list where each item has a Cancel button that removes its row. |
| [Add-to-Cart-Page](Todo-Application/Add-to-Cart-Page/) | Builds the entire page — heading, input, button, list — in JavaScript, then adds items to the cart. |
| [Todos-Application](Todo-Application/Todos-Application/) | The full app: add, check off, and delete todos, saved to `localStorage`. |

## Built With

- **HTML5** and **CSS3**
- **Vanilla JavaScript** — no frameworks, no bundler
- **Bootstrap 4.5.2** via CDN, for layout and utility classes
- **Font Awesome** via CDN, in the projects that use icons

All dependencies load from a CDN, so an internet connection is needed for styling to render correctly.

## License

Personal learning projects — free to read, run, and borrow from.

# Features

```
State Management
- Initial Default
- Before and After
- Example: Open, Close, Toggle, Click-to-Scroll
```

## TIM Button (Text Input Mode)
- Default: AA
- Click to cycle through
- States in order: AA, Aa, aa, FF
    - AA: uppercase (default)
    - Aa: titlecase
    - aa: lowercase
    - FF: free form

## Color Button
- Default: Green
- Click opens drawer of pallette horizontally
    - Upon selection of new color, drawer closes
    - Placing new color on top in the original button’s place
    - Click on the original selected color to close drawer
- Color Order:
    - Green
    - Blue
    - Purple
    - Yellow
    - Pink
    - Grey

## Shell 
- Default: New Line + Fade-in-out Animation of Cursor + Unix Clock will be counting
- On page load, always render as a new line at the top of the terminal with:
    - Ability to scroll up and see the old lines entered
    - Click on an older line to copy to clipboard (only copy the text string)
    - New lines add below the top line
- Store historical lines in local data

## Execute Button
- Default: Green
- Changes color based on Text color selected
- Mouse Down:
    - Button shrinks a lil
    - Slightly eased animation
- Mouse Up:
    - Lock Unix clock static state for the line executed
    - Copy text to clipboard
    - Return to regular size
    - Start new line in terminal

## Minimap
- Default: Green
- Clicking on a line jumps to that line in the shell
- Pull historical data for display
- Word length to number of blocks displayed per line


## Scroll Buttons / Scroll Bar
- Default: Grey
- Up or Down click = 1 line of movement
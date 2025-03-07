# Create a Simple Chat UI Using Kunstige Komponenter

## Task

Create a clean, functional chat application UI using the Kunstige Komponenter web component library. The application should have:

1. A header with the application name
2. A sidebar with a list of conversation contacts
3. A main chat area with message history
4. A message input field for sending new messages

## Design System Information

Kunstige Komponenter is a minimal web component library using Custom Elements with zero dependencies. Here's the documentation for the components you'll need:

```
# Kunstige Komponenter Components

## Basic Usage
<script type="module" src="https://cdn.jsdelivr.net/gh/username/kunstige-komponenter@main/bundle.js"></script>

## Components to Use

### ki-header
<ki-header sticky>
  <h1 slot="title">App Title</h1>
  <div slot="right">Right content</div>
</ki-header>

### ki-sidebar
<ki-sidebar position="left" toggle-icon="Globe" header header-text="Contacts">
  <div>Sidebar content</div>
</ki-sidebar>

### ki-list
<ki-list hoverable>
  <div>List item 1</div>
  <div>List item 2</div>
</ki-list>

### ki-card
<ki-card elevation="medium">Content</ki-card>

### ki-message-field
<ki-message-field placeholder="Type message..." attachments></ki-message-field>
<!-- events: message-sent, message-canceled -->

### ki-icon
<ki-icon name="Search" size="medium"></ki-icon>
<!-- available icons: Arrow-Up, File, Globe, Loading, Placeholder, Search, Stop -->

### ki-button
<ki-button type="primary" size="medium">Label</ki-button>
<!-- types: primary, secondary, tertiary -->
```

## Requirements

1. **Responsive Layout**: The chat UI should adapt from mobile to desktop screens.
2. **Interactive Elements**:
   - Clicking a contact in the sidebar should display that conversation
   - Sending a message should add it to the current conversation
   - The sidebar should be collapsible on mobile

3. **Sample Data**:
   - Include 3-5 sample contacts with names and simple avatars
   - Pre-populate each conversation with 2-3 example messages
   - Messages should show the sender name, message text, and timestamp

4. **Styling**:
   - Use CSS variables for consistent styling
   - Conversations should visually indicate read/unread status
   - Active conversation should be highlighted in the sidebar

## Technical Guidelines

1. **HTML Structure**:
   - Use semantic HTML elements
   - Implement proper accessibility attributes
   - Keep the DOM structure clean and logical

2. **CSS**:
   - Use a mobile-first approach
   - Define custom properties for theming
   - Example: `--ki-primary: #3b82f6;`

3. **JavaScript**:
   - Implement basic event handling
   - Store conversation data in a simple array
   - No need for backend integration or persistence

## Output Format

Please provide:
1. Complete HTML file with embedded CSS and JavaScript
2. Brief explanation of the implementation choices
3. Any suggested improvements for a real-world version

The final result should be a single HTML file that runs in a modern browser with no dependencies other than the Kunstige Komponenter library.
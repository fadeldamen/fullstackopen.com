sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browse: Redirect to new page https://studies.cs.helsinki.fi/exampleapp/notes

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browse: Render new page. 



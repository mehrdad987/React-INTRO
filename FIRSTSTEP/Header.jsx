import React from 'react'; // Import React library to use JSX

// Define a functional component named Header
function Header() {
    // The component returns a header element
    return (
        <header>
            {/* Navigation bar */}
            <nav>
                {/* Unordered list for navigation items */}
                <ul className="nav-list">
                    {/* Each list item contains a button for navigation */}
                    <li>
                        <button className="nav-button">Home</button>
                    </li>
                    <li>
                        
                </ul>
            </nav>
        </header>
    );
}

// Export the Header component so it can be used in other files
export default Header;
/*Import Statement: Explains that we are importing the React library to use JSX syntax.*/
/*Component Definition: Clarifies that we are defining a functional component called Header. */   
/*Return Statement: Indicates that the component returns a header element. */   
/*Navigation Bar: Describes the purpose of the <nav> element. */   
/*Unordered List: Explains that the list is used for navigation items. */   
/*List Items: Each list item contains a button, and the comment emphasizes that these buttons serve as navigation links.  */   
/*Export Statement: Clarifies that we are exporting the Header component for use in other parts of the application.        */    

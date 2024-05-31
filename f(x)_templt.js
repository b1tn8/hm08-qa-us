
//customFunctionName: async function(arguments) {
    // 1. Find elements (using properties or selectors within the function)
    //const element1 = await $(this.element1Selector);
    // ... (you can add more element lookups here)
  
    // 2. Perform actions on the elements (optional)
    //await element1.setValue(argument1); // Use arguments or properties
  
    // 3. Additional logic or assertions (optional)
    // ... (you can add assertions or other logic here)
  
    // 4. Return a value (optional)
    //return someReturnValue;
  //}
  



  //    --**Function Declaration**--
  ///   `async function` declares an asynchronous function
  ///   `customFunctionName` replace with a descriptive name reflecting the function's purpose
  ///   `arguments` replace with a comma-separated list of arguments the function expects (optional)

  //    --**Finding Elements**--
  ///   `await $(this.propertyName)` use -this.- to find elements based on properties defined in the page object
  ///   `await $(selector)` can alternatively be used with a direct CSS selector or XPath expression passed as an argument or defined within the function

  //    --**Performing Actions**--
  ///   use WebdriverIO methods for interacting with elements (https://webdriver.io/docs/api/element/)
  ///   consider using `await element.waitForDisplayed()` before actions to ensure elements are visible

  //    --**Additional Logic**--
  ///   add your assertions like `expect` (https://webdriver.io/docs/api/expect-webdriverio)
  /////   assertions are statements that verify the expected outcome of an action in your test
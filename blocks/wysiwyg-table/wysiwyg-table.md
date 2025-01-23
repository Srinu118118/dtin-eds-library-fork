### WYSIWYG Table Block for Universal Editor

The WYSIWYG(What You See Is What You Get) table block is designed specifically for the **Universal Editor** to simplify the process of creating and managing table structures. It addresses the need for flexibility in content editing without requiring constant updates to the component model.

#### Key Features
- **Dynamic Column Addition**: In the Universal Editor, adding a new column traditionally requires modifications to the component model. With this block, columns can be dynamically added based on the `<li>` items authored in the block.
- **Ease of Use**: Content authors can create or update tables without requiring technical knowledge, making the process more efficient and user-friendly.
- **Flexibility**: The table adapts to the number of `<li>` elements provided, allowing for unlimited columns and rows as needed.

#### Example Structure
Below is an example of the `<ul>` and `<li>` structure used to define a table:

```html
<ul>
  <li>
    <p>Row 1</p>
    <ul>
      <li>Features &#x26; Fees</li>
      <li>Details</li>
    </ul>
  </li>
  <li>
    <p>Row 2</p>
    <ul>
      <li>Interest Rates</li>
      <li>8.5* p.a. onwards</li>
    </ul>
  </li>
  <li>
    <p>Row 3</p>
    <ul>
      <li>Loan Amount</li>
      <li>₹ 1,00,000 to ₹ 20,00,000</li>
    </ul>
  </li>
  <li>
    <p>Row 4</p>
    <ul>
      <li>Processing Fees</li>
      <li>Upto 2% of loan amount + applicable taxes</li>
    </ul>
  </li>
  <li>
    <p>Row 5</p>
    <ul>
      <li>Loan Tenure</li>
      <li>48 months tenure</li>
    </ul>
  </li>
</ul>
```

#### How It Works
1. **Row Definition**: Each `<li>` at the top level of the list defines a single row in the table.
2. **Cell Definition**: Within each row `<li>`, a nested `<ul>` contains `<li>` elements that define the cells for that row.
3. The block dynamically reads the structure of the `<ul>` and `<li>` elements and generates a corresponding HTML table.

#### Table Output
Using the structure provided above, the dynamically generated table would look like this:

| Features & Fees          | Details                               |
|--------------------------|---------------------------------------|
| Interest Rates           | 8.5* p.a. onwards                    |
| Loan Amount              | ₹ 1,00,000 to ₹ 20,00,000            |
| Processing Fees          | Upto 2% of loan amount + applicable taxes |
| Loan Tenure              | 48 months tenure                     |

#### Use Case
Imagine you are creating a pricing table or a feature comparison chart. Instead of manually defining the table structure or updating the component model for each new column, you can:
- Simply add a top-level `<li>` element for each row.
- Add a nested `<ul>` with `<li>` elements inside each row to represent the cells for that row.

The system automatically creates a visually appealing, structured table based on the authored list items.

This block enhances the content creation process by providing a dynamic, intuitive, and flexible solution for table management in the Universal Editor.

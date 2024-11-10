export default function Electronic(){
    return(
        <div
        style={{
          display: "flex",           // Flexbox layout activate karta hai
          alignItems: "center",       // Vertical alignment center par karta hai
          justifyContent: "center",   // Horizontal alignment center par karta hai
          minHeight: "100vh",         // Puri screen ke height ke barabar set karta hai
        }}>
<ol style={{fontSize:"70px"}}>
                <li>Mobile</li>
                <li>Laptop</li>
                <li>Rocket</li>
                <li>Charger</li>
            </ol>
        </div>
    )
}
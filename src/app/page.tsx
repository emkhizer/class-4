import Link from "next/link"; // Next.js ka Link component import kar rahe hain jo page navigation ke liye use hota hai

export default function Home() { // Home naam ki ek function component bana rahe hain jo default export hai
  return (
    <div 
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    > 
      {/* Ye div ek grid layout banata hai jo vertically aligned rows me elements ko center karta hai, screen ke height ko cover karta hai, aur spacing aur padding set karta hai */}
      
      <Link href="/electronics" style={{ fontSize: "70px" }}>
        {
        /*
        Certainly! Here's a breakdown of each part of the `className` in Roman Urdu:

```tsx
className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
```

### Detailed Explanation

- **`grid`**  
  Ye ek CSS utility hai jo is div ko ek grid container banati hai. Grid container ka matlab ye hai ke hum iske andar items ko rows aur columns me arrange kar sakte hain.

- **`grid-rows-[20px_1fr_20px]`**  
  Ye property grid rows ki height set kar rahi hai. Is setup ka matlab hai:
  - Pehli row ki height `20px` hai.
  - Dusri row ki height `1fr` (fraction unit) hai, jo baaqi bacha hua space occupy karti hai.
  - Teesri row ki height `20px` hai.
  
  Iska natija ye hai ke:
  - Pehli aur aakhri rows fixed height (20px) ki hain.
  - Beech wali row flexible hai aur baaqi screen height ka major portion leti hai.

- **`items-center`**  
  Ye CSS utility vertical direction me (yani row ke andar) grid items ko center karta hai. Agar items ki height grid cell se chhoti ho, to wo vertically center aligned rahenge.

- **`justify-items-center`**  
  Ye CSS utility horizontal direction me (yani column ke andar) grid items ko center karta hai. Agar items ki width grid cell se chhoti ho, to wo horizontally center aligned rahenge.

- **`min-h-screen`**  
  Ye utility minimum height set karti hai jo `100vh` (viewport height) ke barabar hoti hai, yani puri screen ko cover karti hai. Iska matlab ye hai ke ye div kam az kam screen ki height jitni lambi hogi.

- **`p-8`**  
  Ye utility `padding` apply karti hai jo har side se `2rem` (32px) hai. Ye padding space banata hai taake content border se thoda distance par rahe.

- **`pb-20`**  
  Ye bottom padding (padding-bottom) hai jo sirf niche se `5rem` (80px) space deti hai. Iska faida ye hai ke bottom me zyada space mil jaye, jo aesthetically content ko better presentation de sakti hai.

- **`gap-16`**  
  Ye utility grid items ke darmiyan horizontal aur vertical space banati hai jo `4rem` (64px) hota hai. Ye space items ko separate rakhta hai aur layout ko clean aur clear banata hai.

- **`sm:p-20`**  
  Ye responsive padding hai jo chhote (small) screens par padding ko `5rem` (80px) set karta hai. Iska matlab hai ke jab screen chhoti hogi to padding adjust ho jayegi taake zyada spacing mile aur layout neat lage.

- **`font-[family-name:var(--font-geist-sans)]`**  
  Ye custom font family apply karta hai jo ek CSS variable `--font-geist-sans` se li gayi hai. Yani ye font variable ke through define ki gayi custom font apply karega.
        
        
        
        
        
        Ye Link component "/electronics" page par le jaayega jab click kiya jaye aur text size ko inline style me 70px set kiya gaya hai */}
        Electronics
      </Link>
    </div>
  );
}

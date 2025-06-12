import { iPost } from "../types/Post";
import post0 from "../images/development/post0.jpeg"
import post1 from "../images/development/post1.jpeg"
import post2 from "../images/development/post2.jpeg"
import post3 from "../images/development/post3.jpeg"
import post4 from "../images/development/post4.jpeg"
import post5 from "../images/development/post5.mp4"
import post6 from "../images/development/post6.jpeg"

export const Dposts: iPost[] = [
    {
        id: 0,
        type: 'img',
        src: post6,
        description: `תושבי ראש העין תתחדשו,  שביל אופניים נוסף נחנך בשבילכם ולמענכם. 
        השביל מוביל מרח' ויצמן, דרך רח ז'בוטינסקי ועד לרח' בגין ועובר מאחורי הסופר בגבעת טל. 
        ממשיכים בכל הכוח לשפר ולהוסיף שבילים נוספים בעיר. תהנו 🙂`,
        date: `3 במרץ, 2025`
    },
    {
        id: 1,
        type: 'video',
        src: post5,
        description: `רעש? No more
        בשלב הראשון התחלנו בעבודות להתקנת חיפוי מפחית רעשים במנהרות ובשלב השני, נסלול כביש באספלט שקט.
        אנחנו פועלים בכל המישורים לרווחת התושבים - גם בהפחתת רעשים.
        כל הפרטים בסרטון. שתפו בכל הכוח 💪🏻`,
        date: '5 בפברואר, 2025'
    },
    {
        id: 2,
        type: 'img',
        src: post0,
        description: `תושבי רח' אבן-עזרא ונוסעי הקווים שעוברים בו - תתחדשו.
        מחר תיקונים וסיום בע"ה.`,
        date: '2 בדצמבר, 2024'
    },
    {
        id: 3,
        type: 'img',
        src: post1,
        description: `תושבי רחוב גרניט תתחדשו:
        הוספנו 13 חניות חדשות לאורך הרחוב למענכם.
        בנוסף החזרנו את הרחוב להיות חד-סטרי לכל אורכו.
        כך גם בטוח יותר לכלל משתמשי הדרך וגם קל יותר למצוא חנייה.
        ממשיכים לפעול בשבילכם.`,
        date: '7 בנובמבר, 2024'
    },
    {
        id: 4,
        type: 'img',
        src: post2,
        description: `תושבי נדין גורדימר, 
        הכשרנו למענכם 11 חניות חדשות. אמנם לקח קצת זמן, אבל היי, היה שווה לחכות..`,
        date: '29 בספטמבר, 2024'
    },
    {
        id: 5,
        type: 'img',
        src: post3,
        description: `סוללים את כבישי שכונת פסגת טל, 8 שנות המתנה הסתיימו.
        תתחדשו!`,
        date: '13 בספטמבר, 2024'
    },
    {
        id: 6,
        type: 'img',
        src: post4,
        description: `חניון חדש נסלל ונוסף לרווחת הקונים בשוק העירוני!
        שמח לעדכן כי ביום שישי הקרוב, תוכלו לחנות בנחת בחניון החדש שהקמנו עבורכם! 
        החניון כולל 252 מקומות חניה.
        אנא הקפידו להחנות במקומות המסומנים.
        שתהיה קניה מהנה!`,
        date: '31 ביולי, 2024'
    }
]
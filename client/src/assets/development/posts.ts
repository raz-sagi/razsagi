import { iPost } from "../types/Post";
import post0 from "../images/development/post0.jpeg"
import post1 from "../images/development/post1.jpeg"
import post2 from "../images/development/post2.jpeg"
import post3 from "../images/development/post3.jpeg"
import post4 from "../images/development/post4.jpeg"

export const Dposts: iPost[] = [
    {
        id: 0,
        type: 'img',
        src: post0,
        description: `תושבי רח' אבן-עזרא ונוסעי הקווים שעוברים בו - תתחדשו.
        מחר תיקונים וסיום בע"ה.`,
        date: '2 בדצמבר, 2024'
    },
    {
        id: 1,
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
        id: 2,
        type: 'img',
        src: post2,
        description: `תושבי נדין גורדימר, 
        הכשרנו למענכם 11 חניות חדשות. אמנם לקח קצת זמן, אבל היי, היה שווה לחכות..`,
        date: '29 בספטמבר, 2024'
    },
    {
        id: 3,
        type: 'img',
        src: post3,
        description: `סוללים את כבישי שכונת פסגת טל, 8 שנות המתנה הסתיימו.
        תתחדשו!`,
        date: '13 בספטמבר, 2024'
    },
    {
        id: 4,
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
import { iPost } from "../types/Post";
import post0 from "../images/education/post0.jpeg"
import post1 from "../images/education/post1.jpeg"
import post2 from "../images/education/post2.jpeg"
import post3 from "../images/education/post3.jpeg"
import post4 from "../images/education/post4.jpeg"
import post5 from "../images/education/post5.mp4"

export const Eposts: iPost[] = [
    {
        id: 0,
        type: 'img',
        src: post0,
        description: `זכיתי להדליק נר ראשון שלוש פעמים מרגשות ביותר הערב. 
        הראשון בבית הספר הכוללני לאוטיזם, הדלקתי נר עם תלמידה מתוקה ובהזדמנות זו, חשפתי עם מנהלת בית הספר את שם בית הספר - פלא! שם שנבחר בעקבות תהליך עומק שהתקיים בשיתוף הצוות, ההורים והתלמידים. 
        לאחר מכן הצטרפתי לשני ארועי הוקרה למשפחות המילואים והקבע היקרות, באירוע מיוחד שערכנו במיוחד עבורן. הדלקנו נר ראשון יחדיו, בתפילה להצלחת חיילי צה"ל והשבת החטופים לביתם עוד בחג החנוכה. 
        חנוכה שמח 🕎
        קרדיט תמונות הדלקת נר משפחות מילואים: רונן מני`,
        date: '25 בנובמבר, 2024'
    },
    {
        id: 1,
        type: 'img',
        src: post1,
        description: `ממשיכים בכל הכוח לבנות את קריות החינוך, שכוללות: ספריות, אודיטוריום, אולם ספורט וכמובן עשרות כיתות אם, מעבדות, חדרי ספח ומשרדים. 
        העתיד כבר כאן 🙏`,
        date: '13 בנובמבר, 2024'
    },
    {
        id: 2,
        type: 'img',
        src: post2,
        description: `הבוקר ברובע הנביאים, פתיחת אשכול הגנים 455! כיף לראות את הילדים מגיעים בהתרגשות לגן החדש ❤️`,
        date: '3 בנובמבר, 2024'
    },
    {
        id: 3,
        type: 'img',
        src: post3,
        description: `מועדים לשמחה, 
        אנחנו אולי בחופשה מרוכזת בחוה"מ סוכות,
        אבל לא מפסיקים לעבוד לרגע! 
        זה רק חלק מהעשייה בימים אלו:\n
        - מיגון ושיפוץ מוסדות החינוך לקראת חזרת הילדים לאחר החופשה
        \n- הוספת שתי כיתות לימוד חדשות, האחת בביה"ס נופים והשנייה באולפנה.
        \n- מסיימים שיפוץ עומק לשני מקלטים בביה"ס אוהל שלום ואת המקלט הגדול בביה"ס רמב"ם.  
        \n- משלימים פיתוח במרחב המוגן החדש בשני גני הילדים ברח' התנאים.
        \n- עבודות אחרונות לסיום גני הילדים במתחם הנביאים (455) לקראת פתיחה שבוע אחרי החג.
        \n- גיזום עצים וגינון בגני הילדים ברחוב ספיר.
        \n- סיום עבודות ההכנה לפתיחת תיכון תורני לבנות אחרי החג, כולל מגרש הכדורסל.
        \n- עובדים להשלים את אולם הספורט המשותף לביה"ס אלומות רחל ותיכון בגין.
        חג שמח תושבי ראש העין!`,
        date: '22 באוקטובר, 2024'
    },
    {
        id: 4,
        type: 'img',
        src: post4,
        description: `גם באוגוסט, המשכנו לחבק את משפחות המילואים עם קייטנה מיוחדת לילדים של משרתי מילואים בפועל, פעילויות חינמיות ומהנות לכל המשפחה ואטרקציות מפתיעות לסוף החופש. 
        הקרן לסיוע משרתי המילואים הגיעה לאגם כדי לפגוש את המשפחות ולסייע להן להגיש בקשות ולהבין את זכויותיהן.
        משפחות יקרות, אתן לא לבד - כולנו יחד איתכן!`,
        date: '3 בספטמבר, 2024'
    },
    {
        id: 5,
        type: 'video',
        src: post5,
        description: `עושים הכל על מנת ששנת הלימודים תיפתח הכי חלק שאפשר, גם בהסעות לילדי החינוך המיוחד. 
        תודה למנכ״לית העירייה על היוזמה החשובה, הרגעת ההורים והילדים לקראת היום הראשון ללימודים.`,
        date: '30 באוגוסט 2024'
    }
]
import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import raz from '../assets/images/raz.jpeg'
import ReadMore from './ReadMore';
const Main = styled.div({
    backgroundColor: 'F1F5F9',
    padding: '40px 30px',
    // height: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    scrollMarginTop: '10vh'
})

const Img = styled.img({
    width: '10em',
    height: '10em'
})

const Text = styled.div({
    display: 'flex', 
    flexDirection: 'row-reverse',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

})

const Headline = styled.h2({
    fontSize: '2em',
    color: '#384959'
})

const Description = styled.div({
    marginRight: '20px',
    whiteSpace: 'pre-line',
    direction: 'rtl',
    fontSize: '70%',
    textAlign: 'right'
})

const About: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Main id='about'>
            <Headline> רז שגיא </Headline>
        <Text>
        <Img src={raz}></Img>
            <Description>
                <ReadMore text={`
                    ראש העיר ראש העין החל ב- 19/3/2024, בן 60, מתגורר בעיר ברציפות 31 שנים, נשוי לרונה, אב לדן, עידון וגאיה וסבא למיה.
                    לשעבר מנכ"ל סונול EVI, המתמחה בפתרונות טכנולוגיים מתקדמים לטעינת רכב חשמלי.
                    בוגר תואר ראשון ושני במדעי המדינה באוניברסיטה העברית בירושלים, מוסמך קורס דירקטורים ומחברם של שני ספרים.
                    רז שרת בצה"ל כלוחם וכמפקד והשתחרר בדרגת אלוף משנה, לאחר שורה ארוכה של תפקידי פיקוד ובכלל זה מפקד סיירת גבעתי ומפקד גדוד. לאחר שחרורו מצה"ל, עמד בראש קבוצה שתכננה ופקחה על הקמת פרויקטים בתחום האבטחה באיחוד האמירויות. לאחר מכן שימש כשנתיים כמנכ"ל החברה לפיתוח בית אריה. 
                    בשבע השנים האחרונות מכהן רז כחבר מועצה מטעם סיעת 'התחדשות' שבראשה הוא עומד, שימש כיו"ר הוועדה לענייני ביקורת ומוביל שורת מאבקים בעיר – כנגד תחנת הכוח, כנגד רעש המטוסים, בעד חיבור ראש העין למטרו והעתקת קווי המתח הגבוה. בין היתר הקים את מאהל המחאה כנגד תחנת הכוח וגר בו למעלה מחודש.

                    רז נוכח בכל ישיבות מועצת העיר, מתאמן בקביעות ורץ 10 ק"מ לפחות שלוש פעמים בשבוע. `} isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            </Description>
        </Text>
    </Main>
  );
};

export default About;
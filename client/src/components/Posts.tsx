  import { Box, IconButton, Card, CardMedia, CardContent, Typography } from '@mui/material';
  import React, { useState } from 'react';
  import { styled } from 'styled-components';
  import Post from './Post';
  import { MdArrowBackIos } from "react-icons/md";
  import { MdArrowForwardIos } from "react-icons/md";
  import { iPost } from '../assets/types/Post';

  const Main = styled.div<{ backgroundColor: string }>(({ backgroundColor }) => ({
      backgroundColor: backgroundColor,
      padding: '30px 30px',
      height: 'fit-content',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      scrollMarginTop: '10vh'
  }))

  const Headline = styled.h2<{ textColor: string}>(({ textColor }) =>({
      fontSize: '2em',
      color: textColor
  }))

  interface IPostsProps {
      posts: iPost[],
      backroundColor: string,
      textColor: string,
      headline: string
  }

  const Video = styled.video`
    width: 100%;
    height: 250px;
    max-height: 200px; /* Or whatever height you want */
  `;

  const Image = styled('img')({
    width: '100%',
    height: '250px',
    maxHeight: '200px',
    objectFit: 'contain'
  })

  const PostComp = styled(Card)({
    height: '25em',
    display: 'flex',
    flexDirection: 'column', // Important for content to take up available space
  });
  const PostDate = styled('div') ({
    backgroundColor: 'white',
    direction: 'rtl',
    fontSize: '80%',
    paddingBottom: '10px',
    textAlign: 'right',
    paddingRight: '10px',
    paddingTop: '10px'
  })

  const ScrollableCardContent = styled(CardContent)({
    overflowY: 'auto', // Enable vertical scrolling
    flexGrow: 1,       // Allow content to expand within the card
    direction: 'ltr',
    '&::-webkit-scrollbar': { // Target the WebKit scrollbar (Chrome, Safari)
      width: '4px', // Adjust width as needed
    },
    // '&::-webkit-scrollbar-track': {
    //   background: '#f1f1f1', // Color of the track
    // },
    '&::-webkit-scrollbar-thumb': {
      background: '#888', // Color of the thumb
      borderRadius: '4px', // Rounded corners for the thumb
    },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  });

  const ContentWrapper = styled('div')({
      display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    textAlign: 'center',
    paddingLeft: '10px'
  })

  const Posts: React.FC<IPostsProps> = ({posts, backroundColor, textColor, headline}) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
      };
    
      return (
      <Main backgroundColor={backroundColor} id='posts'>
          <Headline textColor={textColor}>{headline}</Headline>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          p={2}
          sx={{ maxWidth: 600, mx: "auto" }}
          whiteSpace={'pre-wrap'}
        >
          <IconButton onClick={handlePrev}>
            <MdArrowBackIos />
          </IconButton>
    
          <PostComp sx={{ width: "80%", textAlign: "center", backgroundColor: 'black'}}>
            {posts[currentIndex].type === 'img' ? (
              <Image
              src={posts[currentIndex].src}
              alt={posts[currentIndex].description} // Use description as alt text
              />
              ) : (
                <Video controls preload="metadata" key={currentIndex}> {/* Use <video> element */}
                <source src={posts[currentIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            )}
            <ScrollableCardContent sx={{overflowY: 'scroll', backgroundColor: 'white'}}>
              {/* <Typography variant="h6" gutterBottom>
                {posts[currentIndex].type.toUpperCase()}
              </Typography> */}
              <ContentWrapper>

                <Typography variant="body2" color="text.secondary" style={{direction: 'rtl', padding: 0}}>
                  {posts[currentIndex].description}
                  {posts[currentIndex].link && <a href={posts[currentIndex].link} target="_blank">
                    לחצו כאן
                  </a>}
                </Typography>
                
              </ContentWrapper>
            </ScrollableCardContent>
            <PostDate>{posts[currentIndex]?.date}</PostDate>
          </PostComp>
    
          <IconButton onClick={handleNext}>
            <MdArrowForwardIos />
          </IconButton>
        </Box>
        </Main>
  //   return (
  //     <Main>
  //         <Post post={{
  //               id: 0,
  //               type: '',
  //               src: '/assets/images/post0.jpeg',
  //               description: `זכיתי להדליק נר ראשון שלוש פעמים מרגשות ביותר הערב. 
  //               הראשון בבית הספר הכוללני לאוטיזם, הדלקתי נר עם תלמידה מתוקה ובהזדמנות זו, חשפתי עם מנהלת בית הספר את שם בית הספר - פלא! שם שנבחר בעקבות תהליך עומק שהתקיים בשיתוף הצוות, ההורים והתלמידים. 
  //               לאחר מכן הצטרפתי לשני ארועי הוקרה למשפחות המילואים והקבע היקרות, באירוע מיוחד שערכנו במיוחד עבורן. הדלקנו נר ראשון יחדיו, בתפילה להצלחת חיילי צה"ל והשבת החטופים לביתם עוד בחג החנוכה. 
  //               חנוכה שמח 🕎
  //               קרדיט תמונות הדלקת נר משפחות מילואים: רונן מני`
  //           }}></Post>
  //     </Main>
  //   );
  )};

  export default Posts;
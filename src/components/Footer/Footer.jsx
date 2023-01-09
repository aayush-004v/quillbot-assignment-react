import React, { useState, useEffect } from 'react'
import './FooterStyle.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'

function CircularProgressWithLabel(props) {
  const [circular, setCircular] = useState(0)
  const [secondCircular, setSecondCircular] = useState(0)
  const [secondCircularProgress, setSecondCircularProgress] = useState(0)
  const [thirdCircular, setThirdCircular] = useState(0)

  useEffect(() => {
    if (circular < 75) {
      setTimeout(() => setCircular((prevTime) => (prevTime += 1)), 19)
    }
    if (secondCircular < 50) {
      setTimeout(() => setSecondCircular((prevTime) => (prevTime += 1)), 18)
    }
    if (secondCircularProgress < 100) {
      setTimeout(
        () => setSecondCircularProgress((prevTime) => (prevTime += 1)),
        19,
      )
    }
    if (thirdCircular < 85) {
      setTimeout(() => setThirdCircular((prevTime) => (prevTime += 1)), 19)
    }
  }, [circular, secondCircular, thirdCircular, secondCircularProgress])

  return (
    <div>
      <Typography
        variant="h5"
        mt="30px"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        Write better, faster, and clearer instantly
      </Typography>
      <Typography
        variant="subtitle3"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
        marginBottom="20px"
      >
        QuillBot is trusted by students, professional writers, and business
        people who want to write more effectively.
      </Typography>
      <div className="footer-main">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '300px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CircularProgress
              style={{ width: '115px', height: '115px', color: '#308140' }}
              variant="determinate"
              {...props}
              value={circular}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                style={{
                  fontSize: '40px',
                  color: '#308140',
                  fontWeight: '500',
                  marginTop: '-1rem',
                }}
                variant="caption"
                component="div"
                color="text.secondary"
              >
                {circular}%
                <div
                  style={{
                    fontSize: '14px',
                    color: '#308140',
                    fontWeight: '500',
                    marginTop: '-1rem',
                    letterSpacing: '0px',
                  }}
                >
                  time saved
                </div>
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle3"
            justifyContent="center"
            alignItems="center"
            display="flex"
            textAlign="center"
            margin="25px"
          >
            Average time savings per writing project.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '300px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-1.5rem',
            }}
          >
            <CircularProgress
              style={{ width: '115px', height: '115px', color: '#308140' }}
              variant="determinate"
              value={secondCircularProgress}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                style={{
                  fontSize: '40px',
                  color: '#308140',
                  fontWeight: '500',
                  marginTop: '-1rem',
                }}
                variant="caption"
                component="div"
                color="text.secondary"
              >
                {`${secondCircular}+`}
                <div
                  style={{
                    fontSize: '15px',
                    color: '#308140',
                    fontWeight: '500',
                    marginTop: '-1rem',
                    letterSpacing: '0px',
                  }}
                >
                  million
                </div>
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle3"
            justifyContent="center"
            alignItems="center"
            display="flex"
            textAlign="center"
            margin="18px"
          >
            Trusted by millions worldwide.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '300px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CircularProgress
              style={{ width: '115px', height: '115px', color: '#308140' }}
              variant="determinate"
              value={thirdCircular}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                style={{
                  fontSize: '40px',
                  color: '#308140',
                  fontWeight: '500',
                  marginTop: '-1rem',
                }}
                variant="caption"
                component="div"
                color="text.secondary"
              >
                {thirdCircular}%
                <div
                  style={{
                    fontSize: '14px',
                    color: '#308140',
                    fontWeight: '500',
                    marginTop: '-1rem',
                    letterSpacing: '0px',
                  }}
                >
                  of students
                </div>
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle3"
            justifyContent="center"
            alignItems="center"
            display="flex"
            textAlign="center"
            margin="18px"
          >
            Who reported their grades improved after using QuillBot.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return <CircularProgressWithLabel />
}

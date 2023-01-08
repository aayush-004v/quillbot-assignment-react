import React from 'react';
import { Typography } from '@mui/material';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseIcon from '@mui/icons-material/Close';
import './MembershipCard.css'
import TooltipShow from './TooltipShow';
import DiamondOutlined from '@mui/icons-material/DiamondOutlined';

export default function Card() {
  return (
    <>
      <Typography variant="h4" m="50px 40px" justifyContent="center" alignItems="center" display="flex" textAlign="center">
        Experience the full power of QuillBot
      </Typography>
      <div className=" card__container row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card card-shadow">
            <h3 className="card-header free-head">FREE</h3>
            <div className="card-body">
              <div className="button-head">
                <button type="button" className="btn sign-up-button">Sign Up-It's Free</button>
              </div>
              <ul className="list-group list">
                <li className="list-group-item">
                  <CheckSharpIcon color="success" fontSize="small" />&nbsp;
                  125 words in the Paraphraser
                </li>
                <li className="list-group-item">
                  <CheckSharpIcon color="success" fontSize="small" />
                  &nbsp; Standard and Fluency modes
                </li>
                <li className="list-group-item">
                  <CheckSharpIcon color="success" fontSize="small" />&nbsp;3 synonym options
                </li>
                <li className="list-group-item">
                  <CheckSharpIcon color="success" fontSize="small" />&nbsp;1 Freeze words and phrases
                </li>
                <li className="list-group-item">
                  <CheckSharpIcon color="success" fontSize="small" />&nbsp;
                  1200 words in the Summarizer
                </li>
                <li className="list-group-item">
                  <CloseIcon style={{ color: "red" }} fontSize="small" />&nbsp;
                  Faster processing speed
                </li>
                <li className="list-group-item">
                  <CloseIcon style={{ color: "red" }} fontSize="small" />&nbsp;
                  Advanced grammar rewrites
                </li>
                <li className="list-group-item">
                  <CloseIcon style={{ color: "red" }} fontSize="small" />&nbsp;
                  Compare Modes (Desktop only)
                </li>
                <li className="list-group-item">
                  <CloseIcon style={{ color: "red" }} fontSize="small" />&nbsp;
                  Plagiarism Checker*
                </li>
                <li className="list-group-item">
                  <CloseIcon style={{ color: "red" }} fontSize="small" />&nbsp;
                  Tone detection
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <small className="text-center"> No Credit Card Required</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-shadow">
            <h3 className="card-header premium-head"><DiamondOutlined fontSize="medium" />&nbsp; PREMIUM</h3>
            <div className="card-body">
              <div className="button-head">
                <button type="button" className="btn premium-button">Upgrade to premium</button>
              </div>
              <ul className="list-group list">
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Unlimited words in the Paraphraser
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Write Faster'}
                      body={'You’ll complete your work up to 75% faster with QuillBot.'}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes
                  </span>
                  <span></span>
                  <TooltipShow
                    heading={'Explore Multiple Styles'}
                    body={'You’ll complete your work up to 75% faster with QuillBot.'}
                  />
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;4 synonym options
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Add More Synonyms'}
                      body={'Full use of the Synonym Slider can increase the uniqueness of your text.'}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Unlimited Freeze words and phrases
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Prevent Words From Changing'}
                      body={
                        "Industry-specific terms (technical, scientific, medical, etc.) won't get changed during paraphrasing."
                      }
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    6000 words in the Summarizer
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Find The Key Points'}
                      body={'Research time is greatly reduced when articles are trimmed to their main points.'}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Faster processing speed
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Enjoy Increased Paraphrasing Speed'}
                      body={'Fifteen sentences are paraphrased at once instead of only two sentences with a free account.'}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Advanced grammar rewrites
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Get Immediate Recommendations'}
                      body={"Rewritten sentences are suggested for text that is too complicated or doesn't flow well."}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Compare Modes (Desktop only)
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Choose The Best Rewrite'}
                      body={"You'll be able to compare outputs from multiple modes."}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Plagiarism Checker*
                  </span>
                  <span>
                    <TooltipShow
                      heading={'Detect Plagiarism'}
                      body={'You can avoid accidental plagiarism by ensuring all outside sources are properly cited.'}
                    />
                  </span>
                </li>
                <li className="list-container list-group-item">
                  <span>
                    <CheckSharpIcon style={{ color: "#DC9E00" }} fontSize="small" />&nbsp;
                    Tone detection
                  </span>
                  <span>
                    <TooltipShow heading={'Communicative Insights'} body={'Understand how text can impact every audience'} />
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <small className="text-center"> 3-Day Money-Back Guarantee</small>
            </div>
          </div>
        </div>
      </div>
      <center>
      <div className="footer-bottom">
          *Scan up to 20 pages a month
          </div>
        </center>
    </>
  );
}

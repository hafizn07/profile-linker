import React, { useState } from 'react'
import Popup from './Popup';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, FacebookMessengerShareButton, FacebookMessengerIcon, EmailShareButton, EmailIcon } from "react-share"
import { BsLink45Deg } from "react-icons/bs"
import { MdOutlineCopyAll, MdDownloadDone } from "react-icons/md"
import {HiExternalLink} from "react-icons/hi"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareBtn = () => {

    const [copy, setCopy] = useState(false)

    const shareUrl = "https://connecthafiz.netlify.app/";
    const title = 'Hafiz - Frontend Developer';

    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className="linkshare">
            <div className="sharebtn" onClick={() => setButtonPopup(true)}>
                share <HiExternalLink />
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="social-share">
                    <FacebookShareButton url={shareUrl} quote={title}>
                        <FacebookIcon size={47} round />
                    </FacebookShareButton>

                    <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={47} round />
                    </LinkedinShareButton>

                    <TwitterShareButton url={shareUrl} title={title}>
                        <TwitterIcon size={47} round />
                    </TwitterShareButton>

                    <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                        <WhatsappIcon size={47} round />
                    </WhatsappShareButton>

                    <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
                        <FacebookMessengerIcon size={47} round />
                    </FacebookMessengerShareButton>

                    <EmailShareButton url={shareUrl} subject={title} body="body">
                        <EmailIcon size={47} round />
                    </EmailShareButton>
                </div>

                <div className="input_group">
                    <i> <BsLink45Deg /></i>
                    <input type="text" value={shareUrl} />

                    <CopyToClipboard text={shareUrl}
                        onCopy={() => setCopy(true)}>
                        <button className={`${copy ? 'copied' : 'copy'}`}>
                            {copy ? <MdDownloadDone size={18} /> : <MdOutlineCopyAll size={18} />}
                        </button>
                    </CopyToClipboard>

                </div>
            </Popup>
        </div>
    )
}

export default ShareBtn
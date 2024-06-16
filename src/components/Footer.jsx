import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaTiktok,
} from "react-icons/fa6";
import { SiAmazonmusic } from "react-icons/si";
const icons = [
  { url: "https://www.facebook.com/IAMCOBRAH/", icon: <FaFacebookF /> },
  { url: "https://twitter.com/_iamcobrah_", icon: <FaXTwitter /> },
  { url: "https://www.instagram.com/iamcobrah/", icon: <FaInstagram /> },
  {
    url: "https://www.youtube.com/channel/UCh2uBdR2SK5ZIhPLnDgxqug",
    icon: <FaYoutube />,
  },
  {
    url: "https://open.spotify.com/artist/1AHswQqsDNmu1xaE8KpBne?si=vgOP4P4TQM-UN0pWRKH5PA&nd=1",
    icon: <FaSpotify />,
  },
  {
    url: "https://music.apple.com/us/artist/cobrah/1441162293",
    icon: <FaApple />,
  },
  { url: "https://soundcloud.com/iamcobrah", icon: <FaSoundcloud /> },
  { url: "https://www.tiktok.com/notfound", icon: <FaTiktok /> },
  {
    url: "https://www.amazon.com/music/player/artists/B00L0BOVGM/cobrah?tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=e353ab15071a5b5ccd65669de4b3c3a6&ref=dmm_acq_soc_in_u_lfire_lp_x_e353ab15071a5b5ccd65669de4b3c3a6",
    icon: <SiAmazonmusic />,
  },
];
export const Footer = () => {
  return (
    <>
      <article>
        <ul>
          {icons.map((el) => (
            <li>
              <a href={el.url}>{el.icon}</a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

import { profile } from "@/data/content";
import { Flame } from "lucide-react";

const ProfileCard = () => {
  return (
    <aside className={`profile-wrap`}>
      <div className="profile-card reveal is-visible">
        <div className="arc arc-top" />
        <img src={profile.image} alt="Aaabad Ahmed" className="profile-image" />
        <h2>{profile.name}</h2>
        <div className="flame">
          <Flame size={19} fill="currentColor" />
        </div>
        <div className="arc arc-bottom" />
        <p>{profile.description}</p>
        <div className="socials" aria-label="Social links">
          {profile.socialMedia?.map(({ icon, label, url }, index) => (
            <a key={index} href={url} aria-label={label} target="_blank">
              <img src={icon} alt={label} width={20} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;

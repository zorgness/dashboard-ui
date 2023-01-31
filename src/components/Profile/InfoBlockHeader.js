import React from "react";

const InfoBlockHeader = () => {
  return (
    <div className="profile-header-container">
      <div
        className="profile-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://static.vecteezy.com/system/resources/previews/010/821/420/original/liquid-flow-holographic-pink-3d-neon-lava-lamp-geometric-background-for-banner-card-ui-design-or-wallpaper-gradient-mesh-bubble-in-the-shape-of-a-wave-drop-fluid-colorful-abstract-shapes-free-vector.jpg)`,
        }}
      >
        {/* <div className="d-flex flex-column text-center">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/41/00/97/1000_F_441009747_IT8Lfot0YFHbzVH6VSPKrxplFTKesed0.jpg"
            alt="avatar"
            className="avatar d-none"
          />
        </div> */}
        <div className="avatar-profile-container">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/41/00/97/1000_F_441009747_IT8Lfot0YFHbzVH6VSPKrxplFTKesed0.jpg"
            alt="avatar"
            className="avatar-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBlockHeader;

// 26. satırdaki beğeni sayısına bakın. Şu anda '100' olarak kodlanmış durumda.
// Doğru beğeni sayısını görüntülemek için proplardan gelen bir veri parçasını kullanın.
// Beğeni sayısını artırmak için "gonderiyiBegen" fonksiyonunu kullanan bir onClick işleyicisi de ekleyeceksiniz.
// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BegenBolumu = (props) => {

  const { gonderiyiBegen, begeniSayisi,liked } = props;

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper" onClick={gonderiyiBegen}  >
          <FontAwesomeIcon icon={faHeart} color={liked ? 'red':'black'} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} color='blue'/>
        </div>
      </div>
      <p className="like-number">{begeniSayisi} likes</p>
    </div>
  );
};

export default BegenBolumu;

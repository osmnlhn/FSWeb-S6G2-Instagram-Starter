/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

import React, { useState } from 'react';// State hook u import edin //import React from 'react';

import Gonderiler from './bilesenler/Gonderiler/Gonderiler'
import AramaCubugu from './bilesenler/AramaCubugu/AramaCubugu'; // Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak

import "./App.css";
import sahteVeri from './sahte-veri';

const App = () => {
  const [gonderiler,setGonderiler]=useState(sahteVeri);// Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  const [searchText,setSearchText]=useState("");

  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  const gonderiyiBegen = (gonderiID) => {
const newGonderiler=gonderiler.map((gonderi)=>
  {
if(gonderi.id===gonderiID){
  if(gonderi.liked){
  gonderi.likes--;
  gonderi.liked=false
  }
  else {
    gonderi.likes++;
  gonderi.liked=true;
  }
}
return gonderi;
}
  )
setGonderiler(newGonderiler);

    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
  };

  return (
    <div className="App">
      <AramaCubugu searchText={searchText} setsearchText={setSearchText}/>
      {searchText}
      <Gonderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};

export default App;

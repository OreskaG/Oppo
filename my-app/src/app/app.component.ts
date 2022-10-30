import { Component, OnInit } from '@angular/core';

const imgArr = [
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269591623643176/unknown.png",
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269559402991656/unknown.png",
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269516172316722/unknown.png",
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269478037688380/unknown.png",
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269428301639801/unknown.png",
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269397704196116/unknown.png",
  "https://cdn.discordapp.com/attachments/1036269298903154778/1036269356352553040/unknown.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1N5jDBvopKcv4rszW-EWJ0IPwN1xk2SVA-Q&usqp=CAU",
  "https://cs13.pikabu.ru/post_img/big/2021/02/02/6/1612256900152312273.png",
  "https://apus.ru/im.xp/056048048054054057054049.jpg",
  "https://animalsglobe.ru/wp-content/uploads/2021/05/10-1.jpg",
  "http://png.ipev.ru/2020/02/09/643309451b322a9bf086db36cbaf0766.jpg",
  "https://s9.travelask.ru/system/images/files/001/473/329/wysiwyg_jpg/9.jpg?1621951420",
  "https://natworld.info/wp-content/uploads/2017/06/%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC.jpg",
  "https://icdn.lenta.ru/images/2017/12/04/12/20171204125610054/detail_6f3075b715d1ffba5a3b561990d750ba.jpg",
  "https://4lapki.com/wp-content/uploads/2017/03/oposym-1.jpg",
  "https://animalsglobe.ru/wp-content/uploads/2021/05/22-1.jpg",
  "https://ecoportal.info/wp-content/uploads/2016/12/opossumi-544x363.jpg",
  "https://facts.museum/img/facts/3132.jpg",
  "https://faunistics.com/wp-content/uploads/2021/03/1-8.jpg",
  "https://zooclub.org.ua/assets/files/2014/01/lovkiy-opossum-severnyy.jpg",
  "http://png.ipev.ru/2020/02/09/755555.jpg",
  "https://zagony.ru/admin_new/foto/2022-2-9/1644403227/smeshnye-possumy-opossumy-30-foto_1.jpg",
  "https://animalworld.com.ua/images/2015/August/Animals/Didelphidae/Didelphidae-2.jpg",
  "https://tn.fishki.net/20/upload/post/2020/04/22/3296060/6888226-4713078.jpg",
  "https://ntv-static.cdnvideo.ru/home/news/20150323/oposs_vs.jpg",
  "https://retina.news.mail.ru/pic/9a/7f/main48801158_72d3a634d66c7293719691e30d06a907.jpg",
  "https://i.ytimg.com/vi/r-mZYpCkfec/maxresdefault.jpg",
  "https://cs10.pikabu.ru/post_img/big/2019/01/08/4/1546923291199731750.jpg",
  "https://s9.travelask.ru/uploads/post/000/024/578/main_image/facebook-b588fe881d44066b1e724896845e0f02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8b/Didelphis_albiventris%2C_Bahia%2C_Brazil_2.jpg",
  "https://www.shkolazhizni.ru/img/content/i132/132947_or.jpg",
  "https://imgtest.mir24.tv/uploaded/images/crops/2021/August/870x489_0x235_detail_crop_20210802160239_e63fa9f1_b9a6208dcb35cb38313602d25fafaa483b37812d9c676e55fa115c1e5cbe15c2.jpg",
  "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2011/01/11/110111113001_heidi_opossum_226x170_afp.jpg",
  "https://funart.pro/uploads/posts/2021-07/1626834138_25-funart-pro-p-milie-opossumi-zhivotnie-krasivo-foto-27.jpg",
  "https://i.pinimg.com/564x/ac/58/0c/ac580cf689ee5bd76278614da021f194.jpg",
  "https://ianimal.ru/wp-content/uploads/2011/12/202700c369e9.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-v8whIh2NPRj8x_OLJKKm0gmOylcYKeNPg&usqp=CAU",
  "http://animalsglobe.ru/wp-content/uploads/2021/05/31-1.jpg",
  "https://cameralabs.org/media/k2/items/cache/b8052526c072d3c705eebbac5d2cc7ac_L.jpg",
  "https://web-zoopark.ru/media/opossum.jpg",
  "https://wildfauna.ru/wp-content/uploads/2019/03/obl-opossu.jpg",
  "https://www.zoo-ekzo.com/sites/default/files/images/didelphis_virginiana.jpg",
  "https://static.life.ru/publications/2022/2/8/1575880363692.9773.jpeg",
  "https://lifecatalog.ru/images/d/did/Didelphis-albiventris.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwmQ1kOtdVgbptW6cXKdj_ClYrl4YK_eA2g&usqp=CAU",
  "https://farm2.static.flickr.com/1100/1087437745_9062dc515f_o.jpg",
  "http://4lapki.com/wp-content/uploads/2019/05/https-possumfacts-com-wp-content-uploads-2018-07-1024x682.jpeg",
  "https://cdn.fishki.net/upload/post/2019/05/21/2985633/f996c7953ce8fdcbe38b9457c7beb6a6.jpg",
  "https://www.hobbyportal.ru/data/products/cache/2018oct/17/22/239297_62563.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-L2KZM6ItqBSnF5TPc41Pia9mMu327tCxg&usqp=CAU",
  "https://s9.travelask.ru/uploads/post/000/035/936/main_image/full-98fdb0575e6420d934a6d2dba20d1c43.jpg",
  "https://farm4.static.flickr.com/3616/3493906750_cbb2ae3781_b.jpg",
  "http://animalsglobe.ru/wp-content/uploads/2021/05/24.jpg",
  "http://givnost.ru/wp-content/uploads/2018/04/opossum-zhivotnoe-obraz-zhizni-i-sreda-obitaniya-opossuma-1.jpg",
  "http://sun9-20.userapi.com/impf/c854016/v854016300/2da79/76a9fa1lnKw.jpg?size=1280x800&quality=96&sign=f3bc3db8a7176cbb6e3e2853d328f15f&type=album",
  "https://cs4.pikabu.ru/post_img/2016/05/15/1/og_og_1463269666237465400.jpg",
  "http://animalsglobe.ru/wp-content/uploads/2021/05/30-1.jpg",
  "http://sun9-35.userapi.com/impf/MASq5DAGeNYo-bF1RQUSXmKO8cK0jiNsiNqShA/mRs2KUu6UAQ.jpg?size=552x413&quality=96&sign=28981f738ab5bd4b0c259e2d13e41f8b&type=album",
  "https://krasivosti.pro/uploads/posts/2021-09/1632757491_18-krasivosti-pro-p-domashnie-opossumi-zhivotnie-krasivo-foto-19.jpg",
  "https://wildfauna.ru/wp-content/uploads/2019/03/opossum-2.jpg",
  "https://i.pinimg.com/originals/15/41/3a/15413a36b26ece9ae1c2ad37e5d1acda.jpg",
  "https://cs12.pikabu.ru/post_img/big/2021/01/15/1/1610666794223318711.png",
  "https://cameralabs.org/media/lab16/post/01-16/22/fotografii-possumov-i-opossumov_4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudr1vz9kzFC_HCgdAloWehka8s4rPCqXInw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9jueWQu37E1KidzLnOWUr7yqkOq2k_RL7w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcdmSTNbb-11LMwB2vFV4TJ309Dc_2k3ZAfcvFlDU-LiGueMk9SquBYaxjuqoEcORybw&usqp=CAU",
  "https://krasivosti.pro/uploads/posts/2021-09/1632757910_5-krasivosti-pro-p-spyashchie-opossumi-zhivotnie-krasivo-foto-5.jpg",
  "https://bigpicture.ru/wp-content/uploads/2020/11/ba246d65426ca5b2b3fe82283db1072c.jpg",
  "https://s.zefirka.net/images/2020-09-17/spasyonnye-opossumy-kotorye-vyglyadyat-ochen-milo/spasyonnye-opossumy-kotorye-vyglyadyat-ochen-milo-3.jpg",
  "https://funart.pro/uploads/posts/2021-07/1626231667_14-funart-pro-p-krichashchii-opossum-zhivotnie-krasivo-fot-20.jpg",
  "https://facts.museum/img/facts/1747.jpg",
  "https://zoogalaktika.ru/assets/images/mammalia/metatheria/didelphis-virginiana/didelphis-virginiana_01.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh57gq9rwm_kcoQO9gYbe9QyfE-hDYgxVJBA&usqp=CAU",
  "https://funart.pro/uploads/posts/2021-07/1627303279_4-funart-pro-p-opossum-domashnii-zhivotnie-krasivo-foto-4.jpg",
  "https://fotovmire.ru/wp-content/uploads/2020/01/29154/opossum-v-cvetochnoj-vaze.jpg",
  "https://kot-pes.com/wp-content/uploads/2019/10/post_5dab07c7a93b0.jpeg",
  "https://cameralabs.org/media/lab16/post/01-16/22/fotografii-possumov-i-opossumov_16.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtkptq7VaPDZpc0SaTD_oAWibbf2cYS__mg&usqp=CAU",
  "https://banana.by/uploads/thumbs/282/281111.jpg",
  "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-6c0f0fbd-0597-478d-af8c-0f65d2a81ea3&fu=1&kr=1&h=454&w=630",
  "https://medialeaks.ru/wp-content/uploads/2018/02/DeepinScreenshot_vyiberite-oblast_20180201104109-600x333.jpg",
  "https://medialeaks.ru/wp-content/uploads/2018/03/1-53.jpg",
  "https://pressa.tv/uploads/posts/2019-12/1577082852_pressa_tv_7.jpg",
  "https://i.ytimg.com/vi/UpGwt_baExk/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4U5hYlbMAE2wY-oWT8a1TMQFzrJrjm4Ocg7haMLZebc-TP0J18_m3K7mNsKBCgYZrh1k&usqp=CAU",
  "http://simple-fauna.ru/wp-content/uploads/2016/12/virgin-opossum.jpg",
  "https://wildfauna.ru/wp-content/uploads/2019/03/opossum-7.jpg",
  "https://humor.fm/upload/post/2019/05/27/1720265/main.jpg",
  "https://humor.fm/upload/post/2019/05/27/1720265/gallery/6d8107ee31b71523c4b19106b93ab896.jpg",
  "https://cdn.fishki.net/upload/post/2019/05/21/2985633/d6-fue8xoaarbct.jpg",
  "https://pics.utro.ru/utro_photos/2016/07/26/1291535.jpg",
  "https://lamcdn.net/wonderzine.com/post-og_image/QlBvlkQh_s1XG5Ckq2Tz2w.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBXPKTo4CkidWZ38z5v1V0B-vFuBGFgnaLQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yoeoO7QvWKN402v1RjdUxiOdHQuZ-rP9hw&usqp=CAU",
  "https://pic.rutube.ru/video/97/5b/975bae37730070f08b768dd0f452240b.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnNVaybOPiSym4MNvH7i4gS7P_FPNftIYTwW-fPPL7RBD-S_n6nIzL_YT3PYMS7aao7k&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZW7qb7cmygM064Z9kBevOGNt6DHWdHQUAfs-dY3vdc0741dxnAlBE1L5TWg3ZqgMJWRM&usqp=CAU",
  "https://cs11.pikabu.ru/post_img/2020/08/09/3/1596942971153360884.png",
  "https://cs4.pikabu.ru/post_img/2014/07/24/8/1406205679_751099903.jpg",
  "https://cs11.pikabu.ru/post_img/big/2019/08/08/9/1565278946189473481.png",
  "https://img-9gag-fun.9cache.com/photo/aD4qM7G_460s.jpg",
  "https://preview.redd.it/5hwl11b044i71.jpg?width=640&crop=smart&auto=webp&s=f7f0eff70238a7176ecafa7c4cd1a6969d99b172",
  "https://mypets.by/wp-content/uploads/2015/04/11409355626_1ca5206fa1.jpg",
  "https://farm2.static.flickr.com/1100/1087437745_9062dc515f_o.jpg"
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  count = 0;
  img = "";
  btnBlock = false;

  ngOnInit() {
    this.shuffle(imgArr);
    this.img = imgArr[this.count]
  }

  next() {
    if ( this.count < imgArr.length - 1) {
      this.count =  this.count + 1;
    } else {
      this.count = 0;
    }
    this.img = imgArr[this.count];
    this.btnBlock = true;
    setTimeout(()=> this.btnBlock = false, 1000)
  }

  shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

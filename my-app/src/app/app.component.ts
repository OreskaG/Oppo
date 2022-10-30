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
  "https://retina.news.mail.ru/pic/9a/7f/main48801158_72d3a634d66c7293719691e30d06a907.jpg"
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
    this.img = imgArr[this.count]
  }

  shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

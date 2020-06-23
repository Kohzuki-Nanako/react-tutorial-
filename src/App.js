import React from "react";
import Image from 'react-image-resizer';
import nanako from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_8225.jpg"
import family from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_2454.jpeg"
import birdie from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_8912.jpg"
import vdslab from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-15 10.40.21.png"
import vdslab1 from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-15 10.40.21.jpeg"
import sousyoku1 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_1511.jpg"
import sousyoku2 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_1474.jpg"
import processing from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_1518.PNG" 
import R from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-rstudio-data-analysis-logo-datacamp-inc-editorial-clipart-collection-68-5baa304fb0fd72.033036701537880143725 (1).png"
import Ruby from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-ruby-on-rails-logo-5b382677430a38.5004713115304065192746.png"
import C from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-the-c-programming-language-c-computer-programmin-language-5abd180755e448.3999244815223418953518.png"
import python from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-python-programming-language-computer-programming-c-hanuman-png-transparent-images-free-download-clip-5b814ed35d07d0.8307633215352009793811.png"
import CSS from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-logo-cascading-style-sheets-html5-css3-prags-h-python-stickers-5b5ed262588918.5038573515329408983627.png"
import vs from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-visual-studio-code-microsoft-visual-studio-source-c-5acd3e97a1c707.4865550215234003436627.png"
import slack from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-slack-business-microsoft-teams-organization-slack-5b366ae3ae5f04.6125345015302929637142.png"
import github from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b4ec817.2080142615351082033227.png"
import CPR from "/Users/nanako/vdslab/react-tutorial-/src/media/kisspng-logo-brand-font-cpr-5b2389c53733c0.9425013215290556852261.png"
import head from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_1457.JPG"
import cookpad from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 10.54.00.png"
import rice from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 10.55.55.png"
import cuoca from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 10.57.21.png"
import kewpie from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 11.01.14.png"
import today from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 11.01.37.png"
import yutori from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 11.29.16.png"
import pinterest from "/Users/nanako/vdslab/react-tutorial-/src/media/スクリーンショット 2020-06-18 11.00.17.png"
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import SimpleSlider from "./slider";
import SimpleSlider1 from "./slider1";
import SimpleSlider2 from "./slider2";
import SimpleSlider3 from "./slider3";
import SimpleSlider4 from "./slider4";
import SimpleSlider5 from "./slider5";

const style = {
  image: {
    border: '0.5px solid #ccc',
    background: '#fefefe',
  },
};
const style1 = {
  image: {
    border: '0.0px solid #ccc',
    background: '#000000',
  },
};


const Home = () => {
  return <div>
    <div className="container">
      <div className="tile is-ancestor">
       <div className="tile is-3 is-vertical is-parent">
         <div className="tile is-child box">
           <h1 className = "title"> profile</h1>
           <figure className="image is-256x256">
             <img className="is-rounded" src={nanako} alt = "Nanako"/>
           </figure>
           <ul>
               <li><b>名前</b>　こーづき</li>
               <li><b>職業</b>　大学生（情報科）</li>
               <li><b>住んでいる地域</b>　東京</li>
               <li><b>一言</b>  食べること、体を動かすことが好きです！基本スポーツは好きですが、体育の授業のダンスだけは苦手でした。</li>  
　　　　　　　</ul>
         </div>
         <div className="tile is-child box">
           <p className="title">リンク</p>
           <aside className="menu">
             <ul className="menu-list">
               <li className="level">
                 <div className="level-left">
                   <div className="level-item">
                     <span className="icon is-large has-text-link">
                       <i className="fab fa-github fa-2x"></i>
                     </span>
                     <a href="https://github.com/Kohzuki-Nanako">GitHub</a>
                   </div>
                 </div>
               </li>
               <li className="level">
               <div className="level-left">
                 <div className="level-item">
                   <span className="icon is-large has-text-link">
                     <i className="fab fa-twitter fa-2x"></i>
                   </span>
                   <a href="https://twitter.com/0129birdie">Twitter</a>
                 </div>
               </div>
               </li>
               <li className="level">
               <div className="level-left">
                 <div className="level-item">
                   <span className="icon is-large has-text-link">
                     <i className="fab fa-instagram fa-2x"></i>
                   </span>
                   <a href="https://www.instagram.com/k.nanako52/">instgram</a>
                 </div>
               </div>
               </li>
             </ul>
           </aside>         
         </div>
      </div>
      <div className="tile is-9 is-vertical is-parent">
        <div className="tile is-child box">
           <h1 className="title">こういう人物です</h1>
           <h3 className="title">ME</h3>
           <p> 1999年１月２９生まれ、最近身体の衰えをとても感じるようになった２１歳です。</p>
           <p> 東京生まれ東京育ち。東京がもちろん好きですが、父の実家が神戸なので、神戸も好きです！</p>
           <br/>
           <h3 className="title">家族</h3>
           <p>兄と姉がいて、イングリッシュブルドッグのバーディーを飼っています。</p>
           <table border="0">
            <tr>
             <td width="300"><img src={family} alt="家族"/></td>
             <td width ="150"></td>
             <td width="300" height="300"><img src={birdie} alt="Birdie"/></td>
            </tr>
           </table>
           <br/>
           <h3 className="title">趣味</h3>
           <p>運動や、料理をすることが好きです。特に運動は、部活動でテニスをやっていたので今でも友達と部活に顔出したり、コートを借りてテニスを楽しんでいます！
           料理については、<a href="#/photo">Photoライブラリー</a>をのぞいてみてください！</p>
           <h3 className="title">大学では</h3>
           <p>大学では、情報科に進みプログラミングや情報数学について学んでいます。大変なプログラミングの授業も受けつつ、好きな数学の授業もあるので、とても充実した学校生活を送っています。3年生から、尾上研究室に配属され真面目な同期のみんなに感化されながら、頑張っています。</p>
           <p>これは、尾上研究室のHPです。<small>↓Click!!↓</small></p>
           <div class="demo04">
	          <a href="https://vdslab.jp/">
		         <img src={vdslab} width="1800" height="400" alt="Vds"  onmouseover={vdslab1} onmouseout={vdslab}/>
	          </a>
           </div>
           <br/>
           <h3 className="title">その他</h3>
           <p>大学生になってから、プールの監視員としてアルバイトをしています。また、水泳教室で幼稚園年長さんから小学生6年生までの子供達に水泳を教えています。まだ、サブコーチなのでメインコーチになれるよう頑張ります！</p>
           <p>嬉しいことに、事務職も手伝わせてもらっていて、年度ごとに自治体に提出する業務書類なども書いています。そのほかには、館内の装飾にも携わっています。</p>
           <div class="box">
            <article class="media">
              <div class="media-left">
                 <Image src={sousyoku1}
                   width={300}
                   height={220}
                   style={style.image}
                 />
              </div>
              <div class="media-content">
               <div class="content">
                <p><h4>お散歩マップ</h4></p>
                <p>各地域の駅周りの地図とオススメのお店などを紹介しているものを作成しました。</p>
               </div>
              </div>
              </article>
              <article class="media">
              <div class="media-left">
                <Image src={sousyoku2}
                   width={300}
                   height={300}
                   style={style.image}
                 />
              </div>
              <div class="media-content">
               <div class="content">
                <p><h4>2020東京オリンピック・パラリンピックに向けて</h4></p>
                <p>冬季・夏季オリンピックの年表を作成しました。日本ってこんなに開催されてたんだなど新しい発見がたくさんありました。</p>
               </div>
              </div>
            </article>
           </div>                    
        </div>
      </div>
     </div>
    <footer calssname="footer">
          <div className="content has-text-centered">
            <p>2020 © Kohzuki_Nanako</p>
          </div>
     </footer>
  </div>
 </div>;
};


 
const Photo = () => {
  return <div>
    <div className="container">
     <div className="tile is-ancestor">
      <div className="tile is-3 is-vertical is-parent">
         <div className="tile is-child box">
           <h1 className = "title"> よく参考にするサイト</h1>
            <div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={cookpad} alt="クックパッド"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="https://cookpad.com/">
                 <p class="title is-4">クックパッド</p>
               </a>
               </div>
              </div>
              <div class="content">
              みなさんによくお馴染みのクックパッド。いろんな状況に合わせた特集など、毎日更新されていて 見ていて飽きません。つくれぽがすごい、人気の記事を検索するコツがあります！
              </div>
             </div>
            </div>
            <div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={rice} alt="白ご飯"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="https://www.sirogohan.com/">
                 <p class="title is-4">白ご飯.com</p>
               </a>
               </div>
              </div>
              <div class="content">
                白米に合う、いろんな和食がぎゅっと集まったサイトです。出汁のとり方など、料理の基本なども教えてくれます！
              </div>
             </div>
            </div>
            <div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={cuoca} alt="クオカ"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="http://recipe.cuoca.com/pc/">
                 <p class="title is-4">cuoca</p>
               </a>
               </div>
              </div>
              <div class="content">
                手作りお菓子とパンのレシピが見られます。レシピとともに材料とキッチン用品も同じサイト内で購入できるため便利です！
              </div>
             </div>
           </div>
           　<div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={kewpie} alt="キューピー"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="https://www.ntv.co.jp/3min/">
                 <p class="title is-4">キューピー３分クッキング</p>
               </a>
               </div>
              </div>
              <div class="content">
                今日の放送を見逃した！ってなっても、一週間前までなら放送のビデオも見れるところがおすすめです
              </div>
             </div>
           </div>         
         　　<div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={today} alt="今日の"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="https://www.kyounoryouri.jp/">
                 <p class="title is-4">きょうの料理</p>
               </a>
               </div>
              </div>
              <div class="content">
                私の好きな講師さんがたくさんレシピを公開してくれています！古いレシピから最新のレシピまでなんでも揃っています
              </div>
             </div>
           </div>
           　<div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={yutori} alt="栗原"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="https://www.yutori.co.jp/recipe/">
                 <p class="title is-4">栗原はるみ</p>
               </a>
               </div>
              </div>
              <div class="content">
                <small>栗原はるみさんの出ている番組はいつも録画するほど、尊敬している方です。かっこいいキッチンも憧れます</small>
              </div>
             </div>
            </div>
           　<div class="card">
              <div class="card-image">
               <figure class="image is-5by3">
                <img src={pinterest} alt="ピント"/>
               </figure>
              </div>
             <div class="card-content">
              <div class="media">
               <div class="media-content">
               <a href="https://www.pinterest.jp/">
                 <p class="title is-4">Pinterest</p>
               </a>
               </div>
              </div>
              <div class="content">
                写真やイラストを探したいときによく使用します。レシピももちろん調べられるのでおすすめです！
              </div>
             </div>
           </div>
      　</div>
      </div>
      <div className="tile is-9 is-vertical is-parent">
      <div className="tile is-child box">
      <h1 className="tital"><strong>こーづき食堂</strong></h1>
       <h2 className="subtital">家族の甘党に合わせていたらスイーツ作りが趣味になりました。もともと母が、お料理が上手でハンドミキサーやハンドブレンダーなどの器具はもちろん、シフォン型やタルト型などの製菓用品が充実していたため、初期費用ゼロだったので趣味にしやすかったです笑</h2>
       <div className="App">
         <center><p>一眼レフで撮ったスイーツたち。</p>
         <p>一眼レフにはまっていた時に、ケーキを作ってはパシャパシャしていました</p></center>   
         <SimpleSlider />
         <br></br>
         <br></br>
         <center>こちらはiphoneで撮ったスイーツたちです。バスチーが簡単なのにめっちゃ美味しかった！</center>
         <SimpleSlider1 />
         <br></br>
         <br></br>
         <center>オムレツ、オムライスは簡単なので好きです(笑)ケチャップで文字を書くのは定番です。<br/>（基本兄に作ったものに書いてます笑）</center>
         <SimpleSlider2 />
         <br></br>
         <br></br>
         <center>ホームベーカリーでパンを焼いたり、ピザ生地を作って一からピザを作ったりします！労力はあまりかかりませんが、時間がとてもかかります</center>
         <SimpleSlider3 />
         <br></br>
         <br></br>
         <center><p>こーづき食堂</p>
         <p>日々の夜ご飯などです。</p></center>
         <SimpleSlider4 />
         <br></br>
         <br></br>
         <center><p>おまけ</p>
         <p>愛犬バーディーの一コマ。小3からの付き合いです。少々内弁慶なところがありますが、優しい子です。</p></center>
         <SimpleSlider5 />
         <br></br>
        </div>
       </div>
      </div>
     </div>
    <footer calssname="footer">
      <div className="content has-text-centered">
        <p>2020 © Kohzuki_Nanako</p>
      </div>
    </footer>
  </div>
 </div>;
};


const Body = () => {
  return (
    <Router>
      <Switch>
        <Route path="/photo">
          <Photo />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>     
    </Router>
  );
};
const App = () => {
  return <div>
  <section className="hero">
    <div className="hero-head">
    <nav className="navbar">
        <div class="navbar-brand">
            <span class="navbar-item">Nanako&amp;Co.</span>
        </div>
        <div class="navbar-end">
           <div class="navbar-item">
                <a href="https://vdslab.jp/"><p>vdslab 尾上研究室Webサイト</p></a>
           </div>
        </div>
      </nav>
     </div>
    <figure class="image is-3by1">
         <img src={head} alt="Head"/>
    </figure>
     <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
         <ul>
           <li className="is-active"><a href="#/">Home</a></li>
           <li className="is-active"><a href="#/question">About me</a></li>
           <li className="is-active"><a href="#/photo">Photoライブラリー</a></li>
         </ul>
         </div>
       </nav>
     </div>
     <div>
      <Body />
     </div> 
   </section>
  </div>
};

const Question = () => {
  return <div>
   <div className="container">
      <div className="tile is-ancestor">
       <div className="tile is-3 is-vertical is-parent">
        <div className="tile is-child box">
             <strong>習った言語</strong>
             <div class="box">
            <article class="media">
              <div class="media-left">
                 <Image src={processing}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                 <Image src={C}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                 <Image src={R}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
              </article>
            <article class="media">
              <div class="media-left">
                 <Image src={Ruby}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                 <Image src={python}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                 <Image src={CSS}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            </div>
            <strong>ツール</strong>
            <div class="box">
            <article class="media">
              <div class="media-left">
                 <Image src={vs}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                 <Image src={github}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                 <Image src={slack}
                   width={240}
                   height={240}
                   style={style1.image}
                 />
              </div>
            </article>
            </div>
            <strong>資格</strong>
            <div class="box">
            <p>・英検準２級</p>
            <p>・書道１段</p>
            <p>・水上安全法</p>
            <p>・公益財団法人日本体育施設協会スポーツ救急手当プロバイダー</p>  
            <article class="media">
              <div class="media-left">
                 <Image src={CPR}
                   width={200}
                   height={200}
                   style={style1.image}
                 />
              </div>
            </article>
         </div>
         </div>
       </div>
       <div className="tile is-9 is-vertical is-parent">
       <div className="tile is-child box">
          <h1 className="title">誰得100の質問</h1>
           <h2>よくある１００の質問に答えてみました。長いし、誰に利益があるのかわかりませんが暇な人は、読んでください笑</h2>
           <article class="message">
            <div class="message-body">
            <p><b>1.お名前は？</b> 　　那奈子</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>2.その名前の由来は？</b> 　　姉（＝春奈）と同じ漢字を入れるため</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>3.誕生日は？</b> 　　1月29日 1月の肉の日！！！</p>
       </div>
      </article>
      
      <article class="message">
       <div class="message-body">
       <p><b>4.何座？</b> 　　水瓶座</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>5.何型？</b> 　　大雑把のO型！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>6.チャームポイントは？</b> 　　常に笑ってます。</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>7.自分が思うあなたの性格は？</b> 　　ネガティブ、声でかい</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>8.他人からどんな性格だと言われますか？</b> 　　知りません！教えて！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>9.自分の好きなところあえて一つあげるなら？？</b> 　　初対面でも誰でも話せる</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>10.自分の嫌いなところあえて一つあげるなら？</b> 　　ありすぎて1つとか無理！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>11.芸能人似てるとしたら？ </b> 　　いない!</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>12.動物に例えるとしたら？</b> 　　さる!</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>13.色で表すとしたら？</b> 　　オレンジ</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>14.自分を言葉で表すとしたら？</b> 　　日焼け大好き馬鹿野郎</p>
       </div>
      </article>    
      <article class="message">
       <div class="message-body">
       <p><b>15.好きな言葉は？</b> 　　another match to play</p>
       </div>
      </article>       
      <article class="message">
       <div class="message-body">
       <p><b>16.趣味は？ </b> 　　運動？</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>17.特技は？  </b> 　　テニス</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>18.将来の夢は？  </b> 　　　　専業主婦だったけど、今はティファニーが普通に買えちゃうような暮らしがしたいな！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>19.何人家族？  </b> 　　　　4人と１匹</p>
       </div>
      </article>  
      <article class="message">
       <div class="message-body">
       <p><b>20.兄弟姉妹はいる？  </b> 　　　　兄、姉</p>
       </div>
      </article>     
      <h2 className="tital">ここからは好きなもの嫌いなものを答えます</h2>
      <article class="message">
       <div class="message-body">
       <p><b>21.楽曲  </b> 　　　　2012~2014年くらいの洋楽</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>22.映画</b> 　　　　チャーリーとチョコレート工場</p>
       </div>
      </article>  
      <article class="message">
       <div class="message-body">
       <p><b>23.テレビ  </b> 　　　　わかんない</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>24.YouTuber  </b> 　　　最近朝倉兄弟のハマりました</p>
       </div>
      </article>     
      <article class="message">
       <div class="message-body">
       <p><b>25.色彩 　  </b> 　　　グレー</p>
       </div>
      </article>  
      <article class="message">
       <div class="message-body">
       <p><b>26.教科　  </b> 　　　数学、体育</p>
       </div>
      </article>      
      <article class="message">
       <div class="message-body">
       <p><b>27.食べ物　  </b> 　　　スイカ</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>28.動物または生き物　  </b> 　　　ブルドッグ</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>29.休日は何してる？　  </b> 　　　バイト</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>30.よく行く場所は？　  </b> 　　家の近くの洋食屋さん</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>31.インドア派？アウトドア派？　  </b> 　　誰かについていく系のアウトドア</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>32.海？山？ 　  </b> 　　山！</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>33. 犬？猫？　  </b> 　　犬！</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>34. S？M？　  </b> 　　ノーマルのN！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>35.LINEの返信は早い方？遅い方？ 　  </b> 　　早い！</p>
       </div>
      </article>          
      <article class="message">
       <div class="message-body">
       <p><b>36.LINEと電話ならどっち派？ 　  </b> 　　LINE</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>37.LINEの友達どれぐらいいる？  </b> 　　300くらい</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>38. 一番使うアプリは？ </b> 　<a href="https://www.instagram.com/k.nanako52/">instgram</a></p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>39.好きなタイプは？   </b> 　　嘘つかない人</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>40.今もしかして恋してる？   </b> 　　いいえ</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>41.その人はどんな人？   </b> 　　ー</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>42.愛したい？愛されたい？   </b> 　　どっちも</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>43.初デートに行きたいスポットは？   </b> 　　どこでもw</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>44.好きな人とは手を繋ぐ派？   </b> 　　どんな派だよw</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>45.将来、結婚したい？   </b> 　　したい。扶養に入りたいwww</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>46.子供は何人欲しい？    </b> 　　2!</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>47.男の子？女の子？</b> 　　男の子、女の子一人ずつ</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>48.子供の名前はなに？ </b> 　　２文字がいい</p>
       </div>
      </article>
      <h2 className = "tital">折り返し地点　　ここからは○×コーナー（これみんな１００まで見んのかな）</h2>
      <article class="message">
       <div class="message-body">
       <p><b>49.ズバリ、自分が好き！ </b> 　　x</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>50.実はすぐ泣いちゃう！ </b> 　　o</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>51.めっちゃモテると思う！ </b> 　　x</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>52.優柔不断な性格だと思う！ </b> 　　o</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>53. 実はヲタクです！ </b> 　　x</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>54. 人見知りします！ </b> 　　x</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>55. 怒ると怖いです！ </b> 　　x</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>56. 怒ると怖いです！ </b> 　　x</p>
       </div>
      </article>
      <h2 className = "tital">もし、〇〇〇だったら？コーナー</h2>
      <article class="message">
       <div class="message-body">
       <p><b>57. もし、100万円あったらなにに使う？ </b> 　　貯金</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>58. もし、魔法が一つだけ使えるならどんな魔法？ </b> 　　頭が良くなる魔法</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>59. もし、生まれ変わるなら何になりたい？ </b> 　　人</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>60. もし、明日世界が滅亡するとしたらなにする？ </b> 　　いろんな人に会う</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>61. もし、政治家になったらどんな日本にしたい？ </b> 　　子育て支援を充実させる</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>62.部活何やってる？または何やってた？  </b> 　　テニス、ラクロス</p>
       </div>
      </article>     
      <article class="message">
       <div class="message-body">
       <p><b>63.それは楽しかった？   </b> 　　楽しかった！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>64.勉強はできる方？   </b> 　　中学校までは頑張ってたなw</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>65.最高何点とったことある？    </b> 　　100点</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>66.今まで何人に告白されたことある？   </b> 　　いない！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>67.今まで何人に告白したことある？   </b> 　　1！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>68.今更ですが、性別は？    </b> 　　女性です</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>69.学校は楽しい？または楽しかった？    </b> 　　楽しい！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>70.先生に恋したことある？   </b> 　　ない</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>71.どんな男の子が好き？  </b> 　　よく笑うひと、嘘つかない人</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>72.どんな女の子が好き？   </b> 　　面白い、楽しい子！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>73.友達は多い方？   </b> 　　少ないです</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>74.花火大会やハロウィン、クリスマスなどのイベントは好き？   </b> 　　好き</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>75.どんな思い出があるか教えて？  </b> 　　ハロウィンの日、高校の友達がガチ仮装して行ったら怒られてた</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>76.自分の名前であいうえお作文どうぞ！  </b> 　　こ：こんにちは う：嬉しいな　づ：づ？　き：きょうは　な：なんだか　な：なんでも　こ：こんにちは</p>
       </div>
      </article>  
      <article class="message">
       <div class="message-body">
       <p><b>77.ホラー映画得意？ </b> 　　無理！</p>
       </div>
      </article> 
      <article class="message">
       <div class="message-body">
       <p><b>78.辛いものは得意？ </b> 　　不得意</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>79.甘いものは得意？ </b> 　　超得意</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>80.春夏秋冬どの季節が好き？</b> 　　秋１０月の始まり</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>81.その理由は？</b> 　　部活終わりの夕方の空気感が好きだった</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>82.その季節に何したい？</b> 　　スポーツ</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>83.朝起きて何する？</b> 　　トイレ！</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>84.夜寝る前何する？ 　　</b> 　　コップ一杯の水飲む</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>85.夜寝る前何する？ 　　</b> 　　コップ一杯の水飲む</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>86.行きたい地方は？  　　</b> 　　九州地方</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>87.その理由は？ 　　</b> 　　食べ物が美味しそう</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>88.そこでどんなことしたい？　</b> 　　　　屋台行きたい</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>89.行きたい国は？　</b> 　　　イタリア</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>90.　その理由は？</b> 　　　高くて絶対買えないけど服を見たい</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>91.　そこでどんなことしたい？ </b> 　　　観光</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>92.人生で一番楽しかった思い出は？ </b> 　　　高校生活</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>93.これだけは知っててほしいことは？ </b> 　　　黒いです</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>94.好きな匂いは？ </b> 　　　バーディーの匂い</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>95.雨は好き？ </b> 　　　大っ嫌い</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>96.和食、洋食、中華どれが一番好き？ </b> 　　　和食</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>97.尊敬している人は？ </b> 　　　いません</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>98.この質問、楽しかった？ </b> 　　　まぁ笑</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>99.では質問してた人にむかって一言どうぞ！ </b> 　　　１００問もよく考えられますねw</p>
       </div>
      </article>
      <article class="message">
       <div class="message-body">
       <p><b>100.最後に一言どうぞ！ </b> 　　　最後まで読んで頂き、ありがとうございました！</p>
       </div>
      </article>
    </div>
   </div>
    </div>
    <footer calssname="footer">
      <div className="content has-text-centered">
        <p>2020 © Kohzuki_Nanako</p>
      </div>
   </footer>
 </div>
</div>
}

export default App;
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'


export default function Home() {
  return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Transfer2Market Anasayfa</title>
        <link rel="icon" href="assets/img/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="assets/css/swiper.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/color.css" />
  <header>
    <div className="container">
      <div className="nav">
        <div className="d-flex align-items-center">
          <div className="logo">
            <a href="#">
              <img
                alt="logo"
                src="assets/img/t2mlogo-white.png"
                style={{ width: 250 }}
              />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Servislerimiz</a>
            </li>
            <li>
              <a href="#">Araçlarımız</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
        <div style={{ display: "none" }}>
          <form id="content">
            <input
              type="text"
              name="input"
              className="input"
              id="search-input"
            />
            <button type="reset" className="search" id="search-btn" />
          </form>
          <a href="contacts.html" className="themebtu">
            Get Started
          </a>
        </div>
        <div className="bar-menu">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
    <div
      className="mobile-nav hmburger-menu"
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <a href="index.html">
          <img src="assets/img/logo.png" alt="Responsive Logo" />
        </a>
      </div>
      <ul>
        <li className="menu-item-has-children">
          <a href="JavaScript:void(0)">Home</a>
          <ul className="sub-menu">
            <li>
              <a href="index.html">homepage 1</a>
            </li>
            <li>
              <a href="index-2.html">homepage 2</a>
            </li>
            <li>
              <a href="index-3.html">homepage 3</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="JavaScript:void(0)">Pages</a>
          <ul className="sub-menu">
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="team.html">team</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="pricing.html">pricing</a>
            </li>
            <li>
              <a href="404error.html">404 error</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="JavaScript:void(0)">portfolio</a>
          <ul className="sub-menu">
            <li>
              <a href="portfolio-grid.html">portfolio grid</a>
            </li>
            <li>
              <a href="portfolio-masonry.html">portfolio masonry</a>
            </li>
            <li>
              <a href="portfolio-metro.html">portfolio metro</a>
            </li>
            <li>
              <a href="portfolio-single-v1.html">portfolio single v1</a>
            </li>
            <li>
              <a href="portfolio-single-v2.html">portfolio single v2</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="JavaScript:void(0)">blog</a>
          <ul className="sub-menu">
            <li>
              <a href="blog-grid.html">blog grid</a>
            </li>
            <li>
              <a href="blog-single-post.html">blog single post 1</a>
            </li>
            <li>
              <a href="blog-single-post-2.html">blog single post 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contacts.html">contacts</a>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" />
    </div>
  </header>
  <section
    className="hero-section-one"
    style={{ backgroundImage: 'url("assets/img/bg-wp-1.jpg")' }}
  >
    <div className="container">
      <div className="heading-boder">
        <h2>
          <span>Yolculuğun</span>
          En Güvenli ve Konforlu Hali{" "}
        </h2>
        <p>Rahat ve konforlu yolculuk için maksimum efor sarfediyoruz.</p>
        <a href="#" className="themebtu full">
          Servislerimizi Görün
        </a>
      </div>
    </div>
  </section>
  <div>
    <div className="container">
      <div
        className="small-services-color"
        style={{ backgroundColor: "white" }}
      >
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="small-services">
              <div>
                <a href="#">Araştırma Ekibi</a>
                <span>
                  Daha iyi hizmet için teknolojik araştırmalar yapıyoruz.
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="small-services">
              <div>
                <a href="#">Daha Yükseğe</a>
                <span>
                  Geri dönüşleriniz sayesinde şirketimizi daha yükseğe
                  taşıyoruz.
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="small-services lest mb-0">
              <div>
                <a href="#">Güvenliğin Önemi</a>
                <span>
                  Kaliteli araçlar ve iyi şoförler ile daha güvenli bir
                  yolculuğa çıkın.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="brands-we-work one gap">
    <div className="container">
      <div className="swiper-container brandswiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="brand-img">
              <img alt="img" src="assets/img/Sponsorlar.png" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand-img">
              <img alt="img" src="assets/img/Sponsorlar.png" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand-img">
              <img alt="img" src="assets/img/Sponsorlar.png" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand-img">
              <img alt="img" src="assets/img/Sponsorlar.png" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand-img">
              <img alt="img" src="assets/img/Sponsorlar.png" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="brand-img">
              <img alt="img" src="assets/img/Sponsorlar.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="gap no-bottom">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="welcome">
            <img alt="img" src="assets/img/480x620.png" />
            <img
              alt="img"
              className="img-welcome"
              src="assets/img/330x400.png"
            />
            <img alt="dots" className="dots" src="assets/img/dots.png" />
          </div>
        </div>
        <div className="col-xl-6 pl-75">
          <div className="heading design-enjoy">
            <h6>Her zaman en iyisi.</h6>
            <h2>
              {" "}
              Yolcularımızın konforu ve yolculuğu bizim için en önemlisi.
            </h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="welcome-text">
            <h6 className="pt-4 pb-5">
              Araçlarımızda ve şirketimizde sunduğumuz hizmet ile yolcularımızın
              en güvenli ve konforlu şekilde istedikleri yere gitmelerini
              sağlıyoruz.
            </h6>
            <h5>Kullanıcı Geri Dönüşleri</h5>
            <p>
              Bugüne kadar yaptığımız 1000'in üzerinde transfer ve turlardan
              kötü geri bildirim almadık.
            </p>
            <h5>Dijital Dünya</h5>
            <p>
              Teknolojinin ilerlemesi ile biz de transferlerimizi ve diğer
              hizmetlerimizi en iyi sistemlere taşıdık.
            </p>
            <a href="#" className="themebtu">
              Servislerimizi Görün
            </a>
          </div>
        </div>
      </div>
    </div>
    <img className="w-100" alt="line" src="assets/img/line.jpg" />
  </section>
  <section className="how-it-works gap no-top">
    <div className="container">
      <div className="heading">
        <h6>Nasıl Çalışıyoruz?</h6>
        <h2> Transferlerimizi ve turları nasıl gerçekleştiriyoruz?</h2>
        <img alt="line" src="assets/img/headingline.png" />
      </div>
      <div className="row pt-4">
        <div className="col-xl-4 col-lg-6">
          <div className="strategic">
            <h2>O1/</h2>
            <div className="pl-80">
              <a href="#">
                <h4>Randevu Oluşturun</h4>
              </a>
              <p>
                Randevu oluşturarak sistemimize bildiri de bulunun. Bu sayede
                ekiplerimiz size hemen ulaşacaklardır.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="strategic">
            <h2>O2/</h2>
            <div className="pl-80">
              <a href="#">
                <h4>Size Özel</h4>
              </a>
              <p>
                Randevu sonucunda size özel araçların ve şoförlerin ayarlanması
                ile belirttiğiniz zamanda yolculuğunuzu gerçekleştirin.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="strategic">
            <h2>O3/</h2>
            <div className="pl-80">
              <a href="#">
                <h4>Yolculuk</h4>
              </a>
              <p>
                Yolculuk sırasında önceden belirttiğiniz adrese en hızlı ve
                güvenilir yollardan ulaştırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="project gap">
    <div className="container">
      <div className="heading-boder">
        <h2>
          Transfer
          <br />
          Araçlarımız<span>Sizleri Bekliyor</span>
        </h2>
        <p>Randevu oluşturmak için diğer sitemizi ziyaret edin.</p>
      </div>
      <div className="swiper-container projectsswiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="project-data">
              <img alt="img" className="w-100" src="assets/img/600L.png" />
              <div className="project-text">
                <h5>Mercedes Splinter </h5>
                <p>15 Kişi Kapasiteli Mercedes Splinter.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-data">
              <img alt="img" className="w-100" src="assets/img/600l4.png" />
              <div className="project-text">
                <h5>Full Vip Mercedes Splinter</h5>
                <p>20 Kişilik Kapasiteli Mercedes Splinter.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-data">
              <img alt="img" className="w-100" src="assets/img/600L3.png" />
              <div className="project-text">
                <h5>Mercedes Vito</h5>
                <p>6 Kişilik Mercedes Vito.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="project-data">
              <img alt="img" className="w-100" src="assets/img/600L2.png" />
              <div className="project-text">
                <h5>Full Vip Mercedes Vito</h5>
                <p>
                  7 Kişilik Mercedes Vito, Televizyon ve teknolojik sistemler.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 476.213 476.213"
            style={{ enableBackground: "new 0 0 476.213 476.213" }}
            xmlSpace="preserve"
          >
            <polygon
              points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
            />
          </svg>
        </div>
        <div className="swiper-button-prev">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 476.213 476.213"
            style={{ enableBackground: "new 0 0 476.213 476.213" }}
            xmlSpace="preserve"
          >
            <polygon
              points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
            />
          </svg>
        </div>
      </div>
      <div className="btugap">
        <a href="#" className="themebtu">
          Tüm araçlarımızı görün
        </a>
      </div>
      <div className="tp-hero__shapes">
        <div className="style-shapes-1"></div>
        <div className="style-shapes-2">
          <img alt="shap-4" src="assets/img/shap-4.png" />
        </div>
        <div className="style-shapes-3"></div>
        <div className="style-shapes-4">
          <img alt="dots1" src="assets/img/dots1.png" />
        </div>
      </div>
    </div>
  </section>
  <section className="gap reaview-section">
    <div className="container">
      <div className="heading">
        <h6>Müşterilerimizin Geri Dönüşleri</h6>
        <h2>Şirketimize gelen geri dönüşleri görün</h2>
        <img alt="line" src="assets/img/headingline.png" />
      </div>
      <div className="swiper-container partnerswiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="reaview">
              <img alt="man" src="assets/img/meco-g.png" />
              <p>
                “Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetra a, ultricies in, diam.”
              </p>
              <div className="boder" />
              <span>
                Kalem Patel
                <br />
                Manager of Terio
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reaview">
              <img alt="man" src="assets/img/meco-g.png" />
              <p>
                “Praesent dapibus, neque id cursus faucibus, tortor neque
                egestas auguae, eu vulputate magna eros eu erat.”
              </p>
              <div className="boder" />
              <span>
                Bernard Castro
                <br />
                Owner of Love Digital
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reaview">
              <img alt="man" src="assets/img/meco-g.png" />
              <p>
                “Quisque a lectus. Donec consectetuer ligula vulputate sem
                tristique cursus. Nam nulla quam, gravida non, commodo a.”
              </p>
              <div className="boder" />
              <span>
                Lori Moses
                <br />
                Manager of Digitalagency
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reaview">
              <img alt="man" src="assets/img/meco-g.png" />
              <p>
                “Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
                consequat.”
              </p>
              <div className="boder" />
              <span>
                Kalem Patel
                <br />
                Manager of Terio
              </span>
            </div>
          </div>
        </div>
        <div className="swiper-button-next">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 476.213 476.213"
            style={{ enableBackground: "new 0 0 476.213 476.213" }}
            xmlSpace="preserve"
          >
            <polygon
              points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
            />
          </svg>
        </div>
        <div className="swiper-button-prev">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 476.213 476.213"
            style={{ enableBackground: "new 0 0 476.213 476.213" }}
            xmlSpace="preserve"
          >
            <polygon
              points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
            />
          </svg>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  <section
    className="gap no-bottom video-section"
    style={{ backgroundColor: "#f2edf5" }}
  >
    <div className="container">
      <div className="heading-boder two">
        <h2>
          Birlikte Daha Güzel <span>Yolculuklara</span>
        </h2>
        <p>Sizleri tekrar görmek dileğiyle.</p>
      </div>
      <div className="row">
        <div className="offset-xl-1 col-xl-10">
          <div className="video-img">
            <img
              className="w-100"
              alt="img"
              src="assets/img/youtube-kapak.png"
            />
            <a
              data-fancybox=""
              href="https://www.youtube.com/watch?v=1La4QzGeaaQ"
            >
              <i className="fa-solid fa-play" />
            </a>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-2">
            <img alt="shap-4" src="assets/img/shap-1.png" />
          </div>
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-3.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-3.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </div>
    </div>
    <div className="get-in-touch gap">
      <div className="container">
        <div className="row">
          <div className="offset-xl-1 col-xl-10">
            <div className="row">
              <div className="col-xl-6">
                <div className="heading">
                  <h6>Hızlı Randevu</h6>
                  <h2>
                    {" "}
                    Hemen randevu alabilir, yolculuğunuzun keyfini
                    çıkarabilirsiniz!
                  </h2>
                  <img alt="line" src="assets/img/headingline.png" />
                  <p>
                    Randevu oluşturduğunuz takdirde tarih ve diğer bilgiler için
                    ekiplerimiz sizinle iletişime geçecektir.
                  </p>
                </div>
              </div>
              <div className="col-xl-6">
                <form className="touch">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Tam İsminiz *"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="email"
                        placeholder="E-posta Adresiniz *"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Telefon Numaranız"
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        placeholder="Your message *"
                        defaultValue={""}
                      />
                    </div>
                    <div className="btugap">
                      <a href="#" className="themebtu full">
                        Randevu Oluşturun
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="footer-logo">
            <a href="index.html">
              <img
                alt="img"
                style={{ width: 150 }}
                src="assets/img/t2mlogo-white.png"
              />
            </a>
            <p>
              Transferlerinizi güvenli ve konforlu bir şekilde yapmak
              istiyorsanız, doğru yerdesiniz.
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="links">
            <h6>Yardımcı Linkler</h6>
            <ul>
              <li>
                <a href="about.html">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Servislerimiz</a>
              </li>
              <li>
                <a href="team.html">Araçlarımız</a>
              </li>
              <li>
                <a href="blog-grid.html">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="latest-news">
            <h6>Şirketimiz</h6>
            <ul>
              <li>
                <p>
                  Şirketimizin ana ofisi Türkiye / İstanbul'da bulunmaktadır..
                </p>
                <span>Taksim / İstanbul</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="latest-news">
            <h6>Bültenimiz</h6>
            <p>
              İndirimleri ve haberleri takip etmek için bültenimize kayıt
              olabilirsiniz.
            </p>
            <form>
              <input
                type="text"
                name="email"
                placeholder="your email address"
              />
              <button>go</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Tüm Hakları Saklıdır. Ahmet Haşim ERDOĞAN </p>
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-m" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <a id="button" />


  <Script src="assets/js/jquery-3.6.0.min.js"></Script>
      <Script src="assets/js/bootstrap.min.js"></Script>
      <Script src="assets/js/jquery.fancybox.min.js"></Script>
      <Script src="assets/js/swiper.js"></Script>
      <Script src="assets/js/custom.js"></Script>
</>

  )
}

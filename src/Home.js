import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/Hobby_store/Hero/Version2/1500x600._CB410085967_.png"
            alt="amazone prime banner"
          />

          <div className="home__row">
            <Product
              id="123456"
              title="This dress I want to buy for my Girlfriend 🥰 | 3D butterfly Dress"
              price={39999.99}
              rating={5}
              image="https://i.pinimg.com/564x/55/ff/61/55ff61a0543618527cfcda066dfcc6bf.jpg"
            />
            <Product
              id="126456"
              title="Pink Off The Shoulder Short Lace Homecoming Party Dress With Sleeves"
              price={11539.99}
              rating={5}
              image="https://cdn.sheprom.com/6909-thickbox_default/cute-pink-off-the-shoulder-short-lace-homecoming-party-dress-with-sleeves.jpg"
            />

            <Product
              id="1221216"
              title="
              HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop"
              price={89939.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="12345116"
              title="A-line High Neck Sparkly Homecoming Dress Burgundy Short Prom Dresses Homecoming Dresses AMY1689"
              price={11289.99}
              rating={4}
              image="https://cdn.shopify.com/s/files/1/1231/3996/products/AMY1689_fcbb067f-6849-4fb4-b788-ef2df7b35822_1024x1024.jpg?v=1571439917"
            />
            <Product
              id="1231212456"
              title="
              A-line Cap Sleeve Tulle Lace Short Evening Dresses 2020 New Elegant Party Dress Prom Gown EN04K"
              price={23261.99}
              rating={3}
              image="https://ae01.alicdn.com/kf/HTB1nmGxaZfrK1Rjy1Xdq6yemFXab/Hot-Sale-Many-Colors-A-line-Cap-Sleeve-Tulle-Lace-Short-Evening-Dresses-2020-New-Elegant.jpg"
            />
            <Product
              id="1234560101"
              title="
              Strappy Short Homecoming Dresses Lace Applique Red Short Prom Dress CR 2434"
              price={23239.99}
              rating={4}
              image="https://i.pinimg.com/originals/bd/2a/b5/bd2ab58acd13e90256ca12137ba3175d.png"
            />
          </div>

          <div className="home__row">
            <Product
              id="12334527628456"
              title="
              Sun Yellow Short Dress with Lace Flowers"
              price={30499.99}
              rating={5}
              image="https://f0df8a599b86cb36b702-f405028f68923ce6dd26f4281e4aeaec.ssl.cf2.rackcdn.com/product-hugerect-1262084-214177-1508724921-cd3acb729b2ae6ed4acdffd4cc197ad2.jpg"
            />

            <Product
              id="687892"
              title="
              Furny Brio Three Seater Sofa Cum Bed with Easy Clic-Clac Mechanism (Aqua Blue)"
              price={20499.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51lg5me7utL._SL1000_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

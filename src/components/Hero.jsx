const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
        <a href="#"><button className="hero-btn-shop">Shop Now</button></a>
        <a href="#"><button className="hero-btn-category">Category</button></a>
        </div>
        <div className="shopping-txt">
            <p>Also Available On</p>
        </div>
        <div className="shopping-icon">
            <img src="/images/amazon.png" alt="amazon" srcset="" />
            <img src="/images/flipkart.png" alt="flipkart" srcset="" />
        </div>
      </div>
      <div className="hero-image">
      <img src="/images/shoe_image.png" alt="shoe-image" srcset="" />
      </div>
    </main>
  );
};

export default HeroSection;

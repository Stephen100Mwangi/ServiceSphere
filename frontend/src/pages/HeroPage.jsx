import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CustomButton from "../components/CustomButton";
import ImageCard from "../components/ImageCard";
import Card from "../components/Card";
import { PiHandshakeLight } from "react-icons/pi";
import { FaBalanceScale } from "react-icons/fa";
import { IoSend, IoShieldCheckmark } from "react-icons/io5";
import { FaBriefcase, FaFacebook, FaInstagram, FaX } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";

const HeroPage = () => {
  return (
    <div className="h-fit w-full justify-center overflow-clip bg-back">
      <div id="heroPage" className="heroPage h-screen w-full relative">
        <Navbar></Navbar>
        <img
          src="./rectangle.svg"
          className="h-screen w-auto max-w-1/3 z-[900] absolute object-cover left-0 top-0 max-sm:hidden"
          alt=""
        />

        <div className="CTA relative z-[1000] w-1/3 max-sm:w-full h-screen justify-start items-start pt-10 max-sm:pt-32 flex space-y-8 flex-col p-6 max-sm:space-y-5">
          <div className="text-4xl font-semibold leading-tight max-w-64 max-sm:text-white">
            Bring Your <br /> Vision to Life
          </div>
          <div className="font-light text-[16px] leading-9 max-sm:text-white max-w-[90%]">
            Join a vibrant community where you can connect with clients,
            showcase your unique projects, and earn commissions for delivering
            exceptional services. Whether you&apos;re a freelancer, a startup, or a
            seasoned professional, our platform empowers you to turn your
            passion into profit.
          </div>
        
          <Button link={"https://www.dkut.ac.ke/"} text={"Learn More"}></Button>
        </div>

        <div className="absolute bottom-20 right-10 z-[1000] flex justify-center items-center space-x-5 max-sm:bottom-2 max-sm:right-4">
          <div className="members px-4 py-2 flex justify-center max-sm:w-auto flex-col items-center text-center space-y-4 bg-card text-white rounded-lg">
            <p className="text-lg font-medium max-sm:text-base max-sm:font-semibold">
              150+
            </p>
            <p className="font-light text-base max-sm:text-sm">Members</p>
          </div>
          <div className="members px-4 py-2 flex justify-center max-sm:w-auto flex-col items-center text-center space-y-4 bg-white text-card rounded-lg">
            <p className="text-lg font-medium max-sm:text-base max-sm:font-semibold">
              99%
            </p>
            <p className="font-light text-base max-sm:text-sm">
              Client Guarantee
            </p>
          </div>
          <div className="members px-4 py-2 flex justify-center max-sm:w-auto flex-col items-center text-center space-y-4 bg-blue text-white rounded-lg">
            <p className="text-lg font-medium max-sm:text-base max-sm:font-semibold">
              10+
            </p>
            <p className="font-light text-base max-sm:text-sm">Communities</p>
          </div>
        </div>

        <CustomButton
          link={"#productCards"}
          className="max-sm:bottom-96"
        ></CustomButton>
      </div>

      <div id="aboutUs" className="aboutUs h-screen p-8 flex flex-col space-y-28 bg-blue text-white max-sm:flex max-sm:flex-col max-sm:space-y-3 max-sm:px-5">
        <h1 className="text-3xl font-bold text-center">
          About <span>Us</span>
        </h1>
        <div className="flex justify-between w-full p-8 rounded-xl max-sm:flex-col max-sm:px-3 max-sm:space-y-5">
          <div className="w-1/2 flex justify-start flex-col space-y-5 max-sm:w-full">
            <h2 className="leading-tight text-2xl font-bold">Our Mission</h2>
            <p className="font-light text-[16px] leading-9">
              At ServiceSphere, our mission is to empower professionals to turn
              their ideas into reality by connecting them with clients,
              showcasing their projects, and earning commissions for their work.
              We believe in fostering creativity, collaboration, and innovation
              within our vibrant community.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center max-sm:w-full">
            <img src="./bullsEye.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>

      <div className="ourStory h-screen w-full p-8 px-12 bg-black bg-opacity-15 flex justify-between items-center max-sm:flex-col max-sm:space-y-6 max-sm:px-5">
        <img src="./story.svg" loading="lazy" alt="" />
        <div className="flex flex-col w-1/2 h-auto space-y-10 max-sm:w-full">
          <h1 className="text-2xl font-bold leading-relaxed">Our Story</h1>
          <p className="font-light text-[16px] leading-9">
            Founded in 2024,{" "}
            <span className="text-card font-normal">ServiceSphere</span> was
            born out of a desire to bridge the gap between talented individuals
            and the clients who need their expertise. Our founders, [Founder
            Names], recognized the need for a platform that not only showcases
            talent but also provides a reliable source of income through
            commission-based projects. Today, we are proud to support a growing
            community of 1000 users, helping them achieve their professional
            dreams
          </p>
        </div>
      </div>

      <div className="ourStory h-fit w-full p-8 px-12 bg-blue bg-opacity-15 flex justify-between items-center max-sm:flex-col max-sm:px-5">
        <div className="flex flex-col w-1/2 h-auto space-y-10 max-sm:w-full">
          <h1 className="text-2xl font-bold leading-relaxed">Our Team</h1>
          <p className="font-light text-[16px] leading-9">
            Meet the passionate team behind{" "}
            <span className="text-card font-normal">ServiceSphere</span>. Our
            dedicated professionals come from diverse backgrounds, united by a
            common goal: to create the best possible experience for our users.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center gap-x-3 max-sm:w-full max-sm:flex-wrap max-sm:space-y-5">
          <ImageCard
            position={"CEO & Founder"}
            name={"Stephen Mwangi"}
            image={"./image2.svg"}
          ></ImageCard>
          <ImageCard
            position={"Managing Director"}
            name={"John Doe"}
            image={"./image1.svg"}
          ></ImageCard>
        </div>
      </div>
      <div className="whyUs h-screen w-full flex flex-col space-y-8 p-10 bg-blue bg-opacity-15 text-black px-20 max-sm:px-5 max-sm:h-fit">
        <h1 className="font-bold text-3xl text-center">Why Us?</h1>
        <p className="text-xl font-medium text-center">
          Discover the Benefits of Partnering with Us
        </p>
        <p className="text-base font-light text-center leading-9">
          At <span className="text-green font-bold">ServiceSphere</span>, we understand the challenges of finding
          the right opportunities and clients. That&apos; why we&apos;ve created
          a platform designed to support your success at every step. Here&apos;s
          what makes us the best choice for you.
        </p>
        <div className="flex w-full justify-between items-center max-sm:justify-center max-sm:space-y-5 max-sm:flex-wrap">
          <Card
            title={"Reliable Clients Connections"}
            iconColor={"card"}
            text={
              "Connect with clients who value your expertise. Our platform matches you with quality clients looking for your specific skills, ensuring you find the right opportunities to grow your career."
            }
            icon={<PiHandshakeLight></PiHandshakeLight>}
          ></Card>
          <Card
            title={"Comprehensive Project Showcase"}
            iconColor={"blue"}
            text={
              "Create a detailed portfolio showcasing your skills and past projects. Our platform provides the tools you need to highlight your best work and attract potential clients."
            }
            icon={<FaBriefcase></FaBriefcase>}
          ></Card>
          <Card
            iconColor={"green"}
            title={"Secure Transactions"}
            text={
              "With secure payment systems and reliable transaction processes, you can trust that your earnings are protected. Focus on your work while we handle the financial aspects securely."
            }
            icon={<IoShieldCheckmark></IoShieldCheckmark>}
          ></Card>
          <Card
            title={"Fair Commission Structure"}
            text={
              "Our commission structure is designed to be fair and transparent, ensuring you earn what you deserve. We value your hard work and strive to provide the best financial rewards for your efforts."
            }
            icon={<FaBalanceScale></FaBalanceScale>}
          ></Card>
        </div>
      </div>
      <div id="productCards" className="flex w-full items-center p-24 px-8 justify-evenly bg-blue bg-opacity-15 max-sm:flex-wrap max-sm:space-y-10 max-sm:px-5">
        <ProductCard
          title="Basic Plan"
          price="$45"
          textColor={"black"}
          bgColor={"back"}
          benefits={[
            "80% commission of earnings made.",
            "20% of earnings go to the community",
            "1000+ connections monthly",
            "10 projects per week",
            "200 Monthly interactions",
          ]}
          text="Kick start your interaction with ELP_Linker with"
        />
        <ProductCard
          title="Advanced Plan"
          price="$75"
          textColor={"white"}
          bgColor={"blue"}
          benefits={[
            "90% commission of earnings made.",
            "10% of earnings go to the community",
            "2000+ connections monthly",
            "20 projects per week",
            "500 Monthly interactions",
          ]}
          text="Enjoy our Advanced Plan with cool features"
        />
        <ProductCard
          title="Pro Plan"
          price="$99"
          textColor={"white"}
          bgColor={"card"}
          benefits={[
            "95% commission of earnings made.",
            "5% of earnings go to the community",
            "Unlimited connections",
            "Unlimited projects",
            "1000+ Monthly interactions",
          ]}
          text="Unlock the ultimate plan with exclusive features"
        />
      </div>

      <div id="footer" className="flex bg-card text-white flex-col space-y-20 w-full px-20 p-10 max-sm:px-5">
        <div className="flex justify-evenly max-sm:flex-col max-sm:space-y-20 max-sm:justify-center max-sm:items-center">
            <div className="left flex flex-col space-y-5">
                <p>Home</p>
                <p>About</p>
                <p>Community</p>
                <p>Why Us</p>
            </div>
            <div className="left flex flex-col space-y-5 max-sm:flex-row max-sm:space-x-20 max-sm:space-y-0">
                <FaFacebook></FaFacebook>
                <FaX></FaX>
                <FaInstagram></FaInstagram>
            </div>
            <div className="left flex flex-col space-y-5">
                <a href="tel:+254758725032">0758725032</a>
                <a href="mailto:mwangiwahome70@gmail.com">Email Us</a>

                <div className="flex rounded-full text-black justify-between w-[280px] items-center p-3 px-8 bg-white">
                    <input type="text" className="outline-none border-none text-sm" name="" id="" placeholder="Subscribe to our Newsletter"/>
                    <IoSend></IoSend>
                </div>
            </div>
        </div>
        <div className="copy text-center">Copyright All Rights Reserved 2024 </div>
      </div>
    </div>
  );
};

export default HeroPage;

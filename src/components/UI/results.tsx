"use client";
import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "progressbar.js";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const Results = ({ response }) => {
  const containerRef = useRef(null);
  const [prediction, setPrediction] = useState(0.25);
  const [borderColor, setBorderColor] = useState("");
  const [textData, setTextData] = useState("");
  const [textParagraph, setTextParagraph] = useState("");
  useEffect(() => {
    if (response === 0) {
      setPrediction(0.25);
      setBorderColor("#E1015B");
      setTextData("Very Low");
      setTextParagraph(
        "The current prediction indicates a lower-than-expected wheat yield, but there are several steps you can take to improve cultivation. Start by testing your soil to identify any nutrient deficiencies and enhance its fertility by adding organic matter or compost. Ensure proper soil aeration through timely tilling. Optimize your water management by providing consistent and moderate moisture, avoiding over- or under-irrigation, and considering efficient systems like drip or sprinkler irrigation. Choosing high-quality, drought-resistant, or disease-resistant wheat varieties suitable for your region can also make a significant difference. Additionally, apply balanced fertilizers based on soil test recommendations and ensure seeds are treated before planting to prevent pests and diseases. By addressing these key factors, you can work towards achieving better wheat yields."
      );
    } else if (response === 1) {
      setPrediction(0.5);
      setBorderColor("#F76120");
      setTextData("Low");
      setTextParagraph(
        "The current prediction shows that wheat yield may be significantly low. To address this, begin by evaluating soil health through testing, identifying deficiencies, and improving fertility with organic matter or compost. Effective water management is crucial—ensure consistent irrigation, avoid waterlogging, and consider adopting water-efficient methods like drip irrigation. Opt for high-quality seeds that are drought-resistant or well-suited to your local climate, and treat them before planting to safeguard against pests and diseases. Additionally, use balanced fertilizers based on soil test results to ensure proper nutrient availability. Regular monitoring of crop health and timely pest control measures are also essential. By focusing on these practices, you can mitigate potential losses and improve your wheat cultivation."
      );
    } else if (response === 2) {
      setPrediction(0.75);
      setBorderColor("#A6E892");
      setTextData("Medium");
      setTextParagraph(
        "The prediction indicates a medium wheat yield, but there is potential to enhance productivity further. Start by ensuring optimal soil health through regular testing and the addition of organic matter or fertilizers based on soil nutrient needs. Maintain efficient water management by providing adequate irrigation, particularly during critical growth stages like tillering and grain filling, while avoiding overwatering. Use certified seeds suited to your region, focusing on varieties known for higher yields and resilience. Balanced fertilizer application, based on soil test results, can help maximize nutrient efficiency. Additionally, monitor your crops for pests and diseases, implementing timely and appropriate control measures. With these steps, you can improve your yield and work toward maximizing your crop's potential."
      );
    } else if (response === 3) {
      setPrediction(1);
      setBorderColor("#63B193");
      setTextData("High");
      setTextParagraph(
        "The prediction indicates a high wheat yield, reflecting strong cultivation practices and favorable conditions. To maintain and potentially enhance this success, continue prioritizing soil health through regular testing and balanced fertilizer application to ensure optimal nutrient availability. Maintain consistent irrigation, especially during critical growth stages, and consider adopting advanced irrigation techniques like drip or sprinkler systems for efficiency. Use high-quality seeds and practice crop rotation to sustain soil fertility and reduce disease risks. Regular monitoring for pests and diseases remains essential to protect the crop. By maintaining these practices and exploring innovative farming techniques, you can ensure sustained high yields and long-term productivity"
      );
    }
    if (containerRef.current) {
      const bar = new ProgressBar.Circle(containerRef.current, {
        strokeWidth: 6,
        easing: "easeInOut",
        duration: 1400,
        color: borderColor,
        trailColor: "#eee",
        trailWidth: 2,
        svgStyle: null,
      });
      bar.animate(prediction);

      return () => {
        bar.destroy();
      };
    }
  }, [response, prediction]);

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div ref={containerRef} className="w-[300px] h-[300px] m-5"></div>
        <h6
          className={`absolute w-[250px] text-[2.2rem] font-[500] ${montserrat.className}`}
          style={{ color: borderColor }}
        >
          {textData}
        </h6>
      </div>
      <h4
        className={`text-[1.2rem]  px-10 text-center font-[500] ${montserrat.className}`}
      >
        Our wheat Prediction system shows the cultivation of wheat in this
        region in future will be{" "}
        <span style={{ color: borderColor }}> {textData}</span>
      </h4>
      <p className="text-md mt-5 text-[#3b3f44] px-10">{textParagraph}</p>
    </>
  );
};

export default Results;

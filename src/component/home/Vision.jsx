import mission from "../../assets/mission.png";
import { FaEye, FaRocket, FaStar } from "react-icons/fa";
export default function Vision() {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-10 w-full  min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          چشم‌انداز، مأموریت و ارزش‌های ما
        </h1>
     
      </div>
      <section
        className="
          
          w-full
          min-h-screen
          py-20
          px-4
          rounded-xl
          bg-center
          bg-cover
          bg-no-repeat
      
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
        // style={{
        //   backgroundImage: `url(${mission})`,
        // }}
      >

        {/* Card 1 */}
        <div className="
          
          w-full
          h-[45px]
          max-w-[400px]
          mx-auto
          min-h-[320px]
          p-6
          text-purple-700
          rounded-2xl
          border border-white/10
          backdrop-blur-md
        bg-white/10
        border-white/20
        transition-all duration-300
        hover-bg-with-gradient-to-r hover-from-purple-500 hover-to-pink-500
        hover:border-transparent
        hover:shadow-lg
        hover:shadow-purple-500/50
        ">
          <FaEye className="text-4xl  mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-center mb-4">
            چشم‌انداز
          </h1>

          <p className="text-center leading-8 text-sm sm:text-base">
            تبدیل افغانستان به یکی از مراکز فعال علمی و فضایی منطقه
            با ایجاد آزمایشگاه‌های پیشرفته، توسعه فناوری فضایی،
            همکاری‌های بین‌المللی و حرکت به‌سوی ساخت و پرتاب
            ماهواره‌های داخلی
          </p>
        </div>

        {/* Card 2 */}
        <div className="
          text-center
          w-full
          h-[40px]
          max-w-[400px]
          mx-auto
          min-h-[320px]
          p-6
          text-purple-700
          rounded-2xl
          border border-white/10
          backdrop-blur-sm
          bg-white-10
          transition-all duration-300
          hover-bg-with-gradient-to-r hover-from-purple-500 hover-to-pink-500
          hover:border-transparent
          hover:shadow-lg
          hover:shadow-purple-500/50
        ">
          <FaRocket className="text-4xl mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-center mb-2">
            مأموریت ما
          </h1>

          <p className="text-center leading-8 text-sm sm:text-base">
            ترویج علم نجوم و علوم فضایی در افغانستان از طریق آموزش،
            برنامه‌های رصدی، فعالیت‌های علمی و پرورش نسل نو
            پژوهشگران و ستاره‌شناسان جوان
          </p>
        </div>

        {/* Card 3 */}
        <div className="
          text-center
          w-full
          h-[40px]
          max-w-[400px]
          mx-auto
          min-h-[320px]
          p-6
        text-purple-700
          rounded-2xl
          border border-white/10
          backdrop-blur-sm
          bg-white-10
          transition-all duration-300 
          hover-bg-with-gradient-to hover-from-purple-500 hover-to-pink-500
          hover:border-transparent
          hover:shadow-lg
          hover:shadow-purple-500/50
        ">
          <FaStar className="text-4xl mb-4 mx-auto color-blue-500" />
          <h1 className="text-2xl font-bold text-center mb-4">
            ارزش‌های ما
          </h1>

          <p className="text-center leading-8 text-sm sm:text-base">
            توسعه علم، نوآوری، همکاری، پژوهش و ایجاد فرصت برای
            نسل جوان تا افغانستان در حوزه فناوری و علوم فضایی
            رشد کند
          </p>
        </div>

      </section>
    </div>
  );
}
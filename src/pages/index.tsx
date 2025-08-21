import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย นาย กฤษณปกรณ์ เมรัตน์
          </p>

          <div>
            <img src={"https://i.ytimg.com/vi/RtDm2Rx7NMY/mqdefault.jpg"} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-right mt-8">
          ปัจจุบันค่าเฟ่ และห้องสมุดของเรา อยู่ในช่วงการดูแลของ ....
          {/* TODO: ชื่อของตนเอง, รหัสประจำตัวนักศึกษา และแนะนำคาเฟ่นี้ต่ออีกสักหน่อย + ใส่รูปของตนเอง (ไม่จำเป็นหากไม่สะดวกใจใส่รูป) */}
          นาย กฤษณปกรณ์ เมรัตน์
          รหัสประจำตัวนักศึกษา: 66070006
          คาเฟ่แห่งนี้ไม่ใช่แค่ร้านกาแฟธรรมดา แต่เป็นพื้นที่สำหรับคนรักการเรียนรู้และเทคโนโลยี ที่นี่คุณจะได้ลิ้มรสกาแฟคุณภาพ พร้อมกับเพลิดเพลินกับหนังสือและบรรยากาศที่อบอุ่น เหมาะสำหรับการพักผ่อน อ่านหนังสือ หรือแลกเปลี่ยนความรู้ด้าน IoT กับเพื่อน ๆ
ไม่ว่าคุณจะเป็นสายกาแฟ สายอ่าน หรือสายเทคโนโลยี ที่นี่คือจุดหมายปลายทางที่ตอบโจทย์ทุกความต้องการของคุณ
        </p>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}

import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full  md:max-w-[450px]' src={assets.about_img} alt='' />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Forever ra đời từ niềm đam mê đổi mới và mong muốn cách mạng hóa cách mọi người mua sắm trực tuyến. Hành trình của chúng tôi bắt đầu với một ý tưởng đơn giản: cung cấp một nền tảng nơi khách hàng có thể dễ dàng khám phá, tìm hiểu và mua sắm đa dạng sản phẩm ngay tại nhà.</p>
                    <p>Kể từ khi thành lập, chúng tôi đã không ngừng nỗ lực để lựa chọn đa dạng các sản phẩm chất lượng cao, đáp ứng mọi sở thích và thị hiếu. Từ thời trang, làm đẹp đến đồ điện tử và đồ gia dụng thiết yếu, chúng tôi cung cấp một bộ sưu tập phong phú được lấy nguồn từ các thương hiệu và nhà cung cấp uy tín.</p>
                    <b className='text-gray-800'>Sứ mệnh của chúng tôi</b>
                    <p>Sứ mệnh của chúng tôi tại Forever là mang đến cho khách hàng sự lựa chọn, tiện lợi và tự tin. Chúng tôi cam kết mang đến trải nghiệm mua sắm liền mạch, vượt xa mong đợi, từ khâu tìm kiếm, đặt hàng đến giao hàng và hơn thế nữa.</p>
                </div>
            </div>

            <div className='text-4xl py-4'>
                <Title text1={'WHY '} text2={'Chose us'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p>Chúng tôi lựa chọn và kiểm tra kỹ lưỡng từng sản phẩm để đảm bảo đáp ứng các tiêu chuẩn nghiêm ngặt của chúng tôi</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p>Với giao diện thân thiện với người dùng và quy trình đặt hàng dễ dàng, mua sắm </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Dịch vụ khách hàng đặc biệt</b>
                    <p>Đội ngũ chuyên gia tận tâm của chúng tôi luôn sẵn sàng hỗ trợ bạn, đảm bảo sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi.</p>
                </div>
            </div>
            <NewsletterBox />

        </div>
    )
}

export default About
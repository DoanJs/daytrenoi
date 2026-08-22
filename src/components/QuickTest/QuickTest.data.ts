import { QuickTestData } from "./QuickTest.types";

export const quickTestData: QuickTestData = {
  "eyebrow": "Miễn phí · không cần để lại thông tin",
  "title": "Bốn bài test nhanh cho cha mẹ",
  "description": "Bộ câu hỏi rút ra từ chính bộ bảng kiểm chúng tôi dùng trong phòng khám. Anh/chị chỉ mất hai phút và thấy kết quả ngay — không phải điền số điện thoại mới được xem.",
  "tests": {
    "tu-ky": {
      "id": "tu-ky",
      "icon": "&#129504;",
      "title": "Con có dấu hiệu tự kỷ không?",
      "sub": "12 câu · khoảng 2 phút · cho trẻ 12–48 tháng",
      "intro": "Bộ câu hỏi rút từ bảng kiểm giao tiếp không lời và bảng kiểm kỹ năng chơi mà chúng tôi dùng trong phòng khám. Bạn trả lời theo những gì thật sự thấy ở con trong hai tuần gần đây.",
      "pos0": true,
      "labMiss": "Những điều con chưa làm được hoặc hiếm khi làm",
      "labHas": "Những biểu hiện đang có ở con",
      "scale": [
        {
          "label": "Thường xuyên",
          "score": 0
        },
        {
          "label": "Thỉnh thoảng",
          "score": 1
        },
        {
          "label": "Hiếm khi hoặc chưa bao giờ",
          "score": 2
        }
      ],
      "bands": [
        {
          "min": 0,
          "max": 5,
          "level": "thap",
          "title": "Chưa thấy dấu hiệu đáng lo",
          "description": "Những kỹ năng giao tiếp xã hội nền tảng của con đang có mặt. Bạn cứ tiếp tục chơi và trò chuyện với con nhiều như đang làm, và theo dõi lại sau 3–6 tháng."
        },
        {
          "min": 6,
          "max": 12,
          "level": "vua",
          "title": "Có một vài dấu hiệu nên theo dõi",
          "description": "Một số kỹ năng giao tiếp xã hội của con chưa vững. Điều này chưa có nghĩa là con tự kỷ — nhưng đáng để được một chuyên viên quan sát trong 1–2 tháng tới, thay vì chờ xem."
        },
        {
          "min": 13,
          "max": 24,
          "level": "cao",
          "title": "Nên cho con đi lượng giá sớm",
          "description": "Nhiều dấu hiệu cùng xuất hiện ở nhóm kỹ năng giao tiếp xã hội — đây là nhóm quan trọng nhất trong sàng lọc tự kỷ. Bạn nên đặt lịch lượng giá trong thời gian gần nhất. Phát hiện sớm vài tháng ở tuổi này tạo khác biệt rất lớn."
        }
      ],
      "actions": {
        "thap": [
          "Giữ thói quen chơi mặt đối mặt với con 10&ndash;15 phút mỗi ngày, ngồi ngang tầm mắt con.",
          "Gọi tên con rồi <b>chờ ba giây</b> trước khi gọi lần hai &mdash; đừng gọi dồn.",
          "Ghi lại vài mốc con vừa đạt được, để ba đến sáu tháng nữa có cái đối chiếu."
        ],
        "vua": [
          "Mỗi ngày 10&ndash;15 phút chơi một&ndash;một, tắt tivi và điện thoại, ngồi <b>đối diện</b> chứ không ngồi cạnh.",
          "<b>Bắt chước lại chính con</b>: con gõ thì bạn gõ, con kêu thì bạn kêu. Đây là cách nhanh nhất khiến trẻ bắt đầu chú ý đến người khác.",
          "Giữ món đồ con muốn <b>cạnh mặt bạn</b> trước khi đưa, để con nhìn bạn một cách tự nhiên &mdash; không giữ cằm con để ép nhìn.",
          "Nếu con chưa từng đo thính lực, nên đo trước &mdash; đây là việc cần loại trừ đầu tiên.",
          "Hai tuần nữa xem lại: con có nhìn mắt và đáp lại nhiều hơn không?"
        ],
        "cao": [
          "Đặt lịch lượng giá trong thời gian gần nhất. Nhóm này không nên chờ thêm.",
          "Đo thính lực trước nếu chưa từng đo.",
          "Trong lúc chờ: chơi một&ndash;một ngang tầm mắt, bắt chước lại chính con.",
          "<b>Đừng ép con nhìn mắt</b> bằng cách giữ mặt hay giữ cằm &mdash; việc đó thường làm trẻ né nhiều hơn.",
          "Ghi ra danh sách những cử chỉ và từ con đang có, mang theo khi đi khám. Nó tiết kiệm cho bạn cả một buổi hỏi bệnh."
        ]
      },
      "items": [
        {
          "text": "Con quay đầu lại khi bạn gọi tên, kể cả lúc con đang mải chơi.",
          "reverseScore": false
        },
        {
          "text": "Con nhìn vào mắt bạn khi hai mẹ con nói chuyện hoặc chơi cùng nhau.",
          "reverseScore": false
        },
        {
          "text": "Con chỉ tay vào món đồ con muốn lấy.",
          "reverseScore": false
        },
        {
          "text": "Con chỉ tay để khoe với bạn một thứ thú vị — không phải để xin.",
          "reverseScore": false
        },
        {
          "text": "Con nhìn qua lại giữa món đồ và mặt bạn, như muốn chia sẻ.",
          "reverseScore": false
        },
        {
          "text": "Con mỉm cười đáp lại khi bạn cười với con.",
          "reverseScore": false
        },
        {
          "text": "Con bắt chước hành động của bạn: vỗ tay, vẫy tay, làm mặt hề.",
          "reverseScore": false
        },
        {
          "text": "Con đưa đồ vật cho bạn để nhờ giúp khi con không tự làm được.",
          "reverseScore": false
        },
        {
          "text": "Con chơi giả vờ: cho búp bê ăn, giả vờ nghe điện thoại, giả vờ nấu ăn.",
          "reverseScore": false
        },
        {
          "text": "Con luân phiên được với bạn ít nhất hai lượt trong một trò chơi.",
          "reverseScore": false
        },
        {
          "text": "Con chơi lặp đi lặp lại một kiểu — xoay bánh xe, xếp hàng đồ chơi — và rất khó dứt ra.",
          "reverseScore": true
        },
        {
          "text": "Con đã từng nói được vài từ rồi sau đó ít dần hoặc mất hẳn.",
          "reverseScore": true
        }
      ]
    },
    "cham-noi": {
      "id": "cham-noi",
      "icon": "&#128172;",
      "title": "Con có chậm nói không?",
      "sub": "6 câu · khoảng 1 phút · câu hỏi thay đổi theo tuổi của con",
      "intro": "Chậm nói chỉ có nghĩa khi đặt cạnh tuổi. Bạn chọn nhóm tuổi của con trước, chúng tôi hỏi đúng những mốc mà trẻ ở tuổi đó thường đã làm được.",
      "pos0": true,
      "labMiss": "Những mốc của tuổi này con chưa đạt",
      "labHas": "Những biểu hiện đang có ở con",
      "scale": [
        {
          "label": "Con làm được rồi",
          "score": 0
        },
        {
          "label": "Con làm được nhưng chưa chắc",
          "score": 1
        },
        {
          "label": "Con chưa làm được",
          "score": 2
        }
      ],
      "bands": [
        {
          "min": 0,
          "max": 2,
          "level": "thap",
          "title": "Con đang đi đúng mốc tuổi",
          "description": "Những mốc quan trọng của nhóm tuổi này con đã có. Bạn tiếp tục nói chuyện nhiều với con và kiểm tra lại sau vài tháng."
        },
        {
          "min": 3,
          "max": 6,
          "level": "vua",
          "title": "Con đang chậm hơn mốc một chút",
          "description": "Có vài mốc con chưa đạt. Ở giai đoạn này, một buổi lượng giá ngôn ngữ sẽ nói rõ con đang thiếu ở phần hiểu hay phần diễn đạt — hai thứ này cần cách dạy khác nhau."
        },
        {
          "min": 7,
          "max": 12,
          "level": "cao",
          "title": "Con chậm rõ so với tuổi",
          "description": "Con chưa đạt nhiều mốc của nhóm tuổi mình. Đừng chờ thêm để xem con có tự bắt kịp không — hãy cho con lượng giá để biết chính xác con đang ở đâu và cần bắt đầu từ đâu."
        }
      ],
      "actions": {
        "thap": [
          "Đọc sách cùng con mỗi tối, kể cả khi con chưa nói &mdash; chỉ tranh và gọi tên là đủ.",
          "Con nói một từ thì bạn <b>nói lại thành hai</b>: con nói &ldquo;xe&rdquo;, bạn nói &ldquo;xe đỏ&rdquo;.",
          "Kiểm tra lại bài test này sau ba tháng."
        ],
        "vua": [
          "<b>Chờ đủ năm giây</b> sau khi đưa đồ chơi ra, trước khi bạn nói gì. Khoảng lặng đó là chỗ trống để con lên tiếng.",
          "<b>Đừng hỏi &mdash; hãy gọi tên</b>: thay &ldquo;con muốn gì?&rdquo; bằng &ldquo;nước&rdquo;, &ldquo;mở ra&rdquo;, &ldquo;hết rồi&rdquo;.",
          "<b>Tạo lý do để con phải nói</b>: để hộp bánh trong tầm nhìn nhưng ngoài tầm với, đưa từng miếng nhỏ thay vì cả gói.",
          "Ghi <b>nhật ký từ mới</b> mỗi tuần. Số từ tăng hay đứng yên quan trọng hơn con đang có bao nhiêu từ.",
          "Nếu sau bốn tuần vốn từ vẫn đứng yên, nên đi lượng giá."
        ],
        "cao": [
          "Đặt lịch lượng giá ngôn ngữ &mdash; cần biết con thiếu ở phần <b>hiểu</b> hay phần <b>diễn đạt</b>, vì hai thứ này dạy khác nhau.",
          "Đo thính lực nếu chưa từng đo.",
          "Viết ra <b>toàn bộ những từ con đang nói được</b> và mang theo khi đi khám.",
          "Trong lúc chờ: chờ đủ năm giây, gọi tên đồ vật thay vì đặt câu hỏi, và đáp lại mọi cử chỉ của con rồi nói hộ thành lời.",
          "Nhận cử chỉ của con là giao tiếp &mdash; dùng nhiều cử chỉ <b>không</b> làm chậm lời nói, thường là ngược lại."
        ]
      },
      "ageGroups": [
        {
          "id": "12-17",
          "label": "12 – 17 tháng",
          "items": [
            "Con bập bẹ thành chuỗi có nhịp điệu: ba-ba, ma-ma, da-da.",
            "Con nói được ít nhất 1–3 từ có nghĩa dùng đúng lúc (mẹ, ba, măm).",
            "Con quay lại khi nghe gọi tên mình.",
            "Con chỉ tay vào thứ con muốn.",
            "Con làm theo được một yêu cầu đơn giản khi có kèm cử chỉ (đưa mẹ nào).",
            "Con bắt chước được âm hoặc hành động bạn vừa làm."
          ]
        },
        {
          "id": "18-23",
          "label": "18 – 23 tháng",
          "items": [
            "Con nói được từ 10 đến 20 từ khác nhau.",
            "Con chỉ đúng được 2–3 bộ phận cơ thể khi bạn hỏi.",
            "Con làm theo mệnh lệnh đơn mà không cần bạn chỉ tay (lấy bóng đi).",
            "Con bắt chước từ mới bạn vừa nói.",
            "Con biết lắc đầu từ chối và gật đầu đồng ý.",
            "Con dùng lời để xin, chứ không chỉ kéo tay hoặc khóc."
          ]
        },
        {
          "id": "24-35",
          "label": "24 – 35 tháng",
          "items": [
            "Con ghép được hai từ với nhau (mẹ bế, uống nước).",
            "Con nói được ít nhất 50 từ khác nhau.",
            "Người trong nhà hiểu được khoảng một nửa những gì con nói.",
            "Con làm theo được mệnh lệnh hai bước (lấy bóng rồi đưa cho ba).",
            "Con gọi tên được những đồ vật quen thuộc trong nhà.",
            "Con biết hỏi hoặc đòi bằng lời khi muốn thứ gì."
          ]
        },
        {
          "id": "36-47",
          "label": "36 – 47 tháng",
          "items": [
            "Con nói được câu 3–4 từ.",
            "Người lạ hiểu được phần lớn lời con nói.",
            "Con kể lại được việc vừa xảy ra, dù còn lộn xộn.",
            "Con trả lời được câu hỏi ai, ở đâu, làm gì.",
            "Con dùng được từ chỉ vị trí: trong, trên, dưới.",
            "Con giữ được một cuộc trò chuyện qua lại vài lượt."
          ]
        },
        {
          "id": "48+",
          "label": "48 tháng trở lên",
          "items": [
            "Con kể được một câu chuyện ngắn có đầu có cuối.",
            "Người lạ hiểu gần như toàn bộ lời con nói.",
            "Con trả lời được câu hỏi vì sao, thế nào.",
            "Con dùng được câu ghép có từ nối (vì, nhưng, rồi).",
            "Con hiểu và dùng được từ khái niệm: nhiều – ít, trước – sau.",
            "Con kể lại được chuyện ở lớp cho bạn nghe."
          ]
        }
      ]
    },
    "giac-quan": {
      "id": "giac-quan",
      "icon": "&#9995;",
      "title": "Con có khó khăn về giác quan không?",
      "sub": "18 câu · khoảng 2 phút · sáu hệ giác quan",
      "intro": "Rút gọn từ Bảng kiểm sàng lọc rối loạn xử lý cảm giác trong sách <b>Lên tiếng</b>. Bạn tick vào những biểu hiện con thường có trong sinh hoạt hằng ngày.",
      "pos0": false,
      "labMiss": "Những điều con chưa làm được",
      "labHas": "Những biểu hiện đang xuất hiện ở con",
      "scale": [
        {
          "label": "Không",
          "score": 0
        },
        {
          "label": "Thỉnh thoảng",
          "score": 1
        },
        {
          "label": "Thường xuyên",
          "score": 2
        }
      ],
      "bands": [
        {
          "min": 0,
          "max": 8,
          "level": "thap",
          "title": "Chưa thấy dấu hiệu rối loạn xử lý cảm giác",
          "description": "Những phản ứng giác quan của con nằm trong khoảng bình thường. Nếu con vẫn khó khăn về hành vi hoặc lời nói, nguyên nhân có thể nằm ở chỗ khác."
        },
        {
          "min": 9,
          "max": 20,
          "level": "vua",
          "title": "Con có một số vùng giác quan cần hỗ trợ",
          "description": "Một hoặc hai hệ giác quan của con đang phản ứng lệch khỏi mức thông thường. Điều này ảnh hưởng trực tiếp đến việc con có ngồi yên học được không, có chịu ăn không, có sẵn sàng cho lời nói không."
        },
        {
          "min": 21,
          "max": 36,
          "level": "cao",
          "title": "Nhiều hệ giác quan đang bị ảnh hưởng",
          "description": "Con có dấu hiệu rối loạn xử lý cảm giác ở nhiều hệ cùng lúc. Đây thường là thứ chặn đường trước cả lời nói — nên được sàng lọc chuyên sâu và có thể cần phối hợp với hoạt động trị liệu."
        }
      ],
      "actions": {
        "thap": [
          "Cho con vận động mạnh mỗi ngày: leo trèo, đu, nhảy &mdash; đây là thức ăn cho hệ giác quan.",
          "Cho con chơi với nhiều chất liệu khác nhau: cát, nước, bột, đất nặn."
        ],
        "vua": [
          "Ghi <b>nhật ký một tuần</b>: con quá tải vào lúc nào, ở đâu, sau việc gì. Một tuần là đủ để thấy quy luật.",
          "<b>Vận động nặng trước</b> hoạt động cần ngồi yên: bò, đẩy, mang vác nhẹ khoảng 10 phút trước giờ ăn hoặc giờ học.",
          "Giảm kích thích trước giờ ăn và giờ ngủ: bớt tiếng ồn, bớt ánh sáng mạnh, bớt người.",
          "<b>Không ép</b> con chạm, ăn hay mặc thứ con né. Ép làm phản ứng né mạnh thêm.",
          "Cho con lựa chọn giữa hai thứ thay vì bắt buộc một thứ."
        ],
        "cao": [
          "Đặt lịch lượng giá &mdash; giác quan đang ảnh hưởng đến sinh hoạt và nhiều khả năng đang chặn cả đường đến lời nói.",
          "<b>Tuyệt đối không ép</b> ăn, không ép chạm, không giữ con lại trong tình huống con đang quá tải.",
          "Duy trì vận động nặng đều đặn trong ngày, chia thành nhiều lần ngắn.",
          "Báo cô giáo ở lớp để môi trường ở trường cũng được điều chỉnh.",
          "Ghi nhật ký một tuần và mang theo khi đi khám."
        ]
      },
      "note": "Bảng kiểm này <b>không phải là công cụ chẩn đoán</b>. Nếu bạn nghi ngờ con có vấn đề về xử lý cảm giác, hãy tham khảo ý kiến chuyên gia.",
      "groups": [
        {
          "name": "Xúc giác",
          "items": [
            {
              "text": "Con không chịu để tay bẩn, đòi lau rửa ngay.",
              "reverseScore": false
            },
            {
              "text": "Con chống cự dữ khi cắt tóc, cắt móng, đánh răng hoặc rửa mặt.",
              "reverseScore": false
            },
            {
              "text": "Con khó chịu với nhãn mác, đường may quần áo, hoặc chỉ chịu mặc vài bộ quen.",
              "reverseScore": false
            }
          ]
        },
        {
          "name": "Tiền đình — thăng bằng",
          "items": [
            {
              "text": "Con thích xoay tròn, đung đưa rất lâu mà không chóng mặt.",
              "reverseScore": false
            },
            {
              "text": "Con sợ chân rời mặt đất: né cầu trượt, xích đu, cầu thang, chỗ cao.",
              "reverseScore": false
            },
            {
              "text": "Con không ngồi yên được, luôn nhấp nhổm hoặc chạy nhảy.",
              "reverseScore": false
            }
          ]
        },
        {
          "name": "Cảm giác bản thể",
          "items": [
            {
              "text": "Con thích được ôm thật chặt, quấn chặt, hoặc chui vào chỗ hẹp.",
              "reverseScore": false
            },
            {
              "text": "Con hay va vào đồ vật, vấp ngã, làm rơi đồ, trông vụng về.",
              "reverseScore": false
            },
            {
              "text": "Con đập mạnh đồ chơi, giậm chân, nhảy từ trên cao xuống.",
              "reverseScore": false
            }
          ]
        },
        {
          "name": "Thính giác",
          "items": [
            {
              "text": "Con bịt tai hoặc bỏ chạy khi có tiếng ồn lớn hay bất ngờ.",
              "reverseScore": false
            },
            {
              "text": "Con không phản ứng khi được gọi, dù tai con nghe bình thường.",
              "reverseScore": false
            },
            {
              "text": "Con tự tạo tiếng ồn liên tục hoặc thích âm thanh lặp đi lặp lại.",
              "reverseScore": false
            }
          ]
        },
        {
          "name": "Thị giác",
          "items": [
            {
              "text": "Con nhìn chằm chằm hoặc liếc nghiêng để ngắm đồ vật.",
              "reverseScore": false
            },
            {
              "text": "Con né giao tiếp bằng mắt.",
              "reverseScore": false
            },
            {
              "text": "Con dễ bị phân tâm bởi ánh sáng, chuyển động, đồ trang trí trong phòng.",
              "reverseScore": false
            }
          ]
        },
        {
          "name": "Vị giác và khứu giác",
          "items": [
            {
              "text": "Con kén ăn nặng, chỉ ăn vài món hoặc từ chối thử món mới.",
              "reverseScore": false
            },
            {
              "text": "Con ngửi đồ vật, ngửi thức ăn trước khi ăn.",
              "reverseScore": false
            },
            {
              "text": "Con vẫn hay cho đồ vật vào miệng nhai, mút sau 2 tuổi.",
              "reverseScore": false
            }
          ]
        }
      ]
    },
    "phat-am": {
      "id": "phat-am",
      "icon": "&#128069;",
      "title": "Con có khó khăn về phát âm không?",
      "sub": "12 câu · khoảng 2 phút · đối chiếu tuổi lĩnh hội âm tiếng Việt",
      "intro": "Các mốc âm dưới đây lấy từ <b>Bảng tuổi lĩnh hội âm vị tiếng Việt</b> mà chúng tôi dùng khi lượng giá. Một âm chỉ được coi là lỗi khi con đã quá tuổi lẽ ra phải nói được nó.",
      "pos0": true,
      "labMiss": "Những âm và kỹ năng lời nói con chưa làm được",
      "labHas": "Những biểu hiện đang có ở con",
      "scale": [
        {
          "label": "Đúng",
          "score": 0
        },
        {
          "label": "Chưa chắc",
          "score": 1
        },
        {
          "label": "Không đúng",
          "score": 2
        }
      ],
      "bands": [
        {
          "min": 0,
          "max": 5,
          "level": "thap",
          "title": "Lời nói của con đang phát triển ổn",
          "description": "Chưa thấy dấu hiệu rối loạn âm lời nói. Nếu con còn ngọng vài âm khó như r, l, s thì hãy đối chiếu với tuổi — nhiều âm phải đến 4–5 tuổi mới hoàn thiện."
        },
        {
          "min": 6,
          "max": 13,
          "level": "vua",
          "title": "Con có một vài lỗi phát âm nên được kiểm tra",
          "description": "Có dấu hiệu con đang lệch khỏi mốc âm của tuổi. Một buổi lượng giá phát âm sẽ cho biết đây là lỗi <b>cấu âm</b> (con chưa biết đặt lưỡi) hay lỗi <b>âm vị</b> (con nhầm cả hệ thống) — hai loại này chữa khác nhau hoàn toàn."
        },
        {
          "min": 14,
          "max": 24,
          "level": "cao",
          "title": "Nên cho con lượng giá phát âm sớm",
          "description": "Nhiều dấu hiệu cùng lúc, trong đó có những dấu hiệu gợi ý khó khăn về <b>vận động lời nói</b> — nghĩa là con hiểu và muốn nói nhưng miệng không thực hiện được. Nhóm này càng can thiệp sớm càng tốt, và cần kỹ thuật riêng."
        }
      ],
      "actions": {
        "thap": [
          "Khi con nói sai, <b>nói mẫu lại cho đúng</b> một cách tự nhiên &mdash; đừng bắt con nói lại.",
          "Đừng nhại theo cách nói ngọng của con, kể cả khi thấy dễ thương.",
          "Nhiều âm khó (r, l, s, tr) phải đến 4&ndash;5 tuổi mới hoàn thiện &mdash; đối chiếu với tuổi trước khi lo."
        ],
        "vua": [
          "<b>Ghi âm hai phút</b> con nói tự nhiên trong lúc chơi. Đây là thứ có giá trị nhất khi đi lượng giá.",
          "Nói mẫu lại đúng, nhấn nhẹ vào âm sai &mdash; <b>không bắt con nói lại nhiều lần</b>.",
          "Ghi ra những âm con hay sai và sai theo kiểu nào (bỏ mất, thay bằng âm khác, hay méo tiếng).",
          "<b>Đừng tự tập ép âm ở nhà</b> theo video trên mạng &mdash; tập sai cách dễ biến lỗi thành thói quen khó gỡ hơn."
        ],
        "cao": [
          "Đặt lịch lượng giá phát âm sớm. Trong bài có dấu hiệu gợi ý khó khăn về <b>vận động lời nói</b> &mdash; nhóm này cần kỹ thuật riêng.",
          "Ghi âm hoặc quay hai phút con nói tự nhiên, mang theo khi đi khám.",
          "<b>Không tự tập ép âm ở nhà.</b> Với nhóm này, tập sai cách gây hại nhiều hơn là không tập.",
          "Vẫn đáp lại mọi nỗ lực nói của con &mdash; đừng để con ngại nói vì sợ bị sửa.",
          "Nếu con hay nghẹn, chảy dãi, khó nhai thì nói rõ điều này khi đặt lịch."
        ]
      },
      "items": [
        {
          "text": "Người lạ nghe con nói là hiểu được ngay, không cần bạn dịch lại.",
          "reverseScore": false
        },
        {
          "text": "Con nói được các âm <b>m, b, t, đ</b> rõ ràng (từ khoảng 2 tuổi rưỡi).",
          "reverseScore": false
        },
        {
          "text": "Con nói được âm <b>ch</b> và âm <b>kh</b> (từ khoảng 3–4 tuổi).",
          "reverseScore": false
        },
        {
          "text": "Con nói được âm <b>ph</b> (từ khoảng 4 tuổi).",
          "reverseScore": false
        },
        {
          "text": "Con nói được âm <b>l</b> và âm <b>r</b> (từ khoảng 4–5 tuổi).",
          "reverseScore": false
        },
        {
          "text": "Con nói được phụ âm cuối: bắt, cắt, mát, bánh.",
          "reverseScore": false
        },
        {
          "text": "Con nói được từ hai âm tiết trọn vẹn: mẹ ơi, con đi, uống nước.",
          "reverseScore": false
        },
        {
          "text": "Con nói tự nhiên, không phải cố gắng nhiều mới bật được tiếng.",
          "reverseScore": false
        },
        {
          "text": "Con bỏ mất âm đầu của từ, hoặc luôn thay một âm bằng một âm khác.",
          "reverseScore": true
        },
        {
          "text": "Con hiểu rất tốt mọi thứ bạn nói, nhưng miệng con không nói ra được.",
          "reverseScore": true
        },
        {
          "text": "Con nói câu dài thì càng khó nghe hơn là nói từ đơn.",
          "reverseScore": true
        },
        {
          "text": "Con hay chảy nước dãi, khó nhai, hay bị nghẹn khi ăn.",
          "reverseScore": true
        }
      ]
    }
  },
  "disclaimer": "Đây là công cụ định hướng cho cha mẹ, <b>không phải chẩn đoán y khoa</b>. Kết quả không thay thế cho một buổi lượng giá đầy đủ với chuyên viên. Nếu bạn lo lắng về con, hãy đặt lịch khám thay vì chờ đợi.",
  "nextLinks": [
    {
      "label": "Đọc kỹ hơn về chậm nói",
      "href": "#phu-huynh/cham-noi",
      "onlyFor": "cham-noi"
    },
    {
      "label": "Xem quy trình khám diễn ra thế nào",
      "href": "#phu-huynh/kham"
    },
    {
      "label": "Xem lớp cho cha mẹ",
      "href": "#lop-cha-me"
    },
    {
      "label": "Hỏi một câu qua Zalo",
      "href": "https://zalo.me/0866620583",
      "external": true
    }
  ]
};

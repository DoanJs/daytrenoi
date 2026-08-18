import { QuickTestData } from "./QuickTest.types";

export const quickTestMockData: QuickTestData = {
  "eyebrow": "Miễn phí · không cần để lại thông tin",
  "heading": "Bốn bài test nhanh cho cha mẹ",
  "description": "Bộ câu hỏi rút ra từ chính bộ bảng kiểm chúng tôi dùng trong phòng khám. Anh/chị chỉ mất hai phút và thấy kết quả ngay — không phải điền số điện thoại mới được xem.",
  "tests": [
    {
      "id": "tu-ky",
      "icon": "🧠",
      "title": "Con có dấu hiệu tự kỷ không?",
      "sub": "12 câu · khoảng 2 phút · cho trẻ 12–48 tháng",
      "intro": "Bộ câu hỏi rút từ bảng kiểm giao tiếp không lời và bảng kiểm kỹ năng chơi mà chúng tôi dùng trong phòng khám. Bạn trả lời theo những gì thật sự thấy ở con trong hai tuần gần đây.",
      "scale": [
        [
          "Thường xuyên",
          0
        ],
        [
          "Thỉnh thoảng",
          1
        ],
        [
          "Hiếm khi hoặc chưa bao giờ",
          2
        ]
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
      "items": [
        [
          "Con quay đầu lại khi bạn gọi tên, kể cả lúc con đang mải chơi.",
          0
        ],
        [
          "Con nhìn vào mắt bạn khi hai mẹ con nói chuyện hoặc chơi cùng nhau.",
          0
        ],
        [
          "Con chỉ tay vào món đồ con muốn lấy.",
          0
        ],
        [
          "Con chỉ tay để khoe với bạn một thứ thú vị — không phải để xin.",
          0
        ],
        [
          "Con nhìn qua lại giữa món đồ và mặt bạn, như muốn chia sẻ.",
          0
        ],
        [
          "Con mỉm cười đáp lại khi bạn cười với con.",
          0
        ],
        [
          "Con bắt chước hành động của bạn: vỗ tay, vẫy tay, làm mặt hề.",
          0
        ],
        [
          "Con đưa đồ vật cho bạn để nhờ giúp khi con không tự làm được.",
          0
        ],
        [
          "Con chơi giả vờ: cho búp bê ăn, giả vờ nghe điện thoại, giả vờ nấu ăn.",
          0
        ],
        [
          "Con luân phiên được với bạn ít nhất hai lượt trong một trò chơi.",
          0
        ],
        [
          "Con chơi lặp đi lặp lại một kiểu — xoay bánh xe, xếp hàng đồ chơi — và rất khó dứt ra.",
          1
        ],
        [
          "Con đã từng nói được vài từ rồi sau đó ít dần hoặc mất hẳn.",
          1
        ]
      ]
    },
    {
      "id": "cham-noi",
      "icon": "💬",
      "title": "Con có chậm nói không?",
      "sub": "6 câu · khoảng 1 phút · câu hỏi thay đổi theo tuổi của con",
      "intro": "Chậm nói chỉ có nghĩa khi đặt cạnh tuổi. Bạn chọn nhóm tuổi của con trước, chúng tôi hỏi đúng những mốc mà trẻ ở tuổi đó thường đã làm được.",
      "scale": [
        [
          "Con làm được rồi",
          0
        ],
        [
          "Con làm được nhưng chưa chắc",
          1
        ],
        [
          "Con chưa làm được",
          2
        ]
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
      "ageGroups": [
        {
          "id": "12-17",
          "label": "12 – 17 tháng",
          "questions": [
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
          "questions": [
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
          "questions": [
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
          "questions": [
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
          "questions": [
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
    {
      "id": "giac-quan",
      "icon": "✋",
      "title": "Con có khó khăn về giác quan không?",
      "sub": "18 câu · khoảng 2 phút · sáu hệ giác quan",
      "intro": "Rút gọn từ Bảng kiểm sàng lọc rối loạn xử lý cảm giác trong sách <b>Lên tiếng</b>. Bạn tick vào những biểu hiện con thường có trong sinh hoạt hằng ngày.",
      "scale": [
        [
          "Không",
          0
        ],
        [
          "Thỉnh thoảng",
          1
        ],
        [
          "Thường xuyên",
          2
        ]
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
      "groups": [
        {
          "title": "Xúc giác",
          "questions": [
            "Con không chịu để tay bẩn, đòi lau rửa ngay.",
            "Con chống cự dữ khi cắt tóc, cắt móng, đánh răng hoặc rửa mặt.",
            "Con khó chịu với nhãn mác, đường may quần áo, hoặc chỉ chịu mặc vài bộ quen."
          ]
        },
        {
          "title": "Tiền đình — thăng bằng",
          "questions": [
            "Con thích xoay tròn, đung đưa rất lâu mà không chóng mặt.",
            "Con sợ chân rời mặt đất: né cầu trượt, xích đu, cầu thang, chỗ cao.",
            "Con không ngồi yên được, luôn nhấp nhổm hoặc chạy nhảy."
          ]
        },
        {
          "title": "Cảm giác bản thể",
          "questions": [
            "Con thích được ôm thật chặt, quấn chặt, hoặc chui vào chỗ hẹp.",
            "Con hay va vào đồ vật, vấp ngã, làm rơi đồ, trông vụng về.",
            "Con đập mạnh đồ chơi, giậm chân, nhảy từ trên cao xuống."
          ]
        },
        {
          "title": "Thính giác",
          "questions": [
            "Con bịt tai hoặc bỏ chạy khi có tiếng ồn lớn hay bất ngờ.",
            "Con không phản ứng khi được gọi, dù tai con nghe bình thường.",
            "Con tự tạo tiếng ồn liên tục hoặc thích âm thanh lặp đi lặp lại."
          ]
        },
        {
          "title": "Thị giác",
          "questions": [
            "Con nhìn chằm chằm hoặc liếc nghiêng để ngắm đồ vật.",
            "Con né giao tiếp bằng mắt.",
            "Con dễ bị phân tâm bởi ánh sáng, chuyển động, đồ trang trí trong phòng."
          ]
        },
        {
          "title": "Vị giác và khứu giác",
          "questions": [
            "Con kén ăn nặng, chỉ ăn vài món hoặc từ chối thử món mới.",
            "Con ngửi đồ vật, ngửi thức ăn trước khi ăn.",
            "Con vẫn hay cho đồ vật vào miệng nhai, mút sau 2 tuổi."
          ]
        }
      ],
      "note": "Bảng kiểm này <b>không phải là công cụ chẩn đoán</b>. Nếu bạn nghi ngờ con có vấn đề về xử lý cảm giác, hãy tham khảo ý kiến chuyên gia."
    },
    {
      "id": "phat-am",
      "icon": "👅",
      "title": "Con có khó khăn về phát âm không?",
      "sub": "12 câu · khoảng 2 phút · đối chiếu tuổi lĩnh hội âm tiếng Việt",
      "intro": "Các mốc âm dưới đây lấy từ <b>Bảng tuổi lĩnh hội âm vị tiếng Việt</b> mà chúng tôi dùng khi lượng giá. Một âm chỉ được coi là lỗi khi con đã quá tuổi lẽ ra phải nói được nó.",
      "scale": [
        [
          "Đúng",
          0
        ],
        [
          "Chưa chắc",
          1
        ],
        [
          "Không đúng",
          2
        ]
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
      "items": [
        [
          "Người lạ nghe con nói là hiểu được ngay, không cần bạn dịch lại.",
          0
        ],
        [
          "Con nói được các âm <b>m, b, t, đ</b> rõ ràng (từ khoảng 2 tuổi rưỡi).",
          0
        ],
        [
          "Con nói được âm <b>ch</b> và âm <b>kh</b> (từ khoảng 3–4 tuổi).",
          0
        ],
        [
          "Con nói được âm <b>ph</b> (từ khoảng 4 tuổi).",
          0
        ],
        [
          "Con nói được âm <b>l</b> và âm <b>r</b> (từ khoảng 4–5 tuổi).",
          0
        ],
        [
          "Con nói được phụ âm cuối: bắt, cắt, mát, bánh.",
          0
        ],
        [
          "Con nói được từ hai âm tiết trọn vẹn: mẹ ơi, con đi, uống nước.",
          0
        ],
        [
          "Con nói tự nhiên, không phải cố gắng nhiều mới bật được tiếng.",
          0
        ],
        [
          "Con bỏ mất âm đầu của từ, hoặc luôn thay một âm bằng một âm khác.",
          1
        ],
        [
          "Con hiểu rất tốt mọi thứ bạn nói, nhưng miệng con không nói ra được.",
          1
        ],
        [
          "Con nói câu dài thì càng khó nghe hơn là nói từ đơn.",
          1
        ],
        [
          "Con hay chảy nước dãi, khó nhai, hay bị nghẹn khi ăn.",
          1
        ]
      ]
    }
  ],
  "disclaimer": "Đây là công cụ định hướng cho cha mẹ, <b>không phải chẩn đoán y khoa</b>. Kết quả không thay thế cho một buổi lượng giá đầy đủ với chuyên viên. Nếu bạn lo lắng về con, hãy đặt lịch khám thay vì chờ đợi.",
  "resultPrimaryLabel": "Đặt lịch khám, tư vấn qua Zalo",
  "resultSecondaryLabel": "Xem lớp cho cha mẹ",
  "resultPrimaryUrl": "https://zalo.me/0866620583",
  "resultSecondaryUrl": "#lop-cha-me",
  "leadTitle": "Muốn nhận bản phân tích chi tiết?",
  "leadDescription": "Để lại tên và số Zalo, chúng tôi gửi bản phân tích từng câu trả lời của bạn kèm gợi ý việc làm được ngay tại nhà.",
  "namePlaceholder": "Tên của bạn",
  "agePlaceholder": "Tuổi của con",
  "phonePlaceholder": "Số Zalo",
  "submitLabel": "Gửi cho tôi",
  "zaloBaseUrl": "https://zalo.me/0866620583"
};

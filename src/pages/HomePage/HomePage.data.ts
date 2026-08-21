import { HomePageData, HomeQuickTestMap } from "./HomePage.types";

export const homePageMockData: HomePageData = {
  "texts": {
    "t001": "Dr Owl Academy · OWLSPEAKS",
    "t002": "Thấu hiểu trẻ,",
    "t003": "đi đúng ngay từ bước đầu tiên.",
    "t004": "Khám, tư vấn và can thiệp cho trẻ có khó khăn về ",
    "t005": "ngôn ngữ, giao tiếp, phát triển",
    "t006": ". Đào tạo thực hành can thiệp và xuất bản về ",
    "t007": "ngôn ngữ — lời nói — giác quan",
    "t008": " cho trẻ Việt Nam. Mọi tài liệu ở đây đều viết bằng tiếng Việt, thích ứng cho trẻ Việt và phù hợp với văn hoá xã hội Việt Nam.",
    "t009": "Tôi là phụ huynh →",
    "t010": "Tôi là chuyên viên →",
    "t011": "Làm test nhanh cho con",
    "t012": "7",
    "t013": "đầu sách đã xuất bản",
    "t014": "3",
    "t015": "hệ đào tạo · 10 cấp",
    "t016": "600",
    "t017": "trẻ trong nghiên cứu từ vựng",
    "t018": "L2",
    "t019": "PROMPT Level 2 · người Việt đầu tiên",
    "t020": "Bộ Miệng xinh lời hay — đi kèm khoá học",
    "t021": "Bạn đang cần gì?",
    "t022": "Hãy chọn cánh cửa phù hợp với bạn",
    "t023": "Cùng nền tảng khoa học nhưng cha mẹ và người làm nghề cần hai lộ trình khác nhau.",
    "t024": "👪",
    "t025": "Tôi là phụ huynh",
    "t026": "Con chậm nói, khó tập trung, né ánh mắt, gọi không quay đầu, hay lăng xăng, phát âm ngọng, khó phát âm, kén ăn, không chơi với bạn… — bạn muốn biết con đang gặp trở ngại gì và mình làm được gì để giúp con.",
    "t027": "Đăng ký khám & lượng giá cho con",
    "t028": "Can thiệp trực tiếp tại trung tâm Ngôn ngữ trị liệu OWLSPEAKS",
    "t029": "Lớp cha mẹ 1 ngày · Khoá cầm tay chỉ việc 1–1 tám tuần",
    "t030": "Mua sách & học liệu",
    "t031": "Xem lối đi cho phụ huynh →",
    "t032": "🎓",
    "t033": "Tôi là chuyên viên",
    "t034": "Bạn đang làm nghề hoặc mới vào nghề, muốn có một hệ thống chuẩn để tự tin và thành công trên nhiều trẻ.",
    "t035": "Ba hệ đào tạo: Âm ngữ trị liệu · Chơi lớn · Miệng xinh lời hay",
    "t036": "Trọn một hệ → Trị liệu viên Tài năng",
    "t037": "Thực hành lâm sàng có giám sát",
    "t038": "Chuyển giao cho cá nhân và cơ sở",
    "t039": "Xem chương trình đào tạo →",
    "t040": "Bản đồ",
    "t041": "Tháp đào tạo Dr Owl Academy",
    "t042": "Đọc từ dưới lên: một thân, hai cành, một đỉnh — và một nhánh riêng cho cha mẹ. Bấm vào từng bậc để xem nội dung.",
    "t043": "Nhánh Cha mẹ — đi riêng",
    "t044": "Lớp cha mẹ 1 ngày",
    "t045": "Học trực tiếp · không cần nền tảng",
    "t046": "999.999đ",
    "t047": "Dạy con 24/7",
    "t048": "Coaching 1–1 online · 8 tuần",
    "t049": "1 buổi Zoom + 1 clip mỗi tuần",
    "t050": "Cha mẹ muốn đi sâu hơn thì bước sang nhánh làm nghề, vào thẳng ",
    "t051": "Âm ngữ trị liệu Bậc 1",
    "t052": ".",
    "t053": "Đỉnh · Bậc 5",
    "t054": "Can thiệp đa trường phái",
    "t055": "Tích hợp các công cụ và phương pháp trên cùng một đứa trẻ",
    "t056": "Hành vi ngôn ngữ",
    "t057": "Suy đoán tâm trí",
    "t058": "Can thiệp sớm + PROMPT",
    "t059": "Tích hợp giác quan – vận động",
    "t060": "Vào đỉnh cần: ",
    "t061": "xong ÂNTL ba bậc",
    "t062": " và trọn ",
    "t063": "ít nhất một chuyên khoa",
    "t064": "Cành 1 · Bậc 4",
    "t065": "CHƠI LỚN",
    "t066": "Chuyên khoa phát triển & vui chơi",
    "t067": "C1 Chơi lớn",
    "t068": "C2 Nói chơi",
    "t069": "C3 Chơi cùng giác quan",
    "t070": "Cành 2 · Bậc 4",
    "t071": "MIỆNG XINH LỜI HAY",
    "t072": "Chuyên khoa âm lời nói",
    "t073": "C1 Cấu âm",
    "t074": "C2 Âm vị",
    "t075": "C3 Bàn tay kì diệu",
    "t076": "C4 Trẻ nói khó và đồng mắc",
    "t077": "Hai cành học song song được · ",
    "t078": "MXLH Cấp 4 bắt buộc phải có ÂNTL Bậc 1 và Bậc 2",
    "t079": "Thân cây · Bậc 3",
    "t080": "ÂNTL Bậc 3 — Chuyên sâu",
    "t081": "AAC chuyên sâu · may đo chương trình trị liệu âm ngữ phức hợp · triển khai hoạt động dạy · lượng giá động",
    "t082": "Thân cây · Bậc 2",
    "t083": "ÂNTL Bậc 2 — Trị liệu giao tiếp",
    "t084": "Công thức thiết kế mục tiêu · tháp dạy học 4Th · quy trình can thiệp khép kín · kịch bản trị liệu",
    "t085": "Nền · Bậc 1 — ai làm nghề cũng phải qua",
    "t086": "ÂNTL Bậc 1 — May đo & Lượng giá",
    "t087": "Bảng kiểm lâm sàng giao tiếp chức năng · mốc phát triển · dấu hiệu cảnh báo · phân tích case thực tế · viết mục tiêu chuẩn y khoa · không yêu cầu nền tảng",
    "t088": "Danh hiệu đạt được",
    "t089": "Mỗi bậc, mỗi cấp",
    "t090": "Chứng nhận hoàn thành",
    "t091": "Trọn hệ Âm ngữ trị liệu",
    "t092": "Trị liệu viên Tài năng — hệ Âm ngữ trị liệu",
    "t093": "Trọn hệ Chơi lớn",
    "t094": "Trị liệu viên Tài năng — hệ Trị liệu ứng dụng Chơi",
    "t095": "Trọn hệ Miệng xinh lời hay",
    "t096": "Trị liệu viên Tài năng — hệ Kích tạo âm chuẩn y khoa",
    "t097": "Đỉnh tháp",
    "t098": "⭐ Trị liệu viên Tinh hoa",
    "t099": "Chuyển giao & giám sát",
    "t100": "Thực hành lâm sàng có giám sát · quyền dùng giáo trình & biểu mẫu · đào tạo in-house · duyệt hồ sơ ca. Bốn hạng mục tính phí riêng.",
    "t101": "Xem chi tiết",
    "t102": "Một buổi trị liệu tại OWLSPEAKS",
    "t103": "Ba việc OWLSPEAKS làm",
    "t104": "Từ buổi khám đầu tiên, tới lớp cho cha mẹ, tới đào tạo và chuyển giao cho người làm nghề — cùng một hệ thống, cùng một bộ công cụ.",
    "t105": "🩺 Khám & can thiệp",
    "t106": "Lượng giá toàn diện ngôn ngữ — lời nói — giác quan — vui chơi bằng những công cụ chuẩn hoá, khoa học, cho ra kết quả bằng số liệu cụ thể và may đo kế hoạch can thiệp cá nhân khớp với riêng từng bé.",
    "t107": "Đăng ký khám",
    "t108": "👪 Lớp cho cha mẹ",
    "t109": "Lớp một ngày để hiểu con và có thể áp dụng ngay tối nay — hoặc Khoá huấn luyện cầm tay chỉ việc 1–1 online tám tuần, trên chính con bạn và bạn.",
    "t110": "Xem lớp cha mẹ",
    "t111": "🎓 Đào tạo & chuyển giao",
    "t112": "Ba hệ, mười cấp, đích đến mỗi cấp là một nhóm kĩ năng năng lực lâm sàng thành thục. Kèm thực hành lâm sàng có giám sát và chuyển giao cho trung tâm.",
    "t113": "Xem chương trình",
    "t114": "Người đứng sau hệ thống",
    "t115": "TS.BS. Nguyễn Hoàng Oanh",
    "t116": "Tác giả bộ giáo trình ",
    "t117": "Miệng xinh lời hay",
    "t118": " — Cấu âm (2023), Can thiệp âm vị (2025), Bản đồ giải phẫu phát âm (2026) — và bảy đầu sách về ngôn ngữ, chơi, giác quan cho trẻ Việt Nam.",
    "t119": "Trị liệu viên ngôn ngữ người Việt ",
    "t120": "đầu tiên hoàn thành PROMPT Level 2",
    "t121": "Huấn luyện viên",
    "t122": " của ",
    "t123": "Hanen Canada",
    "t124": " (từ 2015) và ",
    "t125": "The Project ImPACT",
    "t126": " Hoa Kỳ (từ 2021)",
    "t127": "Luận án tiến sĩ về ",
    "t128": "Trị liệu phát âm cho trẻ khe hở môi vòm",
    "t129": " — Đại học Y Hà Nội, 2021",
    "t130": "Đã được đào tạo nhiều chương trình can thiệp có bằng chứng khoa học: ",
    "t131": "PECS",
    "t132": ", ",
    "t133": "Nuffield",
    "t134": ", ",
    "t135": "Myofunctional therapy",
    "t136": "…",
    "t137": "Đồng chủ nhiệm nghiên cứu ",
    "t138": "100 từ đầu tiên",
    "t139": " trên 600 trẻ em Việt Nam ba miền",
    "t140": "Tôi chưa biết bắt đầu từ đâu?",
    "t141": "Nhắn cho chúng tôi về con bạn hoặc về trẻ mà bạn đang vướng mắc. Chúng tôi sẽ chỉ đúng cửa cần vào — cần hẹn lịch khám, tham gia khoá học, hay chỉ một cuốn sách là đủ.",
    "t142": "Nhắn Zalo 0866620583",
    "t143": "Gọi ngay"
  },
  "images": {
    "img001": "/images/bo-sach-va-cong-cu-dr-owl-academy-8a477b90.jpg",
    "img002": "/images/ts-bs-nguyen-hoang-oanh-lam-viec-voi-tre-tai-owl-5cff1076.jpg",
    "img003": "/images/ts-bs-nguyen-hoang-oanh-bb8a8095.jpg"
  },
  "links": {
    "link001": "#phu-huynh",
    "link002": "#dao-tao",
    "link003": "#test-nhanh",
    "link004": "#phu-huynh",
    "link005": "#dao-tao",
    "link006": "#lop-cha-me/p1",
    "link007": "#lop-cha-me/p2",
    "link008": "#dao-tao/dinh",
    "link009": "#dao-tao/choi",
    "link010": "#dao-tao/mxlh",
    "link011": "#dao-tao/ancs-3",
    "link012": "#dao-tao/ancs-2",
    "link013": "#dao-tao/ancs-1",
    "link014": "#chuyen-giao",
    "link015": "#phu-huynh/kham",
    "link016": "#lop-cha-me",
    "link017": "#dao-tao",
    "link018": "https://zalo.me/0866620583",
    "link019": "tel:0866620583"
  },
  "alts": {
    "alt001": "Bộ sách và công cụ Dr Owl Academy",
    "alt002": "TS.BS. Nguyễn Hoàng Oanh làm việc với trẻ tại OWLSPEAKS",
    "alt003": "TS.BS. Nguyễn Hoàng Oanh"
  },
  "placeholders": {}
};

/**
 * Bốn bài test nhanh được cập nhật theo file HTML mới.
 * Dữ liệu này giữ riêng khỏi PageData để sau này có thể chuyển sang Firestore
 * hoặc một service khác mà không phải đổi logic UI.
 */
export const homeQuickTestData: HomeQuickTestMap = {
  "tu-ky": {
    "pos0": true,
    "labMiss": "Những điều con chưa làm được hoặc hiếm khi làm",
    "labHas": "Những biểu hiện đang có ở con",
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
    ],
    "bands": [
      [
        0,
        5,
        "thap",
        "Chưa thấy dấu hiệu đáng lo",
        "Những kỹ năng giao tiếp xã hội nền tảng của con đang có mặt. Bạn cứ tiếp tục chơi và trò chuyện với con nhiều như đang làm, và theo dõi lại sau 3–6 tháng."
      ],
      [
        6,
        12,
        "vua",
        "Có một vài dấu hiệu nên theo dõi",
        "Một số kỹ năng giao tiếp xã hội của con chưa vững. Điều này chưa có nghĩa là con tự kỷ — nhưng đáng để được một chuyên viên quan sát trong 1–2 tháng tới, thay vì chờ xem."
      ],
      [
        13,
        24,
        "cao",
        "Nên cho con đi lượng giá sớm",
        "Nhiều dấu hiệu cùng xuất hiện ở nhóm kỹ năng giao tiếp xã hội — đây là nhóm quan trọng nhất trong sàng lọc tự kỷ. Bạn nên đặt lịch lượng giá trong thời gian gần nhất. Phát hiện sớm vài tháng ở tuổi này tạo khác biệt rất lớn."
      ]
    ]
  },
  "cham-noi": {
    "pos0": true,
    "labMiss": "Những mốc của tuổi này con chưa đạt",
    "labHas": "Những biểu hiện đang có ở con",
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
    "ageGroups": [
      [
        "12-17",
        "12 – 17 tháng",
        [
          "Con bập bẹ thành chuỗi có nhịp điệu: ba-ba, ma-ma, da-da.",
          "Con nói được ít nhất 1–3 từ có nghĩa dùng đúng lúc (mẹ, ba, măm).",
          "Con quay lại khi nghe gọi tên mình.",
          "Con chỉ tay vào thứ con muốn.",
          "Con làm theo được một yêu cầu đơn giản khi có kèm cử chỉ (đưa mẹ nào).",
          "Con bắt chước được âm hoặc hành động bạn vừa làm."
        ]
      ],
      [
        "18-23",
        "18 – 23 tháng",
        [
          "Con nói được từ 10 đến 20 từ khác nhau.",
          "Con chỉ đúng được 2–3 bộ phận cơ thể khi bạn hỏi.",
          "Con làm theo mệnh lệnh đơn mà không cần bạn chỉ tay (lấy bóng đi).",
          "Con bắt chước từ mới bạn vừa nói.",
          "Con biết lắc đầu từ chối và gật đầu đồng ý.",
          "Con dùng lời để xin, chứ không chỉ kéo tay hoặc khóc."
        ]
      ],
      [
        "24-35",
        "24 – 35 tháng",
        [
          "Con ghép được hai từ với nhau (mẹ bế, uống nước).",
          "Con nói được ít nhất 50 từ khác nhau.",
          "Người trong nhà hiểu được khoảng một nửa những gì con nói.",
          "Con làm theo được mệnh lệnh hai bước (lấy bóng rồi đưa cho ba).",
          "Con gọi tên được những đồ vật quen thuộc trong nhà.",
          "Con biết hỏi hoặc đòi bằng lời khi muốn thứ gì."
        ]
      ],
      [
        "36-47",
        "36 – 47 tháng",
        [
          "Con nói được câu 3–4 từ.",
          "Người lạ hiểu được phần lớn lời con nói.",
          "Con kể lại được việc vừa xảy ra, dù còn lộn xộn.",
          "Con trả lời được câu hỏi ai, ở đâu, làm gì.",
          "Con dùng được từ chỉ vị trí: trong, trên, dưới.",
          "Con giữ được một cuộc trò chuyện qua lại vài lượt."
        ]
      ],
      [
        "48+",
        "48 tháng trở lên",
        [
          "Con kể được một câu chuyện ngắn có đầu có cuối.",
          "Người lạ hiểu gần như toàn bộ lời con nói.",
          "Con trả lời được câu hỏi vì sao, thế nào.",
          "Con dùng được câu ghép có từ nối (vì, nhưng, rồi).",
          "Con hiểu và dùng được từ khái niệm: nhiều – ít, trước – sau.",
          "Con kể lại được chuyện ở lớp cho bạn nghe."
        ]
      ]
    ],
    "bands": [
      [
        0,
        2,
        "thap",
        "Con đang đi đúng mốc tuổi",
        "Những mốc quan trọng của nhóm tuổi này con đã có. Bạn tiếp tục nói chuyện nhiều với con và kiểm tra lại sau vài tháng."
      ],
      [
        3,
        6,
        "vua",
        "Con đang chậm hơn mốc một chút",
        "Có vài mốc con chưa đạt. Ở giai đoạn này, một buổi lượng giá ngôn ngữ sẽ nói rõ con đang thiếu ở phần hiểu hay phần diễn đạt — hai thứ này cần cách dạy khác nhau."
      ],
      [
        7,
        12,
        "cao",
        "Con chậm rõ so với tuổi",
        "Con chưa đạt nhiều mốc của nhóm tuổi mình. Đừng chờ thêm để xem con có tự bắt kịp không — hãy cho con lượng giá để biết chính xác con đang ở đâu và cần bắt đầu từ đâu."
      ]
    ]
  },
  "giac-quan": {
    "pos0": false,
    "labMiss": "Những điều con chưa làm được",
    "labHas": "Những biểu hiện đang xuất hiện ở con",
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
    "groups": [
      [
        "Xúc giác",
        [
          "Con không chịu để tay bẩn, đòi lau rửa ngay.",
          "Con chống cự dữ khi cắt tóc, cắt móng, đánh răng hoặc rửa mặt.",
          "Con khó chịu với nhãn mác, đường may quần áo, hoặc chỉ chịu mặc vài bộ quen."
        ]
      ],
      [
        "Tiền đình — thăng bằng",
        [
          "Con thích xoay tròn, đung đưa rất lâu mà không chóng mặt.",
          "Con sợ chân rời mặt đất: né cầu trượt, xích đu, cầu thang, chỗ cao.",
          "Con không ngồi yên được, luôn nhấp nhổm hoặc chạy nhảy."
        ]
      ],
      [
        "Cảm giác bản thể",
        [
          "Con thích được ôm thật chặt, quấn chặt, hoặc chui vào chỗ hẹp.",
          "Con hay va vào đồ vật, vấp ngã, làm rơi đồ, trông vụng về.",
          "Con đập mạnh đồ chơi, giậm chân, nhảy từ trên cao xuống."
        ]
      ],
      [
        "Thính giác",
        [
          "Con bịt tai hoặc bỏ chạy khi có tiếng ồn lớn hay bất ngờ.",
          "Con không phản ứng khi được gọi, dù tai con nghe bình thường.",
          "Con tự tạo tiếng ồn liên tục hoặc thích âm thanh lặp đi lặp lại."
        ]
      ],
      [
        "Thị giác",
        [
          "Con nhìn chằm chằm hoặc liếc nghiêng để ngắm đồ vật.",
          "Con né giao tiếp bằng mắt.",
          "Con dễ bị phân tâm bởi ánh sáng, chuyển động, đồ trang trí trong phòng."
        ]
      ],
      [
        "Vị giác và khứu giác",
        [
          "Con kén ăn nặng, chỉ ăn vài món hoặc từ chối thử món mới.",
          "Con ngửi đồ vật, ngửi thức ăn trước khi ăn.",
          "Con vẫn hay cho đồ vật vào miệng nhai, mút sau 2 tuổi."
        ]
      ]
    ],
    "bands": [
      [
        0,
        8,
        "thap",
        "Chưa thấy dấu hiệu rối loạn xử lý cảm giác",
        "Những phản ứng giác quan của con nằm trong khoảng bình thường. Nếu con vẫn khó khăn về hành vi hoặc lời nói, nguyên nhân có thể nằm ở chỗ khác."
      ],
      [
        9,
        20,
        "vua",
        "Con có một số vùng giác quan cần hỗ trợ",
        "Một hoặc hai hệ giác quan của con đang phản ứng lệch khỏi mức thông thường. Điều này ảnh hưởng trực tiếp đến việc con có ngồi yên học được không, có chịu ăn không, có sẵn sàng cho lời nói không."
      ],
      [
        21,
        36,
        "cao",
        "Nhiều hệ giác quan đang bị ảnh hưởng",
        "Con có dấu hiệu rối loạn xử lý cảm giác ở nhiều hệ cùng lúc. Đây thường là thứ chặn đường trước cả lời nói — nên được sàng lọc chuyên sâu và có thể cần phối hợp với hoạt động trị liệu."
      ]
    ],
    "note": "Bảng kiểm này <b>không phải là công cụ chẩn đoán</b>. Nếu bạn nghi ngờ con có vấn đề về xử lý cảm giác, hãy tham khảo ý kiến chuyên gia."
  },
  "phat-am": {
    "pos0": true,
    "labMiss": "Những âm và kỹ năng lời nói con chưa làm được",
    "labHas": "Những biểu hiện đang có ở con",
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
    ],
    "bands": [
      [
        0,
        5,
        "thap",
        "Lời nói của con đang phát triển ổn",
        "Chưa thấy dấu hiệu rối loạn âm lời nói. Nếu con còn ngọng vài âm khó như r, l, s thì hãy đối chiếu với tuổi — nhiều âm phải đến 4–5 tuổi mới hoàn thiện."
      ],
      [
        6,
        13,
        "vua",
        "Con có một vài lỗi phát âm nên được kiểm tra",
        "Có dấu hiệu con đang lệch khỏi mốc âm của tuổi. Một buổi lượng giá phát âm sẽ cho biết đây là lỗi <b>cấu âm</b> (con chưa biết đặt lưỡi) hay lỗi <b>âm vị</b> (con nhầm cả hệ thống) — hai loại này chữa khác nhau hoàn toàn."
      ],
      [
        14,
        24,
        "cao",
        "Nên cho con lượng giá phát âm sớm",
        "Nhiều dấu hiệu cùng lúc, trong đó có những dấu hiệu gợi ý khó khăn về <b>vận động lời nói</b> — nghĩa là con hiểu và muốn nói nhưng miệng không thực hiện được. Nhóm này càng can thiệp sớm càng tốt, và cần kỹ thuật riêng."
      ]
    ]
  }
};

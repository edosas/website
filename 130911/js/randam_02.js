// �����_���ɉ摜��\������
jmp = new Array();
img = new Array();
// �W�����v��̃A�h���X(�����͉摜�ƑΉ�)
jmp[0] = "recruitment.html";
jmp[1] = "act-gagaku.html";
jmp[2] = "act-kagura.html";
jmp[3] = "act-sansaku.html";
jmp[4] = "act-study.html";
// �摜�̃A�h���X(�����̓W�����v��̃A�h���X�ƑΉ�)
img[0] = "img/banner_001.jpg";
img[1] = "img/banner_002.jpg";
img[2] = "img/banner_003.jpg";
img[3] = "img/banner_004.jpg";
img[4] = "img/banner_005.jpg";
n = Math.floor(Math.random()*jmp.length);
document.write("<a href='"+jmp[n]+"'>");
document.write("<img src='"+img[n]+"' border='0' height=90 width=615>");
document.write("</a>");
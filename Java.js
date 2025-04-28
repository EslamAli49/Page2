function hasabNatiga() {
    let magmo3 = 0;

    // جمع درجات الإجابات الصح
    for (let i = 1; i <= 11; i++) {
        let igaba = document.querySelector(`input[name="s${i}"]:checked`);
        if (igaba) {
            magmo3 = magmo3 + parseInt(igaba.value);
        } else {
            alert("جاوب على كل الأسئلة الأول يا بطل!");
            return;
        }
    }

    // تحديد المستوى
    let natiga = "";
    if (magmo3 >= 8) {
        natiga = "ممتاز! إنت عارف كتير عن السياحة في مصر، كمل كده!";
    } else if (magmo3 >= 4) {
        natiga = "حلو، بس محتاج تقرأ أكتر عن السياحة في مصر!";
    } else {
        natiga = "لسه فيه حاجات كتير لازم تعرفها عن السياحة في مصر!";
    }

    // عرض المستوى
    document.getElementById("natiga").innerHTML = natiga;
}
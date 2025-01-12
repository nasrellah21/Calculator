const n = document.getElementById("input");

// إضافة القيمة إلى الحقل
function button(input) {
    n.value += input;
}

// مسح الحقل
function inputClear() {
    n.value = "";
}

// حساب النتيجة بطريقة آمنة
function calculate() {
    try {
        // تقييم التعبير باستخدام دالة آمنة
        n.value = safeEvaluate(n.value);
    } catch (error) {
        n.value = "Error"; // عرض خطأ إذا كان التعبير غير صحيح
    }
}

// دالة لتقييم العمليات الحسابية البسيطة
function safeEvaluate(expression) {
    // السماح فقط بالأرقام والعوامل الأساسية
    if (/^[\d+\-*/().\s]+$/.test(expression)) {
        return Function(`'use strict'; return (${expression})`)();
    } else {
        throw new Error("Invalid Expression");
    }
}

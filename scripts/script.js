// تفعيل زر "الكل" لعرض كل الأقسام
function showAllCategories() {
    document.querySelectorAll('.menu-category').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.menu-category:first-child').classList.add('active'); // إضافة الفئة النشطة
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.add('show', 'active'); // عرض كل الأقسام
    });
  }
  
  // عند النقر على أي زر تصنيف
  document.querySelectorAll('.menu-category').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.menu-category').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('show', 'active'); // إخفاء كل الأقسام
      });
      const target = document.querySelector(this.dataset.target);
      if (target) {
        target.classList.add('show', 'active'); // عرض القسم المستهدف فقط
      }
    });
  });
  
  // تمكين التمرير الأفقي
  const container = document.querySelector('.menu-categories-container');
  if (container) {
    container.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    });
  }
  
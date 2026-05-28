// قم بإضافة هذا التعريف في ملف declarations.d.ts أو أعلى الملف
// interface HTMLFlipBookProps { ... } 

const GuideScreen = () => {
  // ... بقية التعريفات
  
  // تحسين طريقة الوصول للمكتبة
  const getPageFlip = () => flipbookRef.current?.pageFlip();

  const handlePrev = () => {
    const pf = getPageFlip();
    if (pf) pf.flipPrev();
  };

  const handleNext = () => {
    const pf = getPageFlip();
    if (pf) pf.flipNext();
  };

  return (
    // ... داخل الـ JSX عند الأزرار
    <button onClick={handlePrev} disabled={currentPage === 0}>
      <ChevronLeft className="w-8 h-8" />
    </button>
    // ...
  );
};

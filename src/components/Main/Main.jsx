import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      {/* left */}
      <div className="main__left">
        <div className="main__left-title">Зарабатывайте больше</div>
        <div className="main__left-title-gradient">с WELBEX</div>
        <div className="main__left-subtitle">
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      {/* right */}
      <div className="main__right">
        {/* title */}
        <div className="main__right-title">
          Вместе с <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
        </div>
        {/* grid */}
        <div className="main__right-grid">
          <div className="grid__item">
            <div className="grid__item-title">ВИДЖЕТЫ</div>
            <div className="grid__item-subtitle">30 готовых решений</div>
          </div>
          <div className="grid__item">
            <div className="grid__item-title">DASHBOADR</div>
            <div className="grid__item-subtitle">
              с показателями вашего бизнеса
            </div>
          </div>
          <div className="grid__item">
            <div className="grid__item-title">SKYPE АУДИТ</div>
            <div className="grid__item-subtitle">
              отдела продаж <br />
               CRM системы
            </div>
          </div>
          <div className="grid__item">
            <div className="grid__item-title">35 ДНЕЙ</div>
            <div className="grid__item-subtitle">использования CRM</div>
          </div>
        </div>
        {/* button */}
        <button className="main__right-button">Получить консультацию</button>
      </div>
    </main>
  );
};

export default Main;

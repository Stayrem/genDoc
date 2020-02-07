const createPersonForm = () => 
    `                            <div>
    <div class="container">
   
        <div class="row doc-data">
            <div class="input-box constructor__input col-md-4 mt-45">
                <label for="form__city">Ваш Город</label>
                <input id="form__city" type="text"  placeholder="Ваш Город*">
            </div>
            <div class="input-box constructor__input col-md-5 mt-45">
                <label for="form__numb">Номер Доверенности</label>
                <input type="text" id="form__numb" placeholder="Номер Доверенности">
            </div>
            <div class="input-box constructor__input col-md-3 mt-45">
                <label for="form__date">Дата</label>
                <input type="text" id="form__date" placeholder="Дата">
            </div>
        </div>
        <div class="row">
        <div class="col">
            <span class="font-weight-bold constructor__subtitle mt-45">
                Заполните данные доверителя
            </span>
        </div>
    </div>
        <div class="row">
            <div class="input-box constructor__input col-md-12 mt-25">
                <label for="form__name">ФИО</label>
                <input type="text" id="form__name" name="name" placeholder="ФИО*">
            </div>
            
        </div>
        <div class="row">
            <div class="select-box constructor__input col-md-6 mt-25">
                <label for="form__sex">Пол</label>
                <select name="" id="form__sex">
                    <option value="">Не выбрано</option>
                    <option value="">Мужской</option>
                    <option value="">Женский</option>
                </select>
            </div>
            <div class="input-box constructor__input col-md-6 mt-25">
                <label for="form__birth">Дата Рождения</label>
                <input id="form__birth" type="text" placeholder="Дата Рождения*">
            </div>
        </div>
        <div class="row">
            <div class="select-box constructor__input col-md-4 mt-25">
                <label for="form__document">Документ</label>
                <select name="" id="form__document">
                    <option value="">Не выбрано</option>
                    <option value="">Паспорт</option>
                </select>                                        </div>
            <div class="input-box constructor__input col-md-4 mt-25">
                <label for="form__doc-serial">Серия</label>
                <input type="text" id="form__doc-serial" maxlength="10" placeholder="Серия*">
            </div>
            <div class="input-box constructor__input col-md-4 mt-25">
                <label for="form__doc-numb">Номер</label>
                <input type="text" id="form__doc-numb" maxlength="4" placeholder="Номер*">
            </div>
        </div>
        <div class="row">
            <div class="input-box constructor__input col-md-12 mt-25">
                <label for="form__date-issue">Дата выдачи и кем выдан</label>
                <input type="text" placeholder="Дата выдачи и кем выдан*">
            </div>
        </div>
        <div class="row">
            <div class="input-box constructor__input col-md-5 mt-25">
                <label for="form__code">Код Подразделения</label>
                <input type="text" id="form_code" placeholder="Код Подразделения*">
            </div>
            <div class="input-box constructor__input col-md-7 mt-25">
                <label for="form__address">Адрес Регистрации</label>
                <input type="text"id="form__address" placeholder="Адрес Регистрации*">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="constructor__btn d-flex">
                    <button class="main-btn mx-auto mt-25" >Далее</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const createCompForm = () =>
`<div>
<div class="container">
    <div class="row">
        <div class="col">
            <span class="font-weight-bold constructor__subtitle mt-45">
                Заполните данные доверителя
            </span>
        </div>
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-12 mt-45">
            <label for="form__comp-name">Наименование (полное)</label>
            <input id="form__comp-name" type="text" placeholder="Наименование (полное)">
        </div>
        
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-12 mt-25">
            <label for="form__comp-address">Адрес юридического лица</label>
            <input type="text" id="form__comp-address" name="name" placeholder="Адрес юридического лица*">
        </div>
        
    </div>
    <div class="row">

        <div class="input-box constructor__input col-md-12 mt-25">
            <label for="form__comp-post">Должность</label>
            <input id="form__comp-post" type="text" placeholder="Должность">
        </div>
    </div>
    <div class="row">

        <div class="input-box constructor__input col-md-12 mt-25">
            <label for="form__comp-person-name">Ф.И.О. лица, уполномоченного выдавать доверенности</label>
            <input type="text" id="form__comp-person-name" maxlength="10" placeholder="ФИО">
        </div>
        
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-12 mt-25">
            <label for="form__comp-powers">Основания полномочий</label>
            <input type="text" placeholder="Основания полномочий">
        </div>
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-6 mt-25">
            <label for="form__comp-ogrn">ОГРН</label>
            <input type="text" id="form__comp-ogrn" maxlength="13" placeholder="ОГРН">
        </div>
        <div class="input-box constructor__input col-md-6 mt-25">
            <label for="form__comp-inn">ИНН</label>
            <input type="text" id="form__comp-inn" maxlength="13" placeholder="ИНН">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="constructor__btn d-flex">
                <button class="main-btn mx-auto mt-25">Далее</button>
            </div>
        </div>
    </div>
</div>
</div>

`;

const createEnterpreneurForm = () =>
`<div>
<div class="container">
    <div class="row">
        <div class="col">
            <span class="font-weight-bold constructor__subtitle mt-45">
                Заполните данные доверителя
            </span>
        </div>
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-8 mt-25">
            <label for="form__enterpreneur-name">ФИО</label>
            <input id="form__enterpreneur-name" type="text" placeholder="ФИО">
        </div>
        <div class="input-box constructor__input col-md-4 mt-25">
            <label for="form__enterpreneur-birth">Дата Рождения</label>
            <input type="text" id="form__enterpreneur-birth" name="name" placeholder="Дата Рождения">
        </div>
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-6 mt-25">
            <label for="form__enterpreneur-ogrnip">ОГРНИП </label>
            <input type="text" id="form__enterpreneur-ogrnip" maxlength="15" name="name" placeholder="ОГРНИП">
        </div>
        <div class="input-box constructor__input col-md-6 mt-25">
            <label for="form__enterpreneur-inn">ИНН</label>
            <input id="form__enterpreneur-inn" maxlength="12" type="text" placeholder="ИНН">
        </div>
    </div>
    <div class="row">
        <div class="input-box constructor__input col-md-12 mt-25">
            <label for="form__enterpreneur-address">Адрес</label>
            <input id="form__enterpreneur-address" type="text" placeholder="Адрес">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="constructor__btn d-flex">
                <button class="main-btn mx-auto mt-25">Далее</button>
            </div>
        </div>
    </div>
</div>
</div>
`;

window.personform = createPersonForm();
window.compForm = createCompForm();
window.enterpreneurForm = createEnterpreneurForm();


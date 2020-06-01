import React from "react";
let items = [1, 2, 3, 4, 5];
function SearchList(props) {
   // const {items} = props;
    if (!items.length) {
        return <p className="search-info">Не найдено. Попробуйте изменить запрос или ввести часть слова</p>
    }

    if (items.count > 5 ) {console.log('1');} else {console.log('2')}
    return (
        <div className="search-list">
            <table className="table">
                <thead>
                <tr className="tm-bg-gray">
                    <th scope="col" className="col-s">Наименование</th>
                    <th scope="col">Аптека</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Наличие</th>
                    <th scope="col">Обновлено</th>
                </tr>
                </thead>
                <tbody>
                
                {items.map(item => (  
                    <tr key={item.id}>
                        <td className="">{item}</td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchList;
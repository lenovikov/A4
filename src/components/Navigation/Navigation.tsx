import BasketIcon from '../../Icons/BasketIcon';
import BurgerIcon from '../../Icons/BurgerIcon';
import MapIcon from '../../Icons/MapIcon';
import UserIcon from '../../Icons/UserIcon';
import BlockContainer from '../BlockContainer/BlockContainer';
import Button from '../Button/Button';
import Search from '../Search/Search';

const Navigation = () => {
  return (
    <div className="bg-red pt-4 pb-7">
      <BlockContainer containerType={'content-wrapper'}>
        <div className="flex pb-3 text-white text-sm items-center pr-40 justify-between">
          <div className="map-container flex items-center">
            <MapIcon />
            <p className="text-white">Жлобин</p>
          </div>
          <div className="flex ">
            <Button text="О нас" type="sm" />
            <Button text="Контакты" type="sm" />
            <Button text="Доставка" type="sm" />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <BurgerIcon />
          </div>
          <p>a4 Logo</p>
          <Search />
          <div className="mr-4 cursor-pointer">
            <div className="flex justify-center">
              <UserIcon />
            </div>
            <p className="text-white text-sm">Войти</p>
          </div>
          <div className="cursor-pointer">
            <div className="flex justify-center ">
              <BasketIcon />
            </div>
            <p className="text-white text-sm">Корзина</p>
          </div>
        </div>
      </BlockContainer>
    </div>
  );
};

export default Navigation;

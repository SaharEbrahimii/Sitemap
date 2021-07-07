import { useTranslation, } from 'next-i18next';

const array = [];

const SitemapArrayGenerator = (data, prevUrl = '', prevKey = '') => {
  const {t, } = useTranslation();
  data.map((item, index) => {
    const i = index + 1;
    const url = (prevUrl) ? `${prevUrl}/${item.name}` : `/${item.name}`;
    const key = (prevKey) ? `${prevKey}-${i}` : `${i}`;

    const json = {
      id: i,
      key,
      title: t(`${item.name}`),
      url,
    };

    if(item.children){
      SitemapArrayGenerator(item.children, url, key)
    }
    array.push(json);
  }); // end map
  
  return array
  
};
export default SitemapArrayGenerator;

import {IAllPosts} from './allPostsModule';

let allPosts: IAllPosts[] = [{
    id: Date.now(),
    img: 'https://e0.365dm.com/21/07/2048x1152/skysports-england-win-euro-2020_5440595.jpg',
    date: ` ${String(new Date().getDate())}.${String(new Date().getMonth() + 1)}.${String(new Date().getFullYear())}` ,
    title: 'Посмотреть футбол', 
    description: 'Футбол - всемирная игра. В нее играют с самых пиленок до пожилого возраста. Недовно пошел турнир, в связи с этим хотим сообщить вам, что можете поучаствовать в нем!',
    link: 'https://go.join.football',
}];

export default allPosts;
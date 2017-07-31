/**
 * @file mint-ui组建配置引用
 * @author walker
 */

import Vue from 'vue';
import 'mint-ui/lib/style.css';
import {
    Button, Swipe, SwipeItem, Header, Tabbar, TabItem,
    TabContainer, TabContainerItem, DatetimePicker,
    Actionsheet, Field, Picker, PaletteButton
} from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
Vue.component(PaletteButton.name, PaletteButton);
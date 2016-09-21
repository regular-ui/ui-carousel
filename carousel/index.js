import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Carousel
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.current            <=> 当前页
 * @param {number=4000}             options.data.duration            => 切换间隔
 * @param {string=''}               options.data.animation           => 动画。支持`fade`, `scroll`, `swipe`, `zoom-in`, `zoom-out`
 * @param {string}                  options.data.titleTemplate      @=> 标题模板
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Carousel = Component.extend({
    name: 'carousel',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            _list: [],
            current: 0,
            active: undefined,
            duration: 4000,
            animation: '',
            titleTemplate: undefined,
        });
        this.supr();
        this.watch();

        this.resetInterval();
    },
    watch() {
        this.$watch('current', (current) => {
            this.$emit('change', {
                sender: this,
                current,
            });
        });
    },
    select(index) {
        this.data.active = this.data.current;
        this.data.current = index;
    },
    prev() {
        const length = this.data._list.length;
        this.data.active = this.data.current;
        this.data.current = (this.data.current - 1 + length)%length;
    },
    next() {
        const length = this.data._list.length;
        this.data.active = this.data.current;
        this.data.current = (this.data.current + 1)%length;
    },
    resetInterval() {
        clearInterval(this._interval);
        this._interval = setInterval(() => {
            this.next();
            this.$update();
        }, this.data.duration);
    },
});

export default Carousel;
